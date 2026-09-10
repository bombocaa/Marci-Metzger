import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
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

  const filterFields = [
    { label: "Location", options: ["Any", "Pahrump", "Las Vegas", "Henderson"] },
    { label: "Type", options: ["Any", "Single Family", "Condo", "Land", "Commercial"] },
    { label: "Sort By", options: ["Newest", "Price ↑", "Price ↓"] },
    { label: "Bedrooms", options: ["Any", "1+", "2+", "3+", "4+", "5+"] },
    { label: "Baths", options: ["Any", "1+", "2+", "3+"] },
  ];

  return (
    <section className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[780px] py-20 sm:py-24 md:py-28 overflow-hidden flex items-center justify-center">
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
            "linear-gradient(to bottom, rgba(30,27,24,0.72) 0%, rgba(30,27,24,0.58) 50%, rgba(30,27,24,0.82) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 md:px-10 max-w-6xl mx-auto w-full">
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
          className="flex flex-wrap items-center justify-center gap-3.5 mb-7 sm:mb-8"
        >
          <a
            href="#contact"
            className="px-6 py-2.5 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#24211E] font-semibold bg-[#FAF7F2] hover:bg-[#EBE5DF] transition-all hover:shadow-lg cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get In Touch
          </a>
          <a
            href="tel:2069196886"
            aria-label="Call Marci Metzger at (206) 919-6886"
            className="px-5 py-2.5 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#FAF7F2] border border-[#FAF7F2]/40 hover:border-[#FAF7F2] hover:bg-[#FAF7F2]/10 font-semibold transition-all cursor-pointer"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Call (206) 919-6886
          </a>
        </motion.div>

        {/* Search Property Filter Card */}
        <motion.div
          ref={filterCardRef}
          id="search"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="w-full max-w-5xl bg-[#FAF7F2]/12 backdrop-blur-md p-5 sm:p-6 md:p-7 rounded-xl shadow-2xl text-left relative z-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 mb-5">
            {filterFields.map(({ label, options }) => {
              const isOpen = openDropdown === label;
              return (
                <div key={label} className="relative">
                  <label
                    onClick={() => setOpenDropdown(isOpen ? null : label)}
                    className="block text-[8.5px] sm:text-[9px] tracking-[0.2em] uppercase text-[#FAF7F2]/75 mb-1.5 cursor-pointer select-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {label}
                  </label>

                  {/* Custom Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(isOpen ? null : label)}
                    className="w-full border-b border-[#FAF7F2]/30 pb-1.5 pr-2 text-xs text-[#FAF7F2] bg-transparent text-left flex items-center justify-between cursor-pointer focus:outline-none focus:border-[#FAF7F2] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                  >
                    <span className="truncate">{selectedFilters[label]}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#FAF7F2]/70 transition-transform duration-200 shrink-0 ml-1 ${
                        isOpen ? "rotate-180 text-[#FAF7F2]" : ""
                      }`}
                    />
                  </button>

                  {/* Custom Floating Menu */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 min-w-[150px] w-full max-h-56 overflow-y-auto bg-[#1E1B18]/95 backdrop-blur-xl border border-[#FAF7F2]/20 shadow-2xl rounded-lg py-1.5 z-50"
                      >
                        {options.map((option) => {
                          const isSelected = selectedFilters[label] === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setSelectedFilters((prev) => ({ ...prev, [label]: option }));
                                setOpenDropdown(null);
                              }}
                              className={`w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center justify-between cursor-pointer ${
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

            <div>
              <label
                className="block text-[8.5px] sm:text-[9px] tracking-[0.2em] uppercase text-[#FAF7F2]/75 mb-1.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Price Range
              </label>
              <input
                type="text"
                placeholder="Max $"
                className="w-full border-b border-[#FAF7F2]/30 pb-1.5 text-xs text-[#FAF7F2] bg-transparent focus:outline-none placeholder-[#FAF7F2]/40"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              className="w-full sm:w-auto px-8 py-3 text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#24211E] bg-[#FAF7F2] hover:bg-[#EBE5DF] font-semibold transition-colors cursor-pointer text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Search Properties
            </button>
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
