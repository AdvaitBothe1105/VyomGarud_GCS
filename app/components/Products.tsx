"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "8K Ultra HD Camera",
    desc: "Capture cinematic detail from every angle.",
  },
  {
    title: "Smart Obstacle Avoidance",
    desc: "Fly with confidence — our AI-powered sensors keep you safe.",
  },
  {
    title: "45-Minute Flight Time",
    desc: "Explore farther, shoot longer.",
  },
  {
    title: "Foldable & Travel-Ready",
    desc: "Compact design that goes wherever you go.",
  },
];

const products = [
  {
    id: 1,
    name: "Phantom X Pro",
    image: "/drone1.png",
    label: "Deploy",
    desc: "Cinematic aerial performance with adaptive AI stabilization.",
    tier: "Recon Command",
    specs: [
      { label: "Speed", value: "108 km/h" },
      { label: "Range", value: "24 km" },
      { label: "Flight", value: "47 min" },
    ],
  },
  {
    id: 2,
    name: "AeroScout Mini",
    image: "/drone2.png",
    label: "Briefing",
    desc: "Compact, foldable, and ultra-portable — your perfect travel drone.",
    tier: "Rapid Response",
    specs: [
      { label: "Speed", value: "86 km/h" },
      { label: "Range", value: "16 km" },
      { label: "Flight", value: "38 min" },
    ],
  },
  {
    id: 3,
    name: "Volt XRT",
    image: "/drone3.png",
    label: "Details",
    desc: "Engineered for endurance and precision industrial missions.",
    tier: "Industrial Strike",
    specs: [
      { label: "Speed", value: "120 km/h" },
      { label: "Range", value: "32 km" },
      { label: "Flight", value: "52 min" },
    ],
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-24 px-6 md:px-20 bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Main Performance Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24 relative">
        {/* Simplified ambient glow */}
        <div className="pointer-events-none absolute -top-20 -left-32 h-64 w-64 rounded-full bg-[#ff7b00]/8 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-12 -right-24 h-56 w-56 rounded-full bg-[#ff7b00]/8 blur-[90px]" />

        {/* Drone Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-6 bg-gradient-to-tr from-[#141414] to-[#0f0f0f] rounded-2xl border border-gray-800/60 shadow-xl" />
          <Image
            src="/drone15.png"
            alt="VyomGarud Drone"
            width={600}
            height={400}
            className="relative z-10 object-contain drop-shadow-[0_0_40px_rgba(255,123,0,0.25)]"
            loading="eager"
            priority
          />
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-[#121212] border border-gray-800 rounded-full text-xs uppercase tracking-[0.3em] text-[#ff7b00]/80">
            Stealth Precision
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-gray-400/80 font-light mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-[#ff7b00] to-transparent" />
            Tactical Aerodynamics
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-5 leading-tight text-white">
            Next-Level Performance
            <span className="block text-2xl md:text-3xl text-gray-300 font-light">
              Engineered for Elite Missions
            </span>
          </h2>
          <p className="text-gray-400/90 max-w-lg mb-7">
            A fusion of carbon-grade resilience, AI stabilization, and mission-ready agility crafted to excel in the harshest theatres of operation.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                viewport={{ once: true }}
                className="relative rounded-lg border border-gray-800 bg-[#131313] p-4 transition-all duration-300 hover:border-[#ff7b00]/60 hover:shadow-md hover:shadow-[#ff7b00]/10"
              >
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-[#ff7b00] to-transparent rounded-full" />
                <h3 className="text-lg font-semibold text-white mb-1.5">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Product Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-3">
          Explore Our <span className="text-[#ff7b00]">Top Drones</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          From cinematic footage to industrial inspections, choose from our expertly crafted range built for power, precision, and performance.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-xl border border-gray-800 bg-[#141414] transition-all duration-300 hover:border-[#ff7b00]/60 hover:shadow-lg hover:shadow-[#ff7b00]/10"
          >
            {/* Simplified corner accents */}
            <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-gray-700/50" />
            <div className="absolute right-4 bottom-4 h-6 w-6 border-r border-b border-gray-700/50" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 text-[10px] uppercase tracking-[0.3em] text-gray-500">
              <span>{product.tier}</span>
              <span className="rounded-full border border-[#ff7b00]/30 bg-[#181818] px-2.5 py-1 text-[#ff7b00]/90">
                {String(product.id).padStart(2, "0")}
              </span>
            </div>

            {/* Image */}
            <div className="relative w-full h-56 mt-3 overflow-hidden flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={280}
                height={180}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="px-5 pb-5 pt-4">
              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-gray-500">
                <span>Model</span>
                <span className="text-[#ff7b00]/80">Active</span>
              </div>
              <h3 className="text-xl font-semibold mb-1 text-white">{product.name}</h3>
              <p className="text-sm text-gray-400 mb-5">{product.desc}</p>

              {/* Specs */}
              <div className="mb-5 grid grid-cols-3 gap-2">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded border border-gray-800 bg-[#0f0f0f] px-2 py-2 text-center"
                  >
                    <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-0.5">
                      {spec.label}
                    </p>
                    <p className="text-xs font-semibold text-white">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button className="w-full rounded-full bg-[#ff7b00] py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#ff9933] hover:shadow-md hover:shadow-[#ff7b00]/30">
                {product.label}
              </button>
            </div>

            {/* Subtle hover glow - only on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 bg-gradient-to-b from-transparent via-[#ff7b00]/5 to-transparent transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}