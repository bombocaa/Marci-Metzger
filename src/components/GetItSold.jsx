import React from "react";
import { IMGS } from "../data/constants";

export default function GetItSold() {
  return (
    <section className="bg-[#FAF7F2] py-28 px-8 md:px-16 border-t border-[#E2DAD0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-medium text-[#24211E] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get It<br /><em>Sold.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-7 relative overflow-hidden group">
            <img src={IMGS.sold1} alt="Luxury living room" className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
          <div className="md:col-span-5 flex flex-col justify-end pb-6">
            <p className="text-[#8A8075] text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Top Residential Sales · Last 5 Years
            </p>
            <p className="text-[#5C544D] leading-[1.75] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              In 2021 alone, we helped nearly 90 families — closing $28.5 million in sales. Not because of luck, but because we outwork, outmarket, and outlast the competition on every single listing.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 flex flex-col justify-end pb-6 order-last md:order-first">
            <h3 className="text-2xl md:text-3xl font-medium text-[#24211E] mb-4 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
              Don't just list it —<br />get it <em>sold.</em>
            </h3>
            <p className="text-[#5C544D] leading-[1.75] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              We exhaust every avenue. Professional photography, targeted digital marketing, open houses, buyer's agent outreach. Your home reaches every possible buyer at the right moment.
            </p>
          </div>
          <div className="md:col-span-7 relative overflow-hidden group">
            <img src={IMGS.sold2} alt="Luxury pool villa" className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
        </div>
      </div>
    </section>
  );
}
