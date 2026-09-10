import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BROKER_INFO } from '../data/properties';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying Luxury Property',
    timeline: 'Within 30–60 Days',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080B11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            Private Advisory
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Connect With Marci Metzger
          </h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Whether buying an exclusive golf villa, marketing your estate, or acquiring desert acreage, initiate a confidential consultation today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-[#C5A059]/30 space-y-6 shadow-2xl">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block mb-1">
                  The Ridge Realty Group Headquarters
                </span>
                <h3 className="font-luxury text-2xl font-bold text-white">
                  Marci Metzger
                </h3>
                <p className="text-xs text-slate-400">
                  Owner & Managing Broker
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-xs text-slate-300">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Office Location</span>
                    <span className="text-slate-400 leading-relaxed block">{BROKER_INFO.officeAddress}</span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Direct Line / Cell</span>
                    <a
                      href={`tel:${BROKER_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="text-[#F3E7C4] hover:text-[#C5A059] font-medium transition-colors"
                    >
                      {BROKER_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Confidential Email</span>
                    <a
                      href={`mailto:${BROKER_INFO.email}`}
                      className="text-slate-300 hover:text-[#C5A059] transition-colors"
                    >
                      {BROKER_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Office Availability</span>
                    <span className="text-slate-400 block">{BROKER_INFO.officeHours}</span>
                  </div>
                </div>
              </div>

              {/* Map embed placeholder card */}
              <div className="rounded-2xl overflow-hidden border border-white/10 relative aspect-[16/9] bg-[#111827]">
                <iframe
                  title="Office Location Map"
                  src="https://maps.google.com/maps?q=3190+NV-160+Suite+F+Pahrump+NV+89048&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 grayscale opacity-80 contrast-125"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Private Consultation Form */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto border border-[#C5A059]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-luxury text-2xl font-bold text-white">
                  Consultation Request Dispatched
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Managing Broker Marci Metzger will review your inquiry and reach out at <span className="text-[#C5A059]">{formData.phone || formData.email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-xs uppercase tracking-wider text-slate-300 rounded-lg transition-colors border border-white/10 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (702) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jonathan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Primary Objective
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Buying Luxury Property">Acquiring a Luxury Property</option>
                      <option value="Selling Estate">Listing / Selling My Estate</option>
                      <option value="Golf Community Home">Mountain Falls Golf Residence</option>
                      <option value="Acreage & Ranches">Custom Acreage / Horse Property</option>
                      <option value="General Advisory">Market Consultation / Relocation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Message / Property Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide any details on your ideal property specs, target location, or questions for Marci..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#C5A059]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Private Inquiry</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center font-light flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  Your information is held in strict fiduciary confidence.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
