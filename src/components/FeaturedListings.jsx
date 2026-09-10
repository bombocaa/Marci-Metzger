import React, { useState, useMemo } from 'react';
import { Bed, Bath, Square, MapPin, Maximize2, X, Check, ChevronRight, Phone, Calendar, ArrowUpRight } from 'lucide-react';
import { PROPERTIES, BROKER_INFO } from '../data/properties';

export default function FeaturedListings({ searchFilter, onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeModalImage, setActiveModalImage] = useState(0);
  const [tourBooked, setTourBooked] = useState(false);
  const [tourDate, setTourDate] = useState('');
  const [tourName, setTourName] = useState('');
  const [tourPhone, setTourPhone] = useState('');

  const categories = [
    { label: 'All Estates', value: 'All' },
    { label: 'Mountain Falls Golf', value: 'Mountain Falls' },
    { label: 'Custom Acreage & Ranches', value: 'Acreage' },
    { label: 'Modern Luxury', value: 'Luxury' },
    { label: 'New Construction', value: 'New Construction' },
  ];

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // Category tab filter
      if (activeCategory !== 'All' && prop.category !== activeCategory) {
        return false;
      }
      // Hero search filter if applied
      if (searchFilter) {
        if (searchFilter.location && searchFilter.location !== 'All') {
          if (searchFilter.location === 'Mountain Falls' && !prop.community.includes('Mountain Falls')) return false;
          if (searchFilter.location === 'Artesia' && !prop.community.includes('Artesia')) return false;
          if (searchFilter.location === 'Acreage' && !prop.community.includes('Acreage') && !prop.community.includes('Ranch')) return false;
        }
        if (searchFilter.propertyType && searchFilter.propertyType !== 'All') {
          if (prop.category !== searchFilter.propertyType) return false;
        }
        if (searchFilter.priceRange && searchFilter.priceRange !== 'All') {
          if (searchFilter.priceRange === 'under700' && prop.price >= 700000) return false;
          if (searchFilter.priceRange === '700to1m' && (prop.price < 700000 || prop.price > 1000000)) return false;
          if (searchFilter.priceRange === 'over1m' && prop.price < 1000000) return false;
        }
      }
      return true;
    });
  }, [activeCategory, searchFilter]);

  const handleOpenModal = (prop) => {
    setSelectedProperty(prop);
    setActiveModalImage(0);
    setTourBooked(false);
  };

  const handleTourSubmit = (e) => {
    e.preventDefault();
    setTourBooked(true);
  };

  return (
    <section id="listings" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
              <span className="w-6 h-[1px] bg-[#C5A059]"></span>
              Exclusive Portfolio
            </div>
            <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured Luxury Residences
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Curated premier estates, custom equestrian ranches, and fairway homes across Pahrump and Southern Nevada.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#C5A059] text-black shadow-lg shadow-[#C5A059]/20 font-semibold'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Listings Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 glass-panel rounded-2xl p-8 max-w-lg mx-auto">
            <p className="text-slate-300 font-medium mb-3">No properties matching your exact criteria.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="px-4 py-2 bg-[#C5A059] text-black text-xs font-semibold rounded uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 flex flex-col hover:-translate-y-1.5 shadow-xl hover:shadow-[#C5A059]/10"
              >
                {/* Image Container with status badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-70 group-hover:opacity-50 transition-opacity" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-[#F3E7C4] border border-[#C5A059]/40">
                      {prop.status}
                    </span>
                  </div>

                  {/* Community Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 text-slate-200 drop-shadow-md">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      {prop.community}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Price */}
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-luxury text-2xl font-bold text-[#F3E7C4] tracking-tight">
                        {prop.formattedPrice}
                      </span>
                      <span className="text-[11px] text-slate-400 font-light">
                        {prop.acres} Acres
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-editorial text-lg font-semibold text-white mb-2 line-clamp-1 group-hover:text-[#C5A059] transition-colors">
                      {prop.title}
                    </h3>

                    {/* Address */}
                    <p className="text-slate-400 text-xs mb-5 line-clamp-1 font-light">
                      {prop.address}
                    </p>

                    {/* Key Specs Bar */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center text-xs text-slate-300 mb-5">
                      <div className="flex flex-col items-center">
                        <span className="font-semibold text-white">{prop.beds}</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Beds</span>
                      </div>
                      <div className="flex flex-col items-center border-x border-white/10">
                        <span className="font-semibold text-white">{prop.baths}</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Baths</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="font-semibold text-white">{prop.sqft.toLocaleString()}</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Sq Ft</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => handleOpenModal(prop)}
                      className="flex-1 py-2.5 bg-white/5 hover:bg-[#C5A059] text-white hover:text-black rounded-lg text-xs font-semibold uppercase tracking-wider border border-white/10 hover:border-[#C5A059] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>View Estate</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`tel:${BROKER_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="p-2.5 bg-white/5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-[#C5A059] border border-white/10 transition-colors"
                      title="Call Broker directly"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E131F] border border-[#C5A059]/40 rounded-2xl shadow-2xl overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Gallery */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <img
                src={selectedProperty.gallery[activeModalImage] || selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-transparent to-black/40" />
              
              {/* Thumbnails */}
              {selectedProperty.gallery && selectedProperty.gallery.length > 1 && (
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-1">
                  {selectedProperty.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImage(idx)}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                        activeModalImage === idx ? 'border-[#C5A059] scale-105' : 'border-white/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Details Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                    {selectedProperty.community} • {selectedProperty.status}
                  </span>
                  <h3 className="font-luxury text-2xl sm:text-3xl font-bold text-white mt-1">
                    {selectedProperty.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    {selectedProperty.address}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="font-luxury text-3xl font-bold text-[#F3E7C4] block">
                    {selectedProperty.formattedPrice}
                  </span>
                  <span className="text-xs text-slate-400">
                    Est. {selectedProperty.sqft.toLocaleString()} Sq Ft • {selectedProperty.acres} Acres
                  </span>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider">Bedrooms</span>
                  <span className="text-lg font-bold text-white">{selectedProperty.beds}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider">Bathrooms</span>
                  <span className="text-lg font-bold text-white">{selectedProperty.baths}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider">Living Area</span>
                  <span className="text-lg font-bold text-white">{selectedProperty.sqft.toLocaleString()} SF</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider">Lot Size</span>
                  <span className="text-lg font-bold text-white">{selectedProperty.acres} Acres</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-2">
                  Estate Overview
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {selectedProperty.description}
                </p>
              </div>

              {/* Features & Amenities */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3">
                  Key Luxury Amenities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProperty.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking / Inquire Form */}
              <div className="p-6 rounded-xl bg-black/40 border border-[#C5A059]/30">
                <h4 className="font-luxury text-lg font-semibold text-white mb-1">
                  Schedule Private Showing with Marci Metzger
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  Exclusive private access arranged directly with Owner & Managing Broker Marci Metzger.
                </p>

                {tourBooked ? (
                  <div className="p-4 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/40 text-center space-y-1 animate-in fade-in duration-300">
                    <p className="text-sm font-semibold text-[#F3E7C4]">Thank You, {tourName}!</p>
                    <p className="text-xs text-slate-300">
                      Marci Metzger's office will contact you at {tourPhone} to confirm your appointment for {tourDate || 'your requested date'}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleTourSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={tourName}
                      onChange={(e) => setTourName(e.target.value)}
                      className="px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={tourPhone}
                      onChange={(e) => setTourPhone(e.target.value)}
                      className="px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    <input
                      type="date"
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    <button
                      type="submit"
                      className="sm:col-span-3 py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer mt-1"
                    >
                      Request VIP Showing
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
