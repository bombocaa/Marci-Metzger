import React from "react";
import { GOLD, IMGS } from "../data/constants";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px]">
      <img src={IMGS.hero} alt="Luxury home exterior at night" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.1) 100%)" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 max-w-7xl mx-auto w-full">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10" style={{ backgroundColor: GOLD }} />
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/50" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Ridge Realty Group · Pahrump, NV
          </span>
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-white leading-none mb-10">
          <span className="block text-[clamp(3rem,9vw,7rem)] font-medium">Pahrump's</span>
          <span className="block text-[clamp(3rem,9vw,7rem)] font-medium italic" style={{ color: GOLD }}>Premier</span>
          <span className="block text-[clamp(3rem,9vw,7rem)] font-medium">Realtor</span>
        </h1>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href="#contact"
            className="px-10 py-4 text-[10px] tracking-[0.25em] uppercase text-black font-semibold hover:opacity-85 transition-opacity"
            style={{ fontFamily: "'Inter', sans-serif", backgroundColor: GOLD }}
          >
            Call Now
          </a>
          <a
            href="#search"
            className="text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors underline underline-offset-4 decoration-white/20"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Search Listings
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${GOLD}80, transparent)` }} />
    </section>
  );
}
