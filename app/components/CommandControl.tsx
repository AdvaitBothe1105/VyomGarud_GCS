"use client";

import { useState, useEffect, useRef } from "react";
import type { TelemetryPoint } from "@/lib/useTelemetry";

type CommandControlProps = {
  wsUrl: string;
  latest?: TelemetryPoint | null;
};

type CommandType = "ARM" | "DISARM" | "TAKEOFF" | "LAND" | "RTL" | "SET_MODE" | "GOTO";

export default function CommandControl({ wsUrl, latest }: CommandControlProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [takeoffAlt, setTakeoffAlt] = useState(10);
  const [isSending, setIsSending] = useState(false);
  const [gotoLat, setGotoLat] = useState<number | undefined>();
  const [gotoLon, setGotoLon] = useState<number | undefined>();
  const [gotoAlt, setGotoAlt] = useState(10);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Connect to WebSocket for sending commands
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setIsConnected(true);
      console.debug("[CMD] Command WebSocket connected", wsUrl);
    };

    ws.onclose = () => {
      setIsConnected(false);
      console.debug("[CMD] Command WebSocket disconnected");
    };

    ws.onerror = (e) => {
      console.warn("[CMD] Command WebSocket error", e);
      setIsConnected(false);
    };

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [wsUrl]);

  const sendCommand = async (
    type: CommandType,
    alt?: number,
    mode?: string,
    lat?: number,
    lon?: number
  ) => {
    if (!isConnected || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      console.warn("[CMD] WebSocket not connected, cannot send command");
      return;
    }

    setIsSending(true);
    try {
      const cmd: any = { type };
      if (alt !== undefined) cmd.alt = alt;
      if (mode !== undefined) cmd.mode = mode;
      if (lat !== undefined && lon !== undefined) {
        cmd.lat = lat;
        cmd.lon = lon;
      }

      const message = JSON.stringify({ cmd });
      wsRef.current.send(message);
      console.debug("[CMD] Sent command:", cmd);
    } catch (error) {
      console.error("[CMD] Failed to send command:", error);
    } finally {
      setIsSending(false);
    }
  };

  const handleArm = () => sendCommand("ARM");
  const handleDisarm = () => sendCommand("DISARM");
  const handleTakeoff = () => sendCommand("TAKEOFF", takeoffAlt);
  const handleLand = () => sendCommand("LAND");
  const handleRTL = () => sendCommand("RTL");
  const handleSetMode = (mode: string) => sendCommand("SET_MODE", undefined, mode);
  const handleGoto = () => {
    if (!gotoLat || !gotoLon) return;
    sendCommand("GOTO", gotoAlt, undefined, gotoLat, gotoLon);
  };

  // Use current position as default for GOTO if available
  useEffect(() => {
    if (latest?.lat && latest?.lon && !gotoLat && !gotoLon) {
      setGotoLat(latest.lat);
      setGotoLon(latest.lon);
    }
  }, [latest]);

  return (
    <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 shadow shadow-black/30">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
          Mission Control
        </h3>
        <div className="flex items-center gap-2">
          <div
            className={`h-2 w-2 rounded-full ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span className="text-[10px] text-slate-500">
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {/* ARM/DISARM Row */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleArm}
            disabled={!isConnected || isSending}
            className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-semibold text-green-400 transition-all hover:bg-green-500/20 hover:border-green-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-green-500/10"
          >
            ARM
          </button>
          <button
            onClick={handleDisarm}
            disabled={!isConnected || isSending}
            className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition-all hover:bg-red-500/20 hover:border-red-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-red-500/10"
          >
            DISARM
          </button>
        </div>

        {/* TAKEOFF with Altitude Input */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="1"
              max="100"
              value={takeoffAlt}
              onChange={(e) => setTakeoffAlt(Math.max(1, Math.min(100, Number(e.target.value) || 10)))}
              disabled={!isConnected || isSending}
              className="flex-1 rounded-lg border border-white/10 bg-slate-800/50 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-[#ff7b00]/50 focus:outline-none focus:ring-1 focus:ring-[#ff7b00]/30 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Altitude (m)"
            />
            <span className="text-xs text-slate-500">m</span>
          </div>
          <button
            onClick={handleTakeoff}
            disabled={!isConnected || isSending}
            className="w-full rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-400 transition-all hover:bg-blue-500/20 hover:border-blue-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-500/10"
          >
            TAKEOFF
          </button>
        </div>

        {/* LAND and RTL Row */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleLand}
            disabled={!isConnected || isSending}
            className="rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-sm font-semibold text-orange-400 transition-all hover:bg-orange-500/20 hover:border-orange-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-orange-500/10"
          >
            LAND
          </button>
          <button
            onClick={handleRTL}
            disabled={!isConnected || isSending}
            className="rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-3 text-sm font-semibold text-purple-400 transition-all hover:bg-purple-500/20 hover:border-purple-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-purple-500/10"
          >
            RTL
          </button>
        </div>

        {/* Mode Switching */}
        <div className="space-y-2">
          <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
            Flight Mode
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleSetMode("GUIDED")}
              disabled={!isConnected || isSending}
              className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-400 transition-all hover:bg-cyan-500/20 hover:border-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-cyan-500/10"
            >
              GUIDED
            </button>
            <button
              onClick={() => handleSetMode("AUTO")}
              disabled={!isConnected || isSending}
              className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-3 py-2 text-xs font-semibold text-yellow-400 transition-all hover:bg-yellow-500/20 hover:border-yellow-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-yellow-500/10"
            >
              AUTO
            </button>
            <button
              onClick={() => handleSetMode("LOITER")}
              disabled={!isConnected || isSending}
              className="rounded-lg border border-pink-500/30 bg-pink-500/10 px-3 py-2 text-xs font-semibold text-pink-400 transition-all hover:bg-pink-500/20 hover:border-pink-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-pink-500/10"
            >
              LOITER
            </button>
          </div>
        </div>

        {/* Go To GPS Position */}
        <div className="space-y-2">
          <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
            Go To Position
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="mb-1 block text-[10px] text-slate-500">Latitude</label>
                <input
                  type="number"
                  step="0.000001"
                  value={gotoLat ?? ""}
                  onChange={(e) => setGotoLat(e.target.value ? Number(e.target.value) : undefined)}
                  disabled={!isConnected || isSending}
                  className="w-full rounded-lg border border-white/10 bg-slate-800/50 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#ff7b00]/50 focus:outline-none focus:ring-1 focus:ring-[#ff7b00]/30 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Lat"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] text-slate-500">Longitude</label>
                <input
                  type="number"
                  step="0.000001"
                  value={gotoLon ?? ""}
                  onChange={(e) => setGotoLon(e.target.value ? Number(e.target.value) : undefined)}
                  disabled={!isConnected || isSending}
                  className="w-full rounded-lg border border-white/10 bg-slate-800/50 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#ff7b00]/50 focus:outline-none focus:ring-1 focus:ring-[#ff7b00]/30 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Lon"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="100"
                value={gotoAlt}
                onChange={(e) => setGotoAlt(Math.max(1, Math.min(100, Number(e.target.value) || 10)))}
                disabled={!isConnected || isSending}
                className="flex-1 rounded-lg border border-white/10 bg-slate-800/50 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-[#ff7b00]/50 focus:outline-none focus:ring-1 focus:ring-[#ff7b00]/30 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Altitude (m)"
              />
              <span className="text-xs text-slate-500">m</span>
            </div>
            <button
              onClick={handleGoto}
              disabled={!isConnected || isSending || !gotoLat || !gotoLon}
              className="w-full rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2.5 text-sm font-semibold text-indigo-400 transition-all hover:bg-indigo-500/20 hover:border-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-indigo-500/10"
            >
              GO TO
            </button>
          </div>
        </div>
      </div>

      {isSending && (
        <div className="mt-3 text-center text-xs text-slate-500">
          Sending command...
        </div>
      )}
    </div>
  );
}

