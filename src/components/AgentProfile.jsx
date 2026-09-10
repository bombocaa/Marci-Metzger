import React from "react";
import { motion } from "motion/react";
import profileImg from "../assets/profile.webp";

export default function AgentProfile() {
  return (
    <section id="about" className="bg-[#FAF7F2] overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Profile Image with subtle scale/fade in */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="relative overflow-hidden bg-[#E8E1D7] flex items-center justify-center"
          style={{ minHeight: "420px" }}
        >
          <img
            src={profileImg}
            alt="Marci Metzger, Realtor"
            className="w-full h-full object-cover object-top max-h-[560px]"
          />
        </motion.div>

        {/* Biography Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col justify-center px-8 sm:px-10 md:px-12 lg:px-14 py-12 sm:py-16 bg-[#FAF7F2]"
        >
          <p className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-[#8A8075] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            About Marci
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#24211E] leading-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Marci<br />Metzger
          </h2>
          <p className="text-sm sm:text-base italic mb-5 text-[#786F66]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Realtor for Nearly 3 Decades
          </p>
          <p className="text-[#5C544D] leading-[1.7] text-xs sm:text-sm max-w-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Nearly 30 years in the Pahrump valley have given Marci something no marketing can manufacture: genuine local knowledge and a network built on trust. She doesn't just sell homes — she finds the right fit for the right person, every time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
