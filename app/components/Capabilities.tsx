const capabilities = [
  {
    title: "Autonomous UAV Systems",
    desc: "Fully automated drones for tactical and logistics operations.",
  },
  {
    title: "Aerial Reconnaissance",
    desc: "High-precision surveillance with real-time intelligence gathering.",
  },
  {
    title: "Payload Delivery Platforms",
    desc: "Rugged delivery drones for defense and disaster response.",
  },
  {
    title: "AI-Powered Flight Control",
    desc: "Smart navigation and adaptive control algorithms.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0f0f0f]">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our <span className="text-[#ff7b00]">Capabilities</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {capabilities.map((cap, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-2xl bg-[#121212] hover:border-[#ff7b00] transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#ff7b00]">
              {cap.title}
            </h3>
            <p className="text-gray-400">{cap.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
