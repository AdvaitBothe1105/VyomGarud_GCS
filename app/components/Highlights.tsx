const highlights = [
  "Military-grade reliability and endurance",
  "AI-driven navigation and analytics",
  "Modular architecture for flexible missions",
];

export default function Highlights() {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#121212] text-center">
      <h2 className="text-3xl font-semibold mb-10">
        Why <span className="text-[#ff7b00]">VyomGarud?</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {highlights.map((point, i) => (
          <div
            key={i}
            className="border border-gray-700 rounded-xl p-6 bg-[#0f0f0f] hover:border-[#ff7b00] transition"
          >
            <p className="text-gray-300 font-medium">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
