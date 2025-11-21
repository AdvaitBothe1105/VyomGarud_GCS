"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Live Digital Twin",
    description:
      "Render every aircraft, pilot, airspace alert, and payload feed on a synchronized operational timeline.",
  },
  {
    title: "Edge Intelligence",
    description:
      "Deploy AI copilots that classify objects, detect anomalies, and recommend playbooks in real time.",
  },
  {
    title: "Governance & Audit",
    description:
      "Role-based controls, encrypted comms, and exportable audit trails that satisfy enterprise and defense mandates.",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="py-20 px-6 md:px-20 bg-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#ff7b00]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-5">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-gray-400/80 font-light mb-5">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#ff7b00]" />
            <span>Key Features</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#ff7b00]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Core <span className="text-[#ff7b00]">GCS Capabilities</span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative group"
            >
              <div className="relative h-full rounded-xl border border-gray-800/70 bg-gradient-to-br from-[#121212] via-[#131313] to-[#0f0f0f] p-6 transition-all duration-300 hover:border-[#ff7b00]/60 hover:shadow-[0_0_30px_rgba(255,123,0,0.15)] hover:-translate-y-1">
                
                {/* Corners */}
                <div className="absolute left-4 top-4 h-4 w-4 border-l-2 border-t-2 border-gray-700/50 group-hover:border-[#ff7b00]/50 transition-colors duration-300" />
                <div className="absolute right-4 bottom-4 h-4 w-4 border-r-2 border-b-2 border-gray-700/50 group-hover:border-[#ff7b00]/50 transition-colors duration-300" />

                {/* Indicator */}
                <div className="absolute top-6 right-6">
                  <div className="h-2 w-2 rounded-full bg-[#ff7b00]/40 group-hover:bg-[#ff7b00] transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="relative pr-8">
                  
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {highlight.title}
                  </h3>

                  <div className="h-px w-10 bg-gradient-to-r from-[#ff7b00] to-transparent mb-4" />

                  <p className="text-gray-300/90 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff7b00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
