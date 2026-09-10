import React from "react";
import { motion } from "motion/react";

export default function Marquee() {
  const items = [
    "$28.5M Closed · 2021",
    "90+ Clients Served",
    "Pahrump's #1 Realtor",
    "28 Years Experience",
    "5-Star Service",
    "The Ridge Realty Group",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      role="region"
      aria-label="Key Highlights and Achievements"
      className="overflow-hidden py-4 border-y border-[#2E2925]"
      style={{ backgroundColor: "#1E1B18" }}
    >
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
        {items.map((item, i) => (
          <span key={`original-${i}`} className="text-[10px] tracking-[0.3em] uppercase text-[#FAF7F2]/60 shrink-0" style={{ fontFamily: "'Inter', sans-serif" }}>
            {item} <span className="mx-4 text-[#FAF7F2]/30">◆</span>
          </span>
        ))}
        {items.map((item, i) => (
          <span key={`dup1-${i}`} aria-hidden="true" className="text-[10px] tracking-[0.3em] uppercase text-[#FAF7F2]/60 shrink-0" style={{ fontFamily: "'Inter', sans-serif" }}>
            {item} <span className="mx-4 text-[#FAF7F2]/30">◆</span>
          </span>
        ))}
        {items.map((item, i) => (
          <span key={`dup2-${i}`} aria-hidden="true" className="text-[10px] tracking-[0.3em] uppercase text-[#FAF7F2]/60 shrink-0" style={{ fontFamily: "'Inter', sans-serif" }}>
            {item} <span className="mx-4 text-[#FAF7F2]/30">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
    </motion.div>
  );
}
