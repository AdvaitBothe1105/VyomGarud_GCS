"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiUser, FiShoppingCart, FiX } from "react-icons/fi";

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
    <section id="hero" className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[url('/drone-hero.png')] bg-cover bg-center text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top Navigation */}
      <div className="relative z-10 flex justify-between items-center px-6 md:px-16 py-6">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu className="text-xl" />
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">
            Menu
          </h1>
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
                className="fixed right-0 top-0 h-full w-64 bg-[#121212] z-50 flex flex-col p-6"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              >
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <FiX
                    className="text-2xl cursor-pointer hover:text-[#ff7b00] transition"
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-6 text-gray-300 text-lg font-medium">
                  {[
                    "hero",
                    "about",
                    "capabilities",
                    "highlights",
                    "contact",
                  ].map((id) => (
                    <button
                      key={id}
                      onClick={() => handleScroll(id)}
                      className="text-left hover:text-[#ff7b00] transition"
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  ))}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        <div className="text-2xl font-bold tracking-tight text-gray-100">
          <Link href="/">
            Vyom<span className="text-[#ff7b00]">Garud</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <FiShoppingCart className="text-xl cursor-pointer hover:text-[#ff7b00] transition" />
          <FiUser className="text-xl cursor-pointer hover:text-[#ff7b00] transition" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 md:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Redefine the Way <span className="text-[#ff7b00]">You Fly</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 max-w-xl text-sm md:text-lg mb-8"
        >
          Turn every mission into a masterpiece with precision-engineered UAV
          systems built for performance, autonomy, and resilience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex gap-4"
        >
          <button className="px-6 py-3 rounded-full border border-gray-400 hover:bg-[#ff7b00] hover:border-[#ff7b00] transition font-medium">
            View Features
          </button>
          <button className="px-6 py-3 rounded-full bg-[#ff7b00] hover:bg-[#ff9933] transition font-medium">
            Shop Now
          </button>
        </motion.div>
      </div>

      {/* Bottom Feature Icons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-10 flex justify-center gap-8 md:gap-16 pb-12 text-gray-300 text-sm"
      >
        <div className="flex flex-col items-center">
          <span className="font-semibold text-white">4K UHD</span>
          <span className="text-gray-400">Camera Quality</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-white">25 km</span>
          <span className="text-gray-400">Control Range</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-white">70 min</span>
          <span className="text-gray-400">Flight Time</span>
        </div>
      </motion.div>

      {/* Background Animation Layer */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"
      />
    </section>
  );
}
