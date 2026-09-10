import React from "react";
import { motion } from "motion/react";
import aff1 from "../assets/affiliate_1.webp";
import aff2 from "../assets/affiliate_2.webp";
import aff3 from "../assets/affiliate_3.webp";
import aff4 from "../assets/affiliate_4.webp";

const affiliates = [
  { src: aff1, alt: "The Ridge Realty Group", name: "The Ridge Realty Group" },
  { src: aff2, alt: "National Association of Realtors", name: "REALTOR® Association" },
  { src: aff3, alt: "Equal Housing Opportunity", name: "Equal Housing Opportunity" },
  { src: aff4, alt: "Pahrump Valley Chamber of Commerce", name: "Chamber of Commerce" },
];

export default function Affiliations() {
  return (
    <section className="bg-[#FAF7F2] py-12 sm:py-16 px-8 md:px-16 border-t border-[#E2DAD0] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Badges with Elegant Separation Lines */}
        <div className="w-full flex flex-wrap items-center justify-center sm:justify-around gap-8 sm:gap-6 md:gap-8">
          {affiliates.map((aff, i) => (
            <React.Fragment key={aff.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                className="flex items-center justify-center p-2 group transition-all duration-300"
              >
                <img
                  src={aff.src}
                  alt={aff.alt}
                  className="h-16 sm:h-20 md:h-24 w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
              {i < affiliates.length - 1 && (
                <div className="hidden md:block h-12 lg:h-14 w-px bg-[#E2DAD0]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
