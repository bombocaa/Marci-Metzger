import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Compass, ChevronRight } from 'lucide-react';
import { BROKER_INFO } from '../data/properties';

export default function Navbar({ onOpenContact, onSelectProperty }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured Estates', href: '#listings' },
    { name: 'Communities', href: '#communities' },
    { name: 'About Marci', href: '#about' },
    { name: 'Home Valuation', href: '#valuation' },
    { name: 'Mortgage Calculator', href: '#calculator' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for high-end brokerage contact */}
      <div className={`hidden md:block border-b border-white/5 transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'bg-[#080B11]/90 py-2'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-slate-400 font-light tracking-wider">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              {BROKER_INFO.officeAddress}
            </span>
            <span className="text-slate-500">|</span>
            <span>Office Hours: 8:00 AM – 7:00 PM Daily</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${BROKER_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors text-slate-200 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              Direct: {BROKER_INFO.phone}
            </a>
            <a 
              href={`mailto:${BROKER_INFO.email}`} 
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              {BROKER_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0F17]/95 backdrop-blur-md shadow-2xl py-3.5 border-b border-[#C5A059]/20' 
          : 'bg-gradient-to-b from-[#080B11]/90 via-[#0B0F17]/60 to-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#C5A059]/40 flex items-center justify-center bg-[#141A29]/80 group-hover:border-[#C5A059] transition-all">
              <Compass className="w-5 h-5 text-[#C5A059] group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-luxury text-lg md:text-xl font-bold tracking-widest text-white group-hover:text-[#F3E7C4] transition-colors">
                MARCI METZGER
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                The Ridge Realty Group
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-xs uppercase tracking-widest font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#C5A059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Contact Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#C5A059] hover:bg-[#D4AF37] rounded transition-all duration-300 shadow-md hover:shadow-[#C5A059]/20 hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Consultation</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A059]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F17]/98 backdrop-blur-xl border-b border-[#C5A059]/20 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-wider text-slate-200 hover:text-[#C5A059] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${BROKER_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center gap-2 py-3 text-xs font-medium text-slate-200 border border-white/15 rounded bg-white/5"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              Call {BROKER_INFO.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#C5A059] hover:bg-[#D4AF37] rounded transition-all text-center"
            >
              Schedule Private Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
