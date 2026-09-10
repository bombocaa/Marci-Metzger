import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/properties';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            Client Accolades
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Words From Discerning Clients
          </h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Read firsthand accounts of exceptional results, white-glove negotiation, and stress-free transactions with Managing Broker Marci Metzger.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between relative shadow-xl group hover:-translate-y-1"
            >
              <div>
                {/* Rating stars & quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C5A059]/40 group-hover:text-[#C5A059] transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed italic mb-6">
                  "{review.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-luxury text-sm font-bold text-white">
                    {review.client}
                  </h4>
                  <p className="text-[11px] text-[#C5A059] font-medium">
                    {review.role}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Ratings Footnote */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-white">5.0 Star Rating</span>
            <span className="text-slate-400">on Zillow & Realtor.com</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <div>
            <span className="text-slate-400">Over 550+ Satisfied Transactions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
