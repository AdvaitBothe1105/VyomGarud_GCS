import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VyomGarud | UAV Systems",
  description: "Military-grade UAV & drone systems - Precision. Power. Autonomy.",
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
