import React from "react";
import { GOLD } from "../data/constants";

export default function Marquee() {
  const items = [
    "$28.5M Closed · 2021",
    "90+ Clients Served",
    "Pahrump's #1 Realtor",
    "28 Years Experience",
    "5-Star Service",
    "The Ridge Realty Group",
  ];
  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-4 border-y border-black/8" style={{ backgroundColor: "#111" }}>
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
        {repeated.map((item, i) => (
          <span key={i} className="text-[10px] tracking-[0.3em] uppercase text-white/40 shrink-0" style={{ fontFamily: "'Inter', sans-serif" }}>
            {item} <span className="mx-4 opacity-30" style={{ color: GOLD }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </div>
  );
}
