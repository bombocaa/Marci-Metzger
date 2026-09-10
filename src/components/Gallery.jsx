import React from "react";
import { IMGS } from "../data/constants";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white pt-20 pb-0">
      <div className="px-8 md:px-16 mb-12">
        <div className="max-w-7xl mx-auto flex items-baseline justify-between">
          <h2 className="text-4xl md:text-5xl font-medium text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Photo Gallery
          </h2>
          <a href="#search" className="text-[10px] tracking-[0.2em] uppercase text-black/25 hover:text-black/60 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
            View All
          </a>
        </div>
      </div>

      <div className="px-8 md:px-16 pb-20">
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-2"
          style={{ minHeight: "600px" }}
        >
          <div className="md:col-span-2 overflow-hidden group cursor-pointer relative h-[320px] md:h-full">
            <img src={IMGS.gallery[0]} alt="Luxury interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className="overflow-hidden group cursor-pointer h-[150px] md:h-[295px]">
              <img src={IMGS.gallery[1]} alt="Luxury kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="overflow-hidden group cursor-pointer h-[150px] md:h-[295px]">
              <img src={IMGS.gallery[2]} alt="Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="overflow-hidden group cursor-pointer h-[150px] md:h-[295px]">
              <img src={IMGS.gallery[3]} alt="Dining room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="overflow-hidden group cursor-pointer relative h-[150px] md:h-[295px]">
              <img src={IMGS.gallery[4]} alt="Exterior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <span className="text-white text-xs tracking-widest uppercase font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>+18 More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
