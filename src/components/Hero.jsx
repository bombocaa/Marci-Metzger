import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search } from "lucide-react";
import { IMGS } from "../data/constants";

export default function Hero() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    Location: "Any",
    Type: "Any",
    "Sort By": "Newest",
    Bedrooms: "Any",
    Baths: "Any",
  });
  const filterCardRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterCardRef.current && !filterCardRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterSegments = [
    { label: "Location", key: "Location", options: ["Any", "Pahrump", "Las Vegas", "Henderson"] },
    { label: "Property Type", key: "Type", options: ["Any", "Single Family", "Condo", "Land", "Commercial"] },
    { label: "Bedrooms", key: "Bedrooms", options: ["Any", "1+", "2+", "3+", "4+", "5+"] },
  ];

  return (
    <section className="relative min-h-[640px] md:min-h-[700px] py-20 sm:py-24 overflow-hidden flex items-center justify-center">
      {/* Background Image with Slow Smooth Zoom Entrance */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
        src={IMGS.hero}
        alt="Mountain Falls Pond - Pahrump, Nevada"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30,27,24,0.72) 0%, rgba(30,27,24,0.55) 50%, rgba(30,27,24,0.82) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 md:px-10 max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-2.5 flex items-center justify-center gap-2.5"
        >
          <span className="h-px w-6 bg-[#FAF7F2]/60" />
          <span
            className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#FAF7F2]/80"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            MARCI METZGER - THE RIDGE REALTY GROUP
          </span>
          <span className="h-px w-6 bg-[#FAF7F2]/60" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-[#FAF7F2] text-center leading-[0.96] mb-5"
        >
          <span className="block text-[clamp(2.2rem,5vw,4.25rem)] font-medium">Pahrump's Realtor</span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-8 sm:mb-10"
        >
          <a
            href="#contact"
            className="px-6 py-2.5 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#24211E] font-semibold bg-[#FAF7F2] hover:bg-[#EBE5DF] transition-all hover:shadow-lg cursor-pointer rounded-full"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get In Touch
          </a>
          <a
            href="tel:2069196886"
            aria-label="Call Marci Metzger at (206) 919-6886"
            className="px-5 py-2.5 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#FAF7F2] border border-[#FAF7F2]/40 hover:border-[#FAF7F2] hover:bg-[#FAF7F2]/10 font-semibold transition-all cursor-pointer rounded-full"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Call (206) 919-6886
          </a>
        </motion.div>

        {/* Minimalist Search Capsule Bar */}
        <motion.div
          ref={filterCardRef}
          id="search"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="w-full max-w-4xl bg-[#FAF7F2]/10 backdrop-blur-xl p-2 sm:p-2.5 rounded-2xl sm:rounded-full shadow-2xl relative z-20"
        >
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
            {/* Interactive Segments */}
            {filterSegments.map(({ label, key, options }) => {
              const isOpen = openDropdown === key;
              return (
                <div key={key} className="relative flex-1 text-left">
                  <div
                    onClick={() => setOpenDropdown(isOpen ? null : key)}
                    className="px-4 py-2.5 cursor-pointer select-none"
                  >
                    <span
                      className="block text-[8px] sm:text-[8.5px] tracking-[0.2em] uppercase text-[#FAF7F2]/65 font-medium mb-0.5"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {label}
                    </span>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs sm:text-sm text-[#FAF7F2] font-medium truncate"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {selectedFilters[key]}
                      </span>
                      <ChevronDown
                        className={`w-3 h-3 text-[#FAF7F2]/60 transition-transform duration-200 shrink-0 ml-1 ${
                          isOpen ? "rotate-180 text-[#FAF7F2]" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Dropdown Popover */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 min-w-[170px] w-full max-h-56 overflow-y-auto bg-[#1E1B18]/95 backdrop-blur-xl border border-[#FAF7F2]/20 shadow-2xl rounded-xl py-1.5 z-50"
                      >
                        {options.map((option) => {
                          const isSelected = selectedFilters[key] === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedFilters((prev) => ({ ...prev, [key]: option }));
                                setOpenDropdown(null);
                              }}
                              className={`w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? "bg-[#FAF7F2]/20 text-[#FAF7F2] font-semibold"
                                  : "text-[#FAF7F2]/80 hover:bg-[#FAF7F2]/10 hover:text-[#FAF7F2]"
                              }`}
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              <span>{option}</span>
                              {isSelected && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2] shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Price Range Segment */}
            <div className="flex-1 text-left px-4 py-2.5">
              <label
                htmlFor="hero-price-input"
                className="block text-[8px] sm:text-[8.5px] tracking-[0.2em] uppercase text-[#FAF7F2]/65 font-medium mb-0.5 cursor-pointer select-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Max Price
              </label>
              <input
                id="hero-price-input"
                type="text"
                placeholder="Any Price"
                className="w-full text-xs sm:text-sm text-[#FAF7F2] font-medium bg-transparent focus:outline-none placeholder-[#FAF7F2]/40"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            {/* Search Action Pill Button */}
            <div className="p-1 sm:p-1.5 shrink-0">
              <button
                type="button"
                className="w-full sm:w-auto h-full px-6 sm:px-7 py-3 bg-[#FAF7F2] hover:bg-[#EBE5DF] text-[#24211E] font-semibold text-[9.5px] sm:text-[10px] tracking-[0.22em] uppercase rounded-full transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, rgba(250,247,242,0.3), transparent)" }}
      />
    </section>
  );
}
