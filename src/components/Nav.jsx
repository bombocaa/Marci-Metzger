import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import logoImg from "../assets/logo.webp";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navItems = [
    { label: "HOME", href: "#" },
    { label: "LISTINGS", href: "#search" },
    { label: "LET'S MOVE", href: "#contact" },
    { label: "ABOUT US", href: "#about" },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (item) => {
    setActiveLink(item.label);
    setOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(250, 247, 242, 0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(226, 218, 208, 0.7)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 h-24 md:h-28 flex items-center justify-between">
          {/* Hamburger button */}
          <button
            onClick={() => setOpen(true)}
            className="flex flex-col gap-[5px] group cursor-pointer p-2 -ml-2"
            aria-label="Open Navigation Menu"
          >
            <span
              className="block h-px transition-all duration-300 group-hover:w-6"
              style={{ width: "24px", backgroundColor: scrolled ? "#24211E" : "#FAF7F2" }}
            />
            <span
              className="block h-px transition-all duration-300"
              style={{ width: "14px", backgroundColor: scrolled ? "#24211E" : "rgba(250,247,242,0.6)" }}
            />
          </button>

          {/* Logo Center */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center select-none">
            <a href="#" className="flex items-center justify-center">
              <img
                src={logoImg}
                alt="Marci Metzger Homes"
                className={`h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[260px] sm:max-w-[340px] md:max-w-[420px] object-contain transition-all duration-300 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
              />
            </a>
          </div>

          {/* Right Contact Info */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="text-[10px] tracking-[0.2em] uppercase transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", color: scrolled ? "#5C544D" : "rgba(250,247,242,0.7)" }}
            >
              Contact
            </a>
            <a
              href="tel:2069196886"
              className="text-[10px] tracking-[0.15em] border-b pb-0.5 transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: scrolled ? "#24211E" : "#FAF7F2",
                borderColor: scrolled ? "rgba(36,33,30,0.3)" : "rgba(250,247,242,0.4)",
              }}
            >
              (206) 919-6886
            </a>
          </div>
        </div>
      </header>

      {/* Slide-out Sidebar Drawer */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-[#1E1B18]/50 backdrop-blur-xs transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-full max-w-[340px] sm:max-w-[380px] bg-[#F2ECE4] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out border-r border-[#E2DAD0] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 sm:p-12">
          {/* Close Button Top Right & Drawer Logo */}
          <div className="flex items-center justify-between mb-14">
            <img
              src={logoImg}
              alt="Marci Metzger Homes"
              className="h-14 sm:h-16 w-auto max-w-[240px] object-contain"
            />
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-[#5C544D] hover:text-[#24211E] transition-colors cursor-pointer"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5 stroke-[1.25]" />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="flex flex-col space-y-7">
            {navItems.map((item) => {
              const isActive = activeLink === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`text-xs uppercase tracking-[0.25em] font-medium transition-colors ${
                    isActive
                      ? "text-[#24211E] font-bold"
                      : "text-[#5C544D] hover:text-[#24211E]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Drawer Details */}
        <div className="p-8 sm:p-12 border-t border-[#E2DAD0]">
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#8A8075] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Ridge Realty Group
          </p>
          <a
            href="tel:2069196886"
            className="text-xs tracking-wider text-[#24211E] font-semibold hover:text-[#5C544D] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            (206) 919-6886
          </a>
        </div>
      </aside>
    </>
  );
}
