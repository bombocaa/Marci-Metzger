import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import logoImg from "../assets/logo.webp";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="overflow-hidden">
      <div className="bg-[#FAF7F2] py-24 px-8 md:px-16 border-t border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 items-start">

          {/* Column 1: Send Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-3xl sm:text-4xl font-medium text-[#24211E] leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Find<br />Your Next<br /><em>Home.</em>
            </h2>

            {status === "success" ? (
              <div className="p-6 bg-[#F2ECE4] border border-[#E2DAD0] rounded-xs flex flex-col items-start gap-3">
                <div className="flex items-center gap-2 text-[#24211E]">
                  <CheckCircle2 className="w-5 h-5 text-[#3B3632]" />
                  <p className="font-semibold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Message Sent Successfully!
                  </p>
                </div>
                <p className="text-xs text-[#5C544D] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Thank you for reaching out. Marci Metzger will get back to you promptly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[10px] uppercase tracking-widest text-[#24211E] font-semibold underline underline-offset-4 cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-[#E2DAD0] pb-2.5 text-sm text-[#24211E] bg-transparent focus:outline-none placeholder-[#8A8075] focus:border-[#24211E] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-[#E2DAD0] pb-2.5 text-sm text-[#24211E] bg-transparent focus:outline-none placeholder-[#8A8075] focus:border-[#24211E] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-b border-[#E2DAD0] pb-2.5 text-sm text-[#24211E] bg-transparent focus:outline-none placeholder-[#8A8075] focus:border-[#24211E] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us what you're looking for"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-b border-[#E2DAD0] pb-2.5 text-sm text-[#24211E] bg-transparent focus:outline-none placeholder-[#8A8075] resize-none focus:border-[#24211E] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="self-start px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase text-[#FAF7F2] bg-[#24211E] hover:bg-[#3B3632] disabled:opacity-50 font-semibold transition-colors mt-2 cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Column 2: Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col pt-1"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A8075] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Hours of Operation
            </p>
            <div className="space-y-1">
              {[["Monday – Friday", "9am – 5pm"], ["Saturday", "By Appointment"], ["Sunday", "Closed"]].map(([day, hours]) => (
                <div key={day} className="flex justify-between text-sm py-2.5 border-b border-[#E2DAD0]">
                  <span className="text-[#5C544D]" style={{ fontFamily: "'Inter', sans-serif" }}>{day}</span>
                  <span className="text-[#8A8075] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Our Office, Address & Maps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col pt-1"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A8075] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our Office
            </p>
            <p className="text-2xl font-medium text-[#24211E] mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>
              Marci Metzger
            </p>
            <p className="text-xs tracking-widest uppercase text-[#8A8075] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              The Ridge Realty Group
            </p>
            <a
              href="https://www.google.com/maps?daddr=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048,+United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-[#5C544D] hover:text-[#24211E] leading-relaxed mb-3 group transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span>3190 HW-160, Suite F, Pahrump, Nevada 89048</span>
              <span className="inline-block text-[10px] tracking-widest uppercase text-[#8A8075] group-hover:text-[#24211E] ml-1.5 underline underline-offset-2">
                (Directions ↗)
              </span>
            </a>

            {/* Embedded Google Map */}
            <div className="w-full h-[240px] sm:h-[260px] overflow-hidden border border-[#E2DAD0] shadow-xs relative bg-[#E5E3DF] mt-1">
              <iframe
                title="Marci Metzger - 3190 HW-160, Suite F, Pahrump, NV 89048"
                src="https://maps.google.com/maps?q=36.184431,-115.955683&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <footer
        className="py-10 px-8 md:px-16"
        style={{ backgroundColor: "#1E1B18" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Logo & Brokerage */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              src={logoImg}
              alt="Marci Metzger Homes"
              className="h-12 md:h-14 w-auto max-w-[260px] object-contain brightness-0 invert opacity-90"
            />
            <span className="hidden sm:inline text-[#FAF7F2]/20">|</span>
            <p
              className="text-[11px] tracking-widest uppercase text-[#FAF7F2]/60"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The Ridge Realty Group
            </p>
          </div>

          {/* Right: Credits & Disclaimers */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[10px] text-[#FAF7F2]/50 text-center md:text-right">
            <p style={{ fontFamily: "'Inter', sans-serif" }}>
              © {new Date().getFullYear()} Marci Metzger Homes. All Rights Reserved.
            </p>
            <span className="hidden sm:inline text-[#FAF7F2]/30">·</span>
            <p style={{ fontFamily: "'Inter', sans-serif" }}>
              Equal Housing Opportunity · Nevada Real Estate
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
