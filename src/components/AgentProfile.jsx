import React from "react";
import profileImg from "../assets/profile.webp";

export default function AgentProfile() {
  return (
    <section id="about" className="bg-[#FAF7F2]">
      <div className="grid md:grid-cols-2">
        <div className="relative overflow-hidden bg-[#E8E1D7] flex items-center justify-center" style={{ minHeight: "550px" }}>
          <img
            src={profileImg}
            alt="Marci Metzger, Realtor"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="flex flex-col justify-center px-12 md:px-16 py-20 bg-[#FAF7F2]">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#8A8075] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            About Marci
          </p>
          <h2 className="text-5xl md:text-6xl font-medium text-[#24211E] leading-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Marci<br />Metzger
          </h2>
          <p className="text-base italic mb-8 text-[#786F66]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Realtor for Nearly 3 Decades
          </p>
          <p className="text-[#5C544D] leading-[1.8] text-sm max-w-sm mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Nearly 30 years in the Pahrump valley have given Marci something no marketing can manufacture: genuine local knowledge and a network built on trust. She doesn't just sell homes — she finds the right fit for the right person, every time.
          </p>
          <a href="tel:2069196886" className="text-sm hover:opacity-70 transition-opacity w-fit font-medium text-[#24211E] border-b border-[#24211E]/30 pb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
            (206) 919-6886
          </a>
        </div>
      </div>
    </section>
  );
}
