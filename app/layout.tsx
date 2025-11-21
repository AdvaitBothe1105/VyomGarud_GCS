import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";


export const metadata: Metadata = {
  title: "VyomGarud GCS | Ground Control System",
  description:
    "Unified ground control platform for autonomous fleets, resilient comms, and real-time mission intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white font-poppins">
        {children}
      </body>
    </html>
  );
}
