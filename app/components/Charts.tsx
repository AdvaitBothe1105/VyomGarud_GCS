"use client";

import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import type { TelemetryPoint } from "@/lib/useTelemetry";

type ChartsProps = {
  history: TelemetryPoint[];
};

export default function Charts({ history }: ChartsProps) {
  const data = useMemo(() => {
    return history
      .map((p, index) => ({
        index,
        time: new Date(p.ts).toLocaleTimeString(),
        timestamp: p.ts,
        alt: p.alt ?? p.relative_alt ?? null,
        speed: p.ground_speed ?? null,
        battery: p.battery ?? null,
      }))
      .filter(
        (d) => d.alt !== null || d.speed !== null || d.battery !== null,
      );
  }, [history]);

  const chartCards = [
    { 
      title: "Altitude", 
      unit: "m",
      key: "alt", 
      color: "#60a5fa",
      strokeWidth: 2,
    },
    { 
      title: "Ground Speed", 
      unit: "m/s",
      key: "speed", 
      color: "#34d399",
      strokeWidth: 2,
    },
    { 
      title: "Battery", 
      unit: "%",
      key: "battery", 
      color: "#f97316",
      domain: [0, 100] as [number, number],
      strokeWidth: 2,
    },
  ];

  if (!data.length) {
    return (
      <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-8 text-center shadow shadow-black/30">
        <div className="text-sm text-slate-400">Waiting for telemetry data to plot…</div>
      </div>
    );
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-lg border border-white/10 bg-slate-900/95 p-3 shadow-lg backdrop-blur">
          <p className="text-xs text-slate-400 mb-1">{label}</p>
          {payload.map((entry: any, idx: number) => (
            <p key={idx} className="text-sm font-semibold" style={{ color: entry.color }}>
              {entry.name}: {entry.value !== null ? entry.value.toFixed(2) : "N/A"} {entry.dataKey === "alt" ? "m" : entry.dataKey === "speed" ? "m/s" : "%"}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {chartCards.map((chart) => {
        const chartData = data.filter((d) => d[chart.key as keyof typeof d] !== null);
        const hasData = chartData.length > 0;
        
        return (
          <div
            key={chart.key}
            className="rounded-2xl border border-white/5 bg-slate-900/60 p-5 shadow shadow-black/30"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
                {chart.title}
              </h3>
              {hasData && (
                <span className="text-xs text-slate-500">{chart.unit}</span>
              )}
            </div>
            {hasData ? (
              <ResponsiveContainer width="100%" height={200}>
                <LineChart 
                  data={chartData}
                  margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="index" 
                    hide
                    scale="linear"
                  />
                  <YAxis 
                    domain={chart.domain ?? ["auto", "auto"]}
                    stroke="rgba(148, 163, 184, 0.5)"
                    tick={{ fill: "rgba(148, 163, 184, 0.7)", fontSize: 11 }}
                    width={50}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey={chart.key}
                    stroke={chart.color}
                    strokeWidth={chart.strokeWidth}
                    dot={false}
                    activeDot={{ r: 4, fill: chart.color }}
                    isAnimationActive={true}
                    animationDuration={300}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-[200px] items-center justify-center text-xs text-slate-500">
                No data available
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
