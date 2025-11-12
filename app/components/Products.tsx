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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24 relative">
        <div className="pointer-events-none absolute -top-20 -left-32 h-72 w-72 rounded-full bg-[#ff7b00]/10 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-12 -right-24 h-64 w-64 rounded-full bg-[#ff7b00]/10 blur-[120px]" />

        {/* Drone Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-64 w-64 rounded-full border border-gray-800/80 backdrop-blur-sm" />
          </div>
          <div className="absolute -inset-8 bg-gradient-to-tr from-[#141414] via-[#1f1f1f] to-[#0f0f0f] rounded-[32px] border border-gray-800/70 shadow-[0px_30px_80px_rgba(0,0,0,0.45)]" />
          <Image
            src="/drone15.png"
            alt="VyomGarud Drone"
            width={600}
            height={400}
            className="relative z-10 object-contain drop-shadow-[0_0_60px_rgba(255,123,0,0.35)]"
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#121212]/80 border border-gray-800 rounded-full text-xs uppercase tracking-[0.35em] text-[#ff7b00]/80">
            Stealth Precision
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center gap-4 text-[10px] tracking-[0.45em] uppercase text-gray-400/80 font-light mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-[#ff7b00] to-transparent" />
            Tactical Aerodynamics
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight text-white">
            Next-Level Performance
            <span className="block text-2xl md:text-3xl text-gray-300 font-light">
              Engineered for Elite Missions
            </span>
          </h2>
          <p className="text-gray-400/90 max-w-lg mb-8">
            A fusion of carbon-grade resilience, AI stabilization, and mission-ready agility crafted to excel in the harshest theatres of operation.
          </p>

          <ul className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative rounded-xl border border-gray-800 bg-[#131313]/80 p-5 shadow-[0px_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0px_15px_40px_rgba(255,123,0,0.15)] hover:border-[#ff7b00]/60 transition-colors"
              >
                <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#ff7b00] to-transparent rounded-full" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm md:text-sm">{feature.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Product Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">
          Explore Our <span className="text-[#ff7b00]">Top Drones</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          From cinematic footage to industrial inspections, choose from our expertly crafted range built for power, precision, and performance.
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-gray-800/40 bg-[#101010]/40 backdrop-blur-sm [mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,123,0,0.07)_0%,rgba(17,17,17,0)_42%,rgba(255,123,0,0.08)_72%,rgba(17,17,17,0)_100%)] opacity-70 mix-blend-screen" />

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-[#141414]/90 via-[#171717]/70 to-[#0b0b0b]/90 shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-[border-color,transform,box-shadow] hover:-translate-y-2 hover:border-[#ff7b00]/70 hover:shadow-[0_45px_95px_rgba(255,123,0,0.22)]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,123,0,0.16),transparent_60%)]" />
            </div>
            <div className="absolute inset-0">
              <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-gray-700/70" />
              <div className="absolute right-6 bottom-6 h-10 w-10 border-r border-b border-gray-700/70" />
            </div>

            <div className="relative flex items-center justify-between px-6 pt-6 text-[10px] uppercase tracking-[0.4em] text-gray-500">
              <span>{product.tier}</span>
              <motion.span
                className="rounded-full border border-[#ff7b00]/30 bg-[#181818]/80 px-3 py-1 text-[#ff7b00]/90"
                whileHover={{ scale: 1.1 }}
              >
                {String(product.id).padStart(2, "0")}
              </motion.span>
            </div>

            <div className="relative w-full h-64 mt-4 overflow-hidden flex justify-center items-center">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0)_0%,rgba(10,10,10,0.6)_100%)]" />
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="px-6 pb-6 pt-5">
              <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-gray-500">
                <span>Model</span>
                <span className="text-[#ff7b00]/80">Status: Active</span>
              </div>
              <h3 className="text-2xl font-semibold mb-1 text-white">{product.name}</h3>
              <p className="text-sm text-gray-400 mb-6">{product.desc}</p>

              <div className="mb-6 grid grid-cols-3 gap-3">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-lg border border-gray-800/80 bg-[#101010]/70 px-3 py-2 text-center"
                  >
                    <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 mb-1">
                      {spec.label}
                    </p>
                    <p className="text-sm font-semibold text-white">{spec.value}</p>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full overflow-hidden rounded-full bg-[#ff7b00] py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white"
              >
                <span className="relative z-10">{product.label}</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.button>
            </div>

            {/* Hover Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff7b00]/18 to-transparent"
            />
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}