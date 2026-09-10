import React, { useState } from 'react';
import { Compass, Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BROKER_INFO } from '../data/properties';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#05070B] text-slate-400 text-xs font-light border-t border-[#C5A059]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#C5A059]/50 flex items-center justify-center bg-[#111827]">
                <Compass className="w-4 h-4 text-[#C5A059]" />
              </div>
              <div>
                <span className="font-luxury text-base font-bold text-white tracking-widest block">
                  MARCI METZGER
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-medium">
                  The Ridge Realty Group
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Dedicated to representing premier estates, golf lifestyle properties, custom acreage, and commercial investments across Pahrump and Southern Nevada with seasoned broker expertise.
            </p>

            <div className="space-y-1 text-slate-400 text-xs pt-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                {BROKER_INFO.officeAddress}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                {BROKER_INFO.phone}
              </p>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-luxury text-xs font-bold text-white uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#listings" className="hover:text-[#C5A059] transition-colors">Exclusive Estates</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Regional Enclaves</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">About Marci</a></li>
              <li><a href="#valuation" className="hover:text-[#C5A059] transition-colors">Home Valuation</a></li>
              <li><a href="#calculator" className="hover:text-[#C5A059] transition-colors">Mortgage Tool</a></li>
              <li><a href="#reviews" className="hover:text-[#C5A059] transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact Concierge</a></li>
            </ul>
          </div>

          {/* Featured Neighborhoods Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-luxury text-xs font-bold text-white uppercase tracking-widest">
              Key Communities
            </h4>
            <ul className="space-y-2">
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Mountain Falls Golf Club</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Artesia at Hafen Ranch</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Desert Trails & Ranches</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Pahrump Valley Winery Area</a></li>
              <li><a href="#communities" className="hover:text-[#C5A059] transition-colors">Custom Mountain Acreage</a></li>
            </ul>
          </div>

          {/* VIP Newsletter Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-luxury text-xs font-bold text-white uppercase tracking-widest">
              VIP Market Journal
            </h4>
            <p className="text-slate-400 text-xs">
              Receive exclusive off-market previews and quarterly Pahrump luxury market insights.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#C5A059]/15 border border-[#C5A059]/40 rounded-lg text-[11px] text-[#F3E7C4] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>Thank you. You are subscribed to private market releases.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-l-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="px-3 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold rounded-r-lg transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Regulatory & Brokerage Legal Footnote */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} Marci Metzger Homes. All Rights Reserved. The Ridge Realty Group.</p>
            <p className="text-[10px] text-slate-600 mt-0.5">
              Equal Housing Opportunity. REALTOR® licensed in Nevada. Information deemed reliable but not guaranteed.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>License: NV Real Estate Broker</span>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
