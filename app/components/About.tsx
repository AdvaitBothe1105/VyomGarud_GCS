"use client";

import { motion } from "framer-motion";

const missionCards = [
  {
    title: "LIMITLESS CONNECTIVITY",
    description:
      "Cellular and LoRa-based hybrid communication enabling seamless command, control, and multi-drone coordination.",
    number: "01",
  },
  {
    title: "MILITARY-GRADE PRECISION",
    description:
      "Cutting-edge avionics, AI-driven telemetry, and secure cloud infrastructure for unmatched situational awareness.",
    number: "02",
  },
  {
    title: "AUTONOMOUS RESILIENCE",
    description:
      "Engineering the future through autonomy, resilience, and connectivity—built for limitless-range operations.",
    number: "03",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-[#ff7b00]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#ff7b00]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -150px 0px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-gray-400/80 font-light mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#ff7b00]" />
            <span>Our Mission</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#ff7b00]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Engineering the Future of{" "}
            <span className="text-[#ff7b00]">Aerial Operations</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            We specialize in limitless-range UAVs powered by cellular and
            LoRa-based hybrid communication, enabling seamless command, control,
            and multi-drone coordination even in challenging environments.
          </p>
        </motion.div>

        {/* Mission Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {missionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl border border-gray-800/70 bg-gradient-to-br from-[#121212] via-[#131313] to-[#0f0f0f] overflow-hidden transition-all duration-500 hover:border-[#ff7b00]/70 hover:shadow-[0_0_40px_rgba(255,123,0,0.2)] hover:-translate-y-1">
                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#ff7b00]/40" />
                  <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-[#ff7b00]/20 via-[#ff7b00]/5 to-transparent opacity-50" />
                </div>

                {/* Corner accents with enhanced styling */}
                <div className="absolute left-5 top-5 h-6 w-6">
                  <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-gray-700/60 group-hover:border-[#ff7b00]/60 transition-colors duration-500" />
                  <div className="absolute left-0 top-0 h-1.5 w-1.5 bg-[#ff7b00]/0 group-hover:bg-[#ff7b00]/40 transition-all duration-500" />
                </div>
                <div className="absolute right-5 bottom-5 h-6 w-6">
                  <div className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-gray-700/60 group-hover:border-[#ff7b00]/60 transition-colors duration-500" />
                  <div className="absolute right-0 bottom-0 h-1.5 w-1.5 bg-[#ff7b00]/0 group-hover:bg-[#ff7b00]/40 transition-all duration-500" />
                </div>

                {/* Number badge */}
                <div className="absolute top-6 right-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#ff7b00]/10 blur-md group-hover:bg-[#ff7b00]/20 transition-all duration-500" />
                    <div className="relative text-4xl font-bold text-[#ff7b00]/30 group-hover:text-[#ff7b00]/50 transition-colors duration-500">
                      {card.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 pt-12 h-full flex flex-col">
                  {/* Title with enhanced styling */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight text-white uppercase tracking-tight">
                    {card.title.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="block"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </h3>

                  {/* Divider line */}
                  <div className="h-px w-12 bg-gradient-to-r from-[#ff7b00] to-transparent mb-6" />

                  {/* Description with better typography */}
                  <p className="text-gray-300/90 text-sm leading-relaxed flex-grow">
                    {card.description}
                  </p>

                  {/* Bottom indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-[#ff7b00]/50 to-transparent" />
                    <div className="h-1.5 w-1.5 rounded-full bg-[#ff7b00]/60 group-hover:bg-[#ff7b00] transition-colors duration-500" />
                  </div>
                </div>

                {/* Enhanced background glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(255,123,0,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
