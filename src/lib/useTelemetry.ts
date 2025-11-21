"use client";
import { useEffect, useRef, useState } from "react";

type RawTelemetry = {
  type?: string;
  lat?: number;
  lon?: number;
  alt?: number;
  relative_alt?: number;
  vx?: number;
  vy?: number;
  battery_remaining?: number;
  battery?: number;
  groundspeed?: number;
  base_mode?: string;
  custom_mode?: string;
  [k: string]: unknown;
};

export type TelemetryPoint = {
  ts: number;
  type: string;
  lat?: number;
  lon?: number;
  alt?: number;
  relative_alt?: number;
  velx?: number;
  vely?: number;
  velz?: number;
  ground_speed?: number;
  battery?: number;
  raw?: RawTelemetry;
};

export function useTelemetry(wsUrl?: string) {
  const [latest, setLatest] = useState<TelemetryPoint | null>(null);
  const bufferRef = useRef<TelemetryPoint[]>([]);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const url = wsUrl ?? (process.env.NEXT_PUBLIC_WS_URL as string);
    if (!url) return;

    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      console.debug("[GCS] WebSocket connected", url);
    };
    ws.onclose = () => {
      console.debug("[GCS] WebSocket disconnected");
    };
    ws.onerror = (e) => {
      console.warn("[GCS] WebSocket error", e);
    };

    ws.onmessage = (ev) => {
      try {
        // Validate that the message is a string and looks like JSON
        if (typeof ev.data !== "string") {
          console.debug("[GCS] Received non-string message, skipping");
          return;
        }

        // Check if it's valid JSON by looking for JSON-like structure
        const trimmed = ev.data.trim();
        if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) {
          console.debug("[GCS] Received non-JSON message, skipping:", trimmed.substring(0, 50));
          return;
        }

        let data: RawTelemetry;
        try {
          data = JSON.parse(ev.data) as RawTelemetry;
        } catch (parseError) {
          console.debug("[GCS] Failed to parse JSON, skipping:", ev.data.substring(0, 100));
          return;
        }

        // Validate that we have a valid telemetry object
        if (!data || typeof data !== "object") {
          console.debug("[GCS] Invalid telemetry object, skipping");
          return;
        }

        const packet: TelemetryPoint = {
          ts: Date.now(),
          type: data.type || "UNKNOWN",
        };

        if (data.type === "GLOBAL_POSITION_INT") {
          packet.lat = data.lat && data.lat / 1e7;
          packet.lon = data.lon && data.lon / 1e7;
          packet.alt = data.alt && data.alt / 1000;
          packet.relative_alt = data.relative_alt && data.relative_alt / 1000;
          packet.ground_speed =
            data.vx !== undefined && data.vy !== undefined
              ? Math.sqrt(data.vx * data.vx + data.vy * data.vy) / 100
              : undefined;
        } else if (data.type === "VFR_HUD") {
          packet.ground_speed = data.groundspeed;
          packet.alt = data.alt;
        } else if (data.type === "SYS_STATUS" || data.type === "BATTERY_STATUS") {
          packet.battery = data.battery_remaining ?? data.battery;
        }

        packet.raw = data;

        bufferRef.current.push(packet);
        if (bufferRef.current.length > 500) bufferRef.current.shift();
        
        // Merge new packet with existing latest state to preserve all fields
        setLatest((prev) => {
          if (!prev) return packet;
          // Merge raw data to preserve fields from different message types
          const mergedRaw = prev.raw ? { ...prev.raw, ...packet.raw } : packet.raw;
          return {
            ...prev,
            // Only update fields that are actually present in the new packet
            ...(packet.lat !== undefined && { lat: packet.lat }),
            ...(packet.lon !== undefined && { lon: packet.lon }),
            ...(packet.alt !== undefined && { alt: packet.alt }),
            ...(packet.relative_alt !== undefined && { relative_alt: packet.relative_alt }),
            ...(packet.ground_speed !== undefined && { ground_speed: packet.ground_speed }),
            ...(packet.battery !== undefined && { battery: packet.battery }),
            // Always update timestamp and merge raw data
            ts: packet.ts,
            raw: mergedRaw,
          };
        });
      } catch (err) {
        console.error("Malformed telemetry JSON", err);
      }
    };

    return () => {
      ws.close();
      wsRef.current = null;
    };
  }, [wsUrl]);

  const getPoints = () => [...bufferRef.current];
  return { latest, getPoints };
}
