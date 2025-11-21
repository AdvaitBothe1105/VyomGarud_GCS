"use client";

import type { TelemetryPoint } from "@/lib/useTelemetry";

type PanelsProps = {
  latest: TelemetryPoint | null;
};

export default function Panels({ latest }: PanelsProps) {
  const coords =
    latest?.lat && latest?.lon
      ? `${latest.lat.toFixed(6)}, ${latest.lon.toFixed(6)}`
      : "—, —";

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 shadow shadow-black/30">
        <div className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
          Battery
        </div>
        <div className="mt-2 text-xl font-semibold text-white">
          {typeof latest?.battery === "number"
            ? `${latest.battery}%`
            : typeof latest?.raw?.battery_remaining === "number"
            ? `${latest.raw.battery_remaining}%`
            : "N/A"}
        </div>
      </div>
      <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6 shadow shadow-black/30 sm:col-span-2">
        <div className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
          Coordinates
        </div>
        <div className="mt-2 text-2xl font-semibold text-white">{coords}</div>
      </div>
    </div>
  );
}
