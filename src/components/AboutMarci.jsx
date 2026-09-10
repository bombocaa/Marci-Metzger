import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Phone, Mail, FileText, ChevronRight } from 'lucide-react';
import { BROKER_INFO } from '../data/properties';

export default function AboutMarci({ onOpenContact }) {
  return (
    <section id="about" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & Prestige Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl bg-black/40">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt="Marci Metzger - Managing Broker"
                className="w-full h-full object-cover object-top aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-80" />
              
              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-[#C5A059]/30 backdrop-blur-md text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block">
                  Leadership
                </span>
                <h4 className="font-luxury text-lg font-bold text-white">
                  Marci Metzger
                </h4>
                <p className="text-xs text-slate-300 font-light">
                  Owner & Managing Broker, The Ridge Realty Group
                </p>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-[#080B11] border border-[#C5A059]/40 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center">
                <Award className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div className="text-left">
                <span className="font-luxury text-xl font-bold text-white block">28+ Years</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Broker Mastery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
                <span className="w-6 h-[1px] bg-[#C5A059]"></span>
                Meet The Broker
              </div>
              <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Marci Metzger
              </h2>
              <p className="font-editorial italic text-lg sm:text-xl text-[#F3E7C4] mt-1">
                "Real estate isn't just about properties; it's about safeguarding equity, understanding dreams, and delivering uncompromising excellence."
              </p>
            </div>

            <div className="space-y-4 text-slate-300 text-sm font-light leading-relaxed">
              <p>
                With nearly three decades in real estate, Marci Metzger offers an unmatched standard of brokerage expertise. Beginning her career as a distinguished licensed Broker in the competitive Seattle market, Marci brought her refined transaction acumen, deep negotiation skill, and passion for excellence to Southern Nevada.
              </p>
              <p>
                As the Owner and Managing Broker of <strong className="text-white font-medium">The Ridge Realty Group</strong> in Pahrump, Marci has represented hundreds of discerning buyers, sellers, and investors across Nye County. Her deep command of regional nuances—from Mountain Falls golf residences and equestrian ranch water rights to commercial land and custom new builds—makes her the trusted advisor of choice.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-white block">Managing Broker & Owner</span>
                  <span className="text-[11px] text-slate-400">The Ridge Realty Group • NV Real Estate</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <Award className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-semibold text-white block">Multi-State Experience</span>
                  <span className="text-[11px] text-slate-400">Seattle Broker Heritage & Nevada Authority</span>
                </div>
              </div>
            </div>

            {/* CTA & Direct Call */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-[#C5A059]/20"
              >
                <span>Book Broker Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <a
                href={`tel:${BROKER_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/15 rounded-lg text-xs font-medium tracking-wider transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Marci: {BROKER_INFO.phone}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
