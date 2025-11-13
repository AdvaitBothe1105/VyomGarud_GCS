"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "contact@vyomgarud.com",
    href: "mailto:contact@vyomgarud.com",
  },
  {
    label: "Phone",
    value: "+91 123-4567",
    href: "tel:+15551234567",
  },
  {
    label: "Location",
    value: "India",
    href: "#",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-[#0f0f0f] text-white relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-[#ff7b00]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-[#ff7b00]/5 blur-[100px]" />
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
            <span>Get In Touch</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#ff7b00]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Ready to <span className="text-[#ff7b00]">Deploy?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Connect with our team to discuss your UAV requirements and explore how VyomGarud can elevate your operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Reach out to us through any of these channels. Our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
                  className="group relative flex items-center gap-4 p-4 rounded-xl border border-gray-800/70 bg-gradient-to-br from-[#121212] to-[#0f0f0f] hover:border-[#ff7b00]/60 hover:shadow-[0_0_20px_rgba(255,123,0,0.1)] transition-all duration-300"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#ff7b00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-[#ff7b00] transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }}
              className="mt-8 p-6 rounded-xl border border-gray-800/50 bg-[#121212]/50"
            >
              <p className="text-sm text-gray-400 leading-relaxed">
                For enterprise inquiries, custom solutions, or technical support, please use the contact form or reach out directly via email.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl border border-gray-800/70 bg-gradient-to-br from-[#121212] via-[#131313] to-[#0f0f0f] shadow-xl"
            >
              {/* Name Input */}
              <div className="relative">
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff7b00]/60 focus:ring-1 focus:ring-[#ff7b00]/30 transition-all duration-300"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff7b00]/60 focus:ring-1 focus:ring-[#ff7b00]/30 transition-all duration-300"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff7b00]/60 focus:ring-1 focus:ring-[#ff7b00]/30 transition-all duration-300 resize-none"
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-lg bg-[#ff7b00] hover:bg-[#ff9933] text-white font-semibold uppercase tracking-[0.1em] text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#ff7b00]/20 hover:shadow-[#ff7b00]/30"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
