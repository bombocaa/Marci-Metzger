import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import logoImg from "../assets/logo.webp";
import yelpIcon from "../assets/yelp.png";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
      </svg>
    ),
  },
  {
    name: "Yelp",
    href: "https://yelp.com",
    isImg: true,
    imgSrc: yelpIcon,
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (window.scrollY < 250) {
        setActiveLink("HOME");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sync active nav item on scroll using IntersectionObserver
  useEffect(() => {
    const sectionMap = [
      { id: "about", label: "ABOUT US" },
      { id: "search", label: "LISTINGS" },
      { id: "gallery", label: "GALLERY" },
      { id: "services", label: "SERVICES" },
      { id: "contact", label: "CONTACT" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = sectionMap.find((s) => s.id === entry.target.id);
            if (found && window.scrollY >= 250) {
              setActiveLink(found.label);
            }
          }
        });
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: 0.1 }
    );

    sectionMap.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
    { label: "ABOUT US", href: "#about" },
    { label: "GALLERY", href: "#gallery" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (item) => {
    setActiveLink(item.label);
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
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

          {/* Right Contact Info & Social Icons */}
          <div className="hidden md:flex items-center gap-5">
            {/* Social Icons */}
            <div
              className="flex items-center gap-3.5 pr-3 border-r"
              style={{ borderColor: scrolled ? "rgba(36,33,30,0.15)" : "rgba(250,247,242,0.25)" }}
            >
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="transition-all hover:scale-110 opacity-75 hover:opacity-100 flex items-center justify-center"
                  style={{ color: scrolled ? "#24211E" : "#FAF7F2" }}
                >
                  {s.isImg ? (
                    <img
                      src={s.imgSrc}
                      alt={s.name}
                      className={`w-4 h-4 object-contain transition-all duration-300 ${
                        scrolled ? "" : "brightness-0 invert"
                      }`}
                    />
                  ) : (
                    s.icon
                  )}
                </a>
              ))}
            </div>

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
      </motion.header>

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

        {/* Bottom Drawer Details & Social Icons */}
        <div className="p-8 sm:p-12 border-t border-[#E2DAD0]">
          <div className="flex items-center gap-4 mb-5 text-[#5C544D]">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="hover:text-[#24211E] transition-all hover:scale-110 flex items-center justify-center"
              >
                {s.isImg ? (
                  <img src={s.imgSrc} alt={s.name} className="w-4 h-4 object-contain opacity-75 hover:opacity-100" />
                ) : (
                  s.icon
                )}
              </a>
            ))}
          </div>

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
