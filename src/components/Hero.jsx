import React from "react";
import { IMGS } from "../data/constants";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px]">
      <img src={IMGS.hero} alt="Mountain Falls Pond - Pahrump, Nevada" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(30,27,24,0.85) 0%, rgba(30,27,24,0.45) 55%, rgba(30,27,24,0.1) 100%)" }}
      />

      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-8 md:px-16 max-w-7xl mx-auto w-full">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-px w-10 bg-[#FAF7F2]/60" />
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#FAF7F2]/70" style={{ fontFamily: "'Inter', sans-serif" }}>
            MARCI METZGER - THE RIDGE REALTY GROUP
          </span>
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-[#FAF7F2] leading-none mb-10">
          <span className="block text-[clamp(3rem,9vw,7rem)] font-medium">Pahrump's</span>
          <span className="block text-[clamp(3rem,9vw,7rem)] font-medium">Realtor</span>
        </h1>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href="#contact"
            className="px-10 py-4 text-[10px] tracking-[0.25em] uppercase text-[#24211E] font-semibold bg-[#FAF7F2] hover:bg-[#EBE5DF] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Call Now
          </a>
          <a
            href="#search"
            className="text-[10px] tracking-[0.2em] uppercase text-[#FAF7F2]/70 hover:text-[#FAF7F2] transition-colors underline underline-offset-4 decoration-[#FAF7F2]/30"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Search Listings
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, rgba(250,247,242,0.3), transparent)" }} />
    </section>
  );
}
