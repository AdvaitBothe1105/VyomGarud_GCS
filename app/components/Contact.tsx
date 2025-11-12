"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="py-24 px-6 md:px-20 bg-[#0f0f0f] text-center">
      <h2 className="text-3xl font-semibold mb-6">
        Get in <span className="text-[#ff7b00]">Touch</span>
      </h2>
      <form
        className="max-w-lg mx-auto flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent!");
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-[#121212] border border-gray-700 text-white"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 rounded-lg bg-[#121212] border border-gray-700 text-white"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="p-3 rounded-lg bg-[#121212] border border-gray-700 text-white"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          className="bg-[#ff7b00] hover:bg-[#ff9933] py-3 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
