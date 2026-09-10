import React from "react";
import { motion } from "motion/react";
import aff1 from "../assets/affiliate_1.webp";
import aff2 from "../assets/affiliate_2.webp";
import aff3 from "../assets/affiliate_3.webp";
import aff4 from "../assets/affiliate_4.webp";

const affiliates = [
  {
    src: aff1,
    alt: "The Ridge Realty Group",
    name: "The Ridge Realty Group",
    subtitle: "Premier Brokerage Partner",
  },
  {
    src: aff3,
    alt: "Equal Housing Opportunity",
    name: "Equal Housing Opportunity",
    subtitle: "Committed to Fair Housing",
  },
  {
    src: aff2,
    alt: "National Association of Realtors",
    name: "REALTOR® Association",
    subtitle: "Strict Code of Ethics",
  },
  {
    src: aff4,
    alt: "Pahrump Valley Chamber of Commerce",
    name: "Chamber of Commerce",
    subtitle: "Community Leadership",
  },
];

export default function Affiliations() {
  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-14 md:py-16 px-6 md:px-10 lg:px-12 border-t border-[#E2DAD0] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header Detail */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10"
        >
          <h3
            className="text-lg sm:text-xl md:text-2xl font-medium text-[#24211E]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Accredited & Trusted Partnerships
          </h3>
        </motion.div>

        {/* Badges Grid with Elegant Dividers */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-[#E2DAD0] items-stretch border-y sm:border-none border-[#E2DAD0]">
          {affiliates.map((aff, i) => (
            <motion.div
              key={aff.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center group p-4 sm:p-5 transition-all duration-300"
            >
              {/* Logo Box with Soft Accent */}
              <div className="h-16 sm:h-18 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={aff.src}
                  alt={aff.alt}
                  className="h-11 sm:h-13 md:h-14 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] object-contain"
                />
              </div>

              {/* Title & Subtitle */}
              <h4
                className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#24211E] uppercase mb-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aff.name}
              </h4>
              <p
                className="text-[9px] sm:text-[9.5px] tracking-widest uppercase text-[#8A8075]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {aff.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
