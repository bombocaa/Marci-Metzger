import React from "react";
import { IMGS } from "../data/constants";

export default function SearchSection() {
  return (
    <section id="search" className="relative py-36 sm:py-44 md:py-52 px-8 md:px-16 min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden border-t border-b border-[#E2DAD0]">
      {/* Full Background Image */}
      <img
        src={IMGS.searchBg}
        alt="Find Your Dream Home"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Warm Luxury Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30, 27, 24, 0.78) 0%, rgba(30, 27, 24, 0.85) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-medium text-[#FAF7F2]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Find Your Dream Home
          </h2>
        </div>

        {/* Search Filter Card */}
        <div className="bg-[#FAF7F2]/10 backdrop-blur-md p-8 sm:p-10 rounded-xs shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {[
              { label: "Location", options: ["Any", "Pahrump", "Las Vegas", "Henderson"] },
              { label: "Type", options: ["Any", "Single Family", "Condo", "Land", "Commercial"] },
              { label: "Sort By", options: ["Newest", "Price ↑", "Price ↓"] },
              { label: "Bedrooms", options: ["Any", "1+", "2+", "3+", "4+", "5+"] },
              { label: "Baths", options: ["Any", "1+", "2+", "3+"] },
            ].map(({ label, options }) => (
              <div key={label}>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-[#FAF7F2]/70 mb-2.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {label}
                </label>
                <select className="w-full border-b border-[#FAF7F2]/30 pb-2 text-sm text-[#FAF7F2] bg-transparent focus:outline-none appearance-none cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {options.map((o) => (
                    <option key={o} className="bg-[#24211E] text-[#FAF7F2]">
                      {o}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div>
              <label className="block text-[9px] tracking-[0.25em] uppercase text-[#FAF7F2]/70 mb-2.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                Price Range
              </label>
              <input
                type="text"
                placeholder="Max $"
                className="w-full border-b border-[#FAF7F2]/30 pb-2 text-sm text-[#FAF7F2] bg-transparent focus:outline-none placeholder-[#FAF7F2]/40"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              className="px-12 py-4 text-[10px] tracking-[0.25em] uppercase text-[#24211E] bg-[#FAF7F2] hover:bg-[#EBE5DF] font-semibold transition-colors cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Search Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
