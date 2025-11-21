"use client";

import { useEffect, useMemo } from "react";
import type { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import type { TelemetryPoint } from "@/lib/useTelemetry";
import { fixLeafletIcons } from "@/lib/fixLeafletIcon";

type MapViewProps = {
  latest: TelemetryPoint | null;
  points: LatLngExpression[];
};

export default function MapView({ latest, points }: MapViewProps) {
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  const altitude = latest?.alt ?? latest?.relative_alt ?? null;
  const center = useMemo<LatLngExpression>(() => {
    if (points.length) return points[points.length - 1];
    return [47.397742, 8.545594];
  }, [points]);

  const polylineOptions = useMemo(
    () => ({ color: "#fb923c", weight: 3, opacity: 0.85 }),
    [],
  );

  const overlayStats = [
    {
      label: "Altitude",
      value: altitude !== null ? `${altitude.toFixed(1)} m` : "—",
    },
    {
      label: "Speed",
      value: latest?.ground_speed ? `${latest.ground_speed.toFixed(1)} m/s` : "—",
    },
  ];

  return (
    <div className="relative h-[420px] overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 shadow-xl shadow-black/40">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

      <MapContainer
        center={center}
        zoom={17}
        scrollWheelZoom
        style={{ height: "100%", width: "100%" }}
        className="[&_.leaflet-tile-pane]:brightness-110"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.length > 0 && (
          <Polyline positions={points} pathOptions={polylineOptions} />
        )}
        {points.length > 0 && <Marker position={points[points.length - 1]} />}
      </MapContainer>

      <div className="absolute top-4 left-4 flex flex-wrap gap-3 rounded-2xl bg-slate-900/80 backdrop-blur px-4 py-3 text-xs uppercase tracking-[0.25em]">
        {overlayStats.map((stat) => (
          <div key={stat.label} className="flex flex-col text-[11px] tracking-[0.3em] text-slate-400">
            <span>{stat.label}</span>
            <span className="text-base font-semibold tracking-normal text-white">
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {!points.length && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 text-sm text-slate-400 backdrop-blur">
          Awaiting GPS lock…
        </div>
      )}
    </div>
  );
}
