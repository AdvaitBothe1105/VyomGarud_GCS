"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiUser, FiShoppingCart, FiX } from "react-icons/fi";

const sidebarItems = [
  { id: "hero", label: "Overview" },
  { id: "about", label: "Mission" },
  { id: "highlights", label: "Capabilities" },
  { id: "products", label: "Modules" },
  { id: "contact", label: "Contact" },
];

const statHighlights = [
  { label: "120+", description: "Fleet Profiles" },
  { label: "<200 ms", description: "Command Latency" },
  { label: "AES-256", description: "End-to-End Security" },
];

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[url('/drone-hero.png')] bg-cover bg-center text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top Navigation */}
      <div className="relative z-10 flex justify-between items-center px-6 md:px-16 py-6">
        {/* Menu */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu className="text-xl" />
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">Menu</h1>
        </div>

        {/* Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/60 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Sidebar Panel */}
              <motion.aside
                className="fixed left-0 top-0 h-full w-[75%] max-w-sm sm:max-w-md md:w-96 bg-[#121212] z-50 flex flex-col p-6 sm:p-7"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                <div className="flex justify-end mb-8">
                  <FiX
                    className="text-2xl cursor-pointer hover:text-[#ff7b00] transition"
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-5 text-gray-300 text-base sm:text-lg font-medium">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleScroll(item.id)}
                      className="text-left hover:text-[#ff7b00] transition"
                    >
                      {item.label}
                    </button>
                  ))}

                  <Link
                    href="/gcs"
                    className="mt-6 inline-flex items-center text-[#ff7b00] hover:text-[#ff9933] transition"
                    onClick={() => setIsOpen(false)}
                  >
                    GCS Command Center
                  </Link>
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-gray-100">
          <Link href="/">
            Vyom<span className="text-[#ff7b00]">Garud</span>
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="/gcs"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#ff7b00]/50 px-4 py-2 text-sm font-semibold text-[#ff7b00] hover:border-[#ff9933] hover:text-[#ff9933] transition"
          >
            GCS Page
          </Link>
          <FiShoppingCart className="text-xl cursor-pointer hover:text-[#ff7b00] transition" />
          <FiUser className="text-xl cursor-pointer hover:text-[#ff7b00] transition" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Command Every Mission with{" "}
          <span className="text-[#ff7b00]">VyomGarud GCS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-gray-300 max-w-xl text-sm md:text-lg mb-8"
        >
          Consolidate fleets, payloads, and airspace data into a single ground
          console that delivers live telemetry, resilient comms, and AI-backed
          decision support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
          className="flex gap-4"
        >
          <button
            onClick={() => handleScroll("highlights")}
            className="px-6 py-3 rounded-full border border-gray-400 hover:bg-[#ff7b00] hover:border-[#ff7b00] transition font-medium"
          >
            See Capabilities
          </button>
          <Link
            href="/gcs"
            className="px-6 py-3 rounded-full bg-[#ff7b00] hover:bg-[#ff9933] transition font-medium"
          >
            Open GCS Page
          </Link>
        </motion.div>
      </div>

      {/* Bottom Feature Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative z-10 flex justify-center gap-8 md:gap-16 pb-12 text-gray-300 text-sm"
      >
        {statHighlights.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="font-semibold text-white">{stat.label}</span>
            <span className="text-gray-400">{stat.description}</span>
          </div>
        ))}
      </motion.div>

      {/* Background Animation Layer */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"
      />
    </section>
  );
}