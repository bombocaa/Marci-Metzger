import React from "react";
import { GOLD, IMGS } from "../data/constants";

export default function SearchSection() {
  return (
    <section id="search" className="bg-white">
      <div className="relative h-56 overflow-hidden">
        <img src={IMGS.searchBg} alt="Luxury property" className="w-full h-full object-cover" style={{ objectPosition: "center 60%" }} />
        <div className="absolute inset-0 bg-black/55 flex items-center px-8 md:px-16">
          <h2 className="text-3xl md:text-5xl font-medium text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Find Your Dream Home
          </h2>
        </div>
      </div>

      <div className="px-8 md:px-16 py-14 border-b border-black/6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
            {[
              { label: "Location", options: ["Any", "Pahrump", "Las Vegas", "Henderson"] },
              { label: "Type", options: ["Any", "Single Family", "Condo", "Land", "Commercial"] },
              { label: "Sort By", options: ["Newest", "Price ↑", "Price ↓"] },
              { label: "Bedrooms", options: ["Any", "1+", "2+", "3+", "4+", "5+"] },
              { label: "Baths", options: ["Any", "1+", "2+", "3+"] },
            ].map(({ label, options }) => (
              <div key={label}>
                <label className="block text-[9px] tracking-[0.25em] uppercase text-black/25 mb-2.5" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</label>
                <select className="w-full border-b border-black/10 pb-2 text-sm text-black/70 bg-transparent focus:outline-none appearance-none cursor-pointer" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {options.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
            <div>
              <label className="block text-[9px] tracking-[0.25em] uppercase text-black/25 mb-2.5" style={{ fontFamily: "'Inter', sans-serif" }}>Price Range</label>
              <input type="text" placeholder="Max $" className="w-full border-b border-black/10 pb-2 text-sm text-black/70 bg-transparent focus:outline-none placeholder-black/20" style={{ fontFamily: "'Inter', sans-serif" }} />
            </div>
          </div>
          <button
            className="px-12 py-4 text-[10px] tracking-[0.25em] uppercase text-black font-semibold hover:opacity-75 transition-opacity cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif", backgroundColor: GOLD }}
          >
            Search Now
          </button>
        </div>
      </div>
    </section>
  );
}
