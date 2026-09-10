import React from 'react';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NEIGHBORHOODS } from '../data/properties';

export default function Neighborhoods({ onSelectCommunity }) {
  return (
    <section id="communities" className="py-24 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            Regional Enclaves
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Curated Southern Nevada Communities
          </h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            From the championship fairways of Mountain Falls to custom mountain-view acreage and the scenic Winery District, explore Pahrump's premier neighborhoods.
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {NEIGHBORHOODS.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-[#C5A059]/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Background Image with overlay */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/50 to-transparent" />
                
                {/* Price Range Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-[#F3E7C4] border border-[#C5A059]/30">
                    {item.avgPrice}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6">
                  <span className="text-[11px] uppercase tracking-widest text-[#C5A059] font-semibold block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="font-luxury text-2xl font-bold text-white">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Lifestyle Amenities */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Community Highlights:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {item.lifestyle.map((pill, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>{pill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {item.homesAvailable} Exclusive Estates in Area
                  </span>
                  <a
                    href="#listings"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C5A059] hover:text-[#F3E7C4] transition-colors"
                  >
                    <span>View Area Estates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
