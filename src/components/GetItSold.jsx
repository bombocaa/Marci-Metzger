import React from "react";
import { motion } from "motion/react";
import house1 from "../assets/house_1.webp";
import house2 from "../assets/house_2.webp";
import house3 from "../assets/house_3.webp";

export default function GetItSold() {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-20 px-6 md:px-10 lg:px-12 border-t border-[#E2DAD0] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#24211E] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get It <em>Sold.</em>
          </h2>
        </motion.div>

        {/* 1. Pool Villa */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-12 gap-8 md:gap-10 mb-10 md:mb-12 items-center"
        >
          <div className="md:col-span-6 relative overflow-hidden group rounded-xs shadow-sm">
            <img
              src={house2}
              alt="Luxury residence with pool"
              className="w-full aspect-[16/10] max-h-[280px] md:max-h-[300px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="md:col-span-6 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#24211E] mb-2.5 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
              Top Residential Sales · Last 5 Years
            </h3>
            <p className="text-[#5C544D] leading-[1.65] text-xs sm:text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              In 2021 alone, we helped nearly 90 families — closing $28.5 million in sales. Not because of luck, but because we outwork, outmarket, and outlast the competition on every single listing.
            </p>
          </div>
        </motion.div>

        {/* 2. Modern Interior */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-12 gap-8 md:gap-10 mb-10 md:mb-12 items-center"
        >
          <div className="md:col-span-6 flex flex-col justify-center order-last md:order-first">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#24211E] mb-2.5 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
              Don't just list it —
            </h3>
            <p className="text-[#5C544D] leading-[1.65] text-xs sm:text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
            </p>
          </div>
          <div className="md:col-span-6 relative overflow-hidden group rounded-xs shadow-sm">
            <img
              src={house1}
              alt="Luxury interior and kitchen"
              className="w-full aspect-[16/10] max-h-[280px] md:max-h-[300px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* 3. Keys / Closing */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-12 gap-8 md:gap-10 items-center"
        >
          <div className="md:col-span-6 relative overflow-hidden group rounded-xs shadow-sm">
            <img
              src={house3}
              alt="House keys representing smooth closing"
              className="w-full aspect-[16/10] max-h-[280px] md:max-h-[300px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="md:col-span-6 flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#24211E] mb-2.5 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
              Guide to Buyers
            </h3>
            <p className="text-[#5C544D] leading-[1.65] text-xs sm:text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
