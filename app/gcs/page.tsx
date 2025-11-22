"use client";

import Link from "next/link";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import Charts from "../components/Charts";
import Panels from "../components/Panels";
import CommandControl from "../components/CommandControl";
import { useTelemetry } from "@/lib/useTelemetry";
import type { LatLngExpression } from "leaflet";

const MapViewDynamic = dynamic(() => import("../components/MapView"), {
  ssr: false,
  loading: () => (
    <div className="relative h-[420px] rounded-2xl border border-white/5 bg-slate-900/40 shadow-xl shadow-black/40 flex items-center justify-center text-sm text-slate-400">
      Initializing mission map…
    </div>
  ),
});


export default function GcsPage() {
  const wsUrl = process.env.NEXT_PUBLIC_WS_URL ?? "ws://localhost:8001";
  const { latest, getPoints } = useTelemetry(wsUrl);

  const history = getPoints();
  const track = useMemo<LatLngExpression[]>(() => {
    return history
      .filter((p) => typeof p.lat === "number" && typeof p.lon === "number")
      .map((p) => [p.lat as number, p.lon as number]);
  }, [history]);

  const rawTelemetry = latest?.raw
    ? JSON.stringify(latest.raw, null, 2)
    : "Awaiting first telemetry packet…";

  const lastUpdate = latest ? new Date(latest.ts).toLocaleTimeString() : "—";
  const packets = history.length;
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/5 bg-slate-900/70 backdrop-blur px-6 py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-slate-800/70 p-3 text-sm font-semibold tracking-[0.4em] text-[#ff7b00]">
              VG
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">VyomGarud Command Console</h1>
              <p className="text-sm text-slate-400">
                Unified telemetry, mapping, and mission insights
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
            <span>Last Update: {lastUpdate}</span>
            <span>Packets: {packets}</span>
            <span className="text-[10px] tracking-[0.4em] text-slate-500">WS: {wsUrl}</span>
            <Link
              href="/"
              className="rounded-full border border-white/10 px-3 py-1 text-xs tracking-[0.3em] text-slate-200 hover:border-[#ff7b00]/50 hover:text-[#ff7b00]"
            >
              Back to Site
            </Link>
          </div>
        </div>
      </header>

      <main className="grid h-[calc(100vh-80px)] grid-cols-12 gap-4 p-6 overflow-auto">
        {/* Left Section - Map and Charts */}
        <section className="col-span-12 space-y-4 lg:col-span-8">
          <MapViewDynamic latest={latest} points={track} />
          <Charts history={history} />
        </section>

        {/* Right Section - Controls and Panels */}
        <aside className="col-span-12 space-y-4 lg:col-span-4">
          <CommandControl wsUrl={wsUrl} latest={latest} />
          <Panels latest={latest} />
        </aside>

        {/* Console - Full Width Bottom */}
        <div className="col-span-12">
          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 shadow shadow-black/30">
            <div className="mb-3 flex items-center justify-between border-b border-white/5 pb-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-[#ff7b00]">
                Telemetry Console
              </h3>
              <span className="text-[10px] text-slate-500">WS: {wsUrl}</span>
            </div>
            <pre className="max-h-64 overflow-auto rounded-lg bg-slate-950/80 p-4 text-[11px] leading-relaxed text-slate-200 font-mono">
              {rawTelemetry}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}
