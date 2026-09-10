import React from 'react';
import { Award, Compass, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import { BROKERAGE_PILLARS } from '../data/properties';

const ICONS = [Award, Compass, Camera, Sparkles];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            The Ridge Advantage
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Standard of Real Estate Distinction
          </h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Why Southern Nevada homeowners, luxury sellers, and relocating families consistently choose Marci Metzger & The Ridge Realty Group.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BROKERAGE_PILLARS.map((pillar, idx) => {
            const IconComponent = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center mb-6 group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#C5A059] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-luxury text-lg font-bold text-white mb-3 group-hover:text-[#F3E7C4] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#C5A059] uppercase tracking-wider font-semibold">
                  <span>Pillar {idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
