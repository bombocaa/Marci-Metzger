import React from "react";

export default function Affiliations() {
  return (
    <section className="bg-white border-t border-black/5 border-b border-black/5 py-12 px-8 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-8 text-center text-black/40">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-xs tracking-[0.25em] uppercase text-black/70" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Ridge Realty Group
          </span>
          <span className="text-[9px] tracking-widest text-black/40 uppercase">Licensed Nevada Brokerage</span>
        </div>
        <div className="h-6 w-px bg-black/10 hidden sm:block" />
        <div className="flex flex-col items-center">
          <span className="font-bold text-xs tracking-[0.2em] uppercase text-black/70" style={{ fontFamily: "'Inter', sans-serif" }}>
            REALTOR®
          </span>
          <span className="text-[9px] tracking-widest text-black/40 uppercase">National Association</span>
        </div>
        <div className="h-6 w-px bg-black/10 hidden sm:block" />
        <div className="flex flex-col items-center">
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-black/70" style={{ fontFamily: "'Inter', sans-serif" }}>
            Equal Housing Opportunity
          </span>
          <span className="text-[9px] tracking-widest text-black/40 uppercase">Fair Housing Protected</span>
        </div>
        <div className="h-6 w-px bg-black/10 hidden sm:block" />
        <div className="flex flex-col items-center">
          <span className="font-semibold text-xs tracking-[0.2em] uppercase text-black/70" style={{ fontFamily: "'Inter', sans-serif" }}>
            Pahrump Valley
          </span>
          <span className="text-[9px] tracking-widest text-black/40 uppercase">Chamber of Commerce</span>
        </div>
      </div>
    </section>
  );
}
