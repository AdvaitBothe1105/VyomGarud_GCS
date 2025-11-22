"use client";

import { useEffect, useMemo } from "react";
import type { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import type { TelemetryPoint } from "@/lib/useTelemetry";
import { fixLeafletIcons } from "@/lib/fixLeafletIcon";

type MapViewProps = {
  latest: TelemetryPoint | null;
  points: LatLngExpression[];
};

// Component to update map center when telemetry changes
function MapCenterUpdater({ center }: { center: LatLngExpression }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [map, center]);
  
  return null;
}

export default function MapView({ latest, points }: MapViewProps) {
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  const hasGps =
    latest?.lat !== undefined &&
    latest?.lon !== undefined &&
    !isNaN(latest.lat) &&
    !isNaN(latest.lon);

  const center = useMemo<LatLngExpression>(() => {
    if (hasGps) return [latest!.lat!, latest!.lon!] as LatLngExpression;

    // ArduPilot SITL default home
    return [-35.363262, 149.165237];
  }, [latest, hasGps]);

  const polylineOptions = useMemo(
    () => ({ color: "#fb923c", weight: 3, opacity: 0.85 }),
    []
  );

  const altitude = latest?.alt ?? latest?.relative_alt ?? null;

  const overlayStats = [
    {
      label: "Altitude",
      value: altitude !== null ? `${altitude.toFixed(1)} m` : "—",
    },
    {
      label: "Speed",
      value: latest?.ground_speed
        ? `${latest.ground_speed.toFixed(1)} m/s`
        : "—",
    },
  ];

  return (
    <div className="relative h-[500px] overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 shadow-xl shadow-black/40">
      <MapContainer
        center={center}
        zoom={18}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        
        {/* Update map center when telemetry changes */}
        <MapCenterUpdater center={center} />

        {points.length > 1 && (
          <Polyline positions={points} pathOptions={polylineOptions} />
        )}

        {hasGps && (
          <Marker position={[latest.lat!, latest.lon!] as LatLngExpression} />
        )}
      </MapContainer>

      {/* Overlay stats */}
      <div className="absolute top-4 left-4 flex flex-wrap gap-3 rounded-2xl bg-slate-900/80 backdrop-blur px-4 py-3 text-xs uppercase tracking-[0.25em]">
        {overlayStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col text-[11px] tracking-[0.3em] text-slate-400"
          >
            <span>{stat.label}</span>
            <span className="text-base font-semibold tracking-normal text-white">
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {!hasGps && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 text-sm text-slate-400 backdrop-blur">
          Awaiting GPS lock…
        </div>
      )}
    </div>
  );
}
