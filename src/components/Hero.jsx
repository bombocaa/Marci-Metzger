import React, { useState } from 'react';
import { Search, MapPin, Home, DollarSign, ArrowRight, ShieldCheck, Award, Star, TrendingUp } from 'lucide-react';
import { BROKER_INFO } from '../data/properties';

export default function Hero({ onSearch, onOpenContact }) {
  const [location, setLocation] = useState('All');
  const [propertyType, setPropertyType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ location, propertyType, priceRange });
    }
    const listingsElement = document.getElementById('listings');
    if (listingsElement) {
      listingsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#080B11]">
      {/* Background Image with Cinematic Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Southern Nevada Luxury Estate"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/80 to-[#080B11]/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,15,23,0.85)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        {/* Prestige Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C5A059]/30 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
          <Award className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#F3E7C4] font-medium">
            The Ridge Realty Group • Pahrump & Southern Nevada
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.15] mb-6">
          Exceptional Living in <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Southern Nevada</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 text-balance">
          Nearly three decades of unrivaled luxury brokerage mastery, tailored representation, and exclusive desert & golf community estates.
        </p>

        {/* Luxury Search & Discovery Widget */}
        <div className="w-full max-w-4xl glass-panel p-3 sm:p-4 rounded-2xl shadow-2xl border border-[#C5A059]/30 mb-14">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Location Select */}
            <div className="flex flex-col text-left px-3 py-2 bg-black/40 rounded-xl border border-white/5 hover:border-[#C5A059]/40 transition-colors">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1 mb-1">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                Community
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-[#111827] text-white">All Communities</option>
                <option value="Mountain Falls" className="bg-[#111827] text-white">Mountain Falls Golf</option>
                <option value="Artesia" className="bg-[#111827] text-white">Artesia at Hafen</option>
                <option value="Acreage" className="bg-[#111827] text-white">Custom Acreage</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="flex flex-col text-left px-3 py-2 bg-black/40 rounded-xl border border-white/5 hover:border-[#C5A059]/40 transition-colors">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1 mb-1">
                <Home className="w-3 h-3 text-[#C5A059]" />
                Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-[#111827] text-white">All Property Types</option>
                <option value="Mountain Falls" className="bg-[#111827] text-white">Golf Course Villa</option>
                <option value="Acreage" className="bg-[#111827] text-white">Equestrian & Acreage</option>
                <option value="Luxury" className="bg-[#111827] text-white">Modern Luxury Estate</option>
                <option value="New Construction" className="bg-[#111827] text-white">New Construction</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="flex flex-col text-left px-3 py-2 bg-black/40 rounded-xl border border-white/5 hover:border-[#C5A059]/40 transition-colors">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1 mb-1">
                <DollarSign className="w-3 h-3 text-[#C5A059]" />
                Price Range
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-transparent text-sm text-white focus:outline-none cursor-pointer"
              >
                <option value="All" className="bg-[#111827] text-white">Any Price</option>
                <option value="under700" className="bg-[#111827] text-white">Under $700,000</option>
                <option value="700to1m" className="bg-[#111827] text-white">$700,000 – $1,000,000</option>
                <option value="over1m" className="bg-[#111827] text-white">$1,000,000+</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 py-3 sm:py-0 shadow-lg hover:shadow-[#C5A059]/30 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Explore Estates</span>
            </button>
          </form>
        </div>

        {/* Key Metrics / Trust Stats Bar */}
        <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10 text-center">
          <div className="flex flex-col items-center">
            <span className="font-luxury text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {BROKER_INFO.volumeSold}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#C5A059] mt-1 font-medium">
              Career Volume Sold
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-luxury text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {BROKER_INFO.experienceYears}+ Years
            </span>
            <span className="text-xs uppercase tracking-widest text-[#C5A059] mt-1 font-medium">
              Broker Experience
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-luxury text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {BROKER_INFO.satisfactionRate}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#C5A059] mt-1 font-medium">
              Client Satisfaction
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-luxury text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Top #1
            </span>
            <span className="text-xs uppercase tracking-widest text-[#C5A059] mt-1 font-medium">
              Pahrump Brokerage
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
