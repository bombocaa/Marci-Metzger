import React from "react";
import { motion } from "motion/react";
import { IMGS } from "../data/constants";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Slow Smooth Zoom Entrance */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
        src={IMGS.hero}
        alt="Mountain Falls Pond - Pahrump, Nevada"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(30,27,24,0.85) 0%, rgba(30,27,24,0.45) 55%, rgba(30,27,24,0.1) 100%)" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center pt-20 sm:pt-24 pb-8 px-8 md:px-16 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-3 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#FAF7F2]/60" />
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#FAF7F2]/80" style={{ fontFamily: "'Inter', sans-serif" }}>
            MARCI METZGER - THE RIDGE REALTY GROUP
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-[#FAF7F2] leading-[0.95] mb-7"
        >
          <span className="block text-[clamp(2.75rem,8vw,6.5rem)] font-medium">Pahrump's</span>
          <span className="block text-[clamp(2.75rem,8vw,6.5rem)] font-medium">Realtor</span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase text-[#24211E] font-semibold bg-[#FAF7F2] hover:bg-[#EBE5DF] transition-all hover:shadow-lg cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get In Touch
          </a>
          <a
            href="tel:2069196886"
            aria-label="Call Marci Metzger at (206) 919-6886"
            className="px-7 py-3.5 text-[10px] tracking-[0.25em] uppercase text-[#FAF7F2] border border-[#FAF7F2]/40 hover:border-[#FAF7F2] hover:bg-[#FAF7F2]/10 font-semibold transition-all cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Call (206) 919-6886
          </a>
          <a
            href="#search"
            className="text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/80 hover:text-[#FAF7F2] transition-colors underline underline-offset-4 decoration-[#FAF7F2]/40 ml-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Search Listings
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, rgba(250,247,242,0.3), transparent)" }} />
    </section>
  );
}
