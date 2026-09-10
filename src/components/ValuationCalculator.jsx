import React, { useState } from 'react';
import { Calculator, TrendingUp, Home, CheckCircle2, ArrowRight, ShieldCheck, Mail, Phone, RefreshCw } from 'lucide-react';
import { BROKER_INFO } from '../data/properties';

export default function ValuationCalculator({ onOpenContact }) {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState('');
  const [community, setCommunity] = useState('Mountain Falls');
  const [propertyType, setPropertyType] = useState('Single Family Luxury');
  const [sqft, setSqft] = useState(3200);
  const [beds, setBeds] = useState(4);
  const [baths, setBaths] = useState(3);
  const [condition, setCondition] = useState('Turnkey Luxury');
  const [pool, setPool] = useState(true);
  const [acreage, setAcreage] = useState('0.5');

  // Contact for BPO
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [reportRequested, setReportRequested] = useState(false);

  // Dynamic realistic calculation for Pahrump / Southern Nevada luxury market
  const calculateEstimate = () => {
    let basePpsqft = 220; // Base $/sqft for standard Pahrump
    if (community === 'Mountain Falls') basePpsqft = 255;
    if (community === 'Artesia') basePpsqft = 235;
    if (community === 'Custom Acreage') basePpsqft = 245;
    if (community === 'Winery District') basePpsqft = 250;

    if (condition === 'Turnkey Luxury') basePpsqft += 35;
    else if (condition === 'Excellent') basePpsqft += 20;
    else if (condition === 'Updated') basePpsqft += 10;

    let baseValue = sqft * basePpsqft;
    if (pool) baseValue += 45000;
    if (parseFloat(acreage) > 1) baseValue += (parseFloat(acreage) - 1) * 35000;

    const lowEstimate = Math.round((baseValue * 0.96) / 5000) * 5000;
    const highEstimate = Math.round((baseValue * 1.05) / 5000) * 5000;
    return { low: lowEstimate, high: highEstimate, avg: Math.round((lowEstimate + highEstimate) / 2) };
  };

  const estimate = calculateEstimate();

  const handleRequestBPO = (e) => {
    e.preventDefault();
    setReportRequested(true);
  };

  return (
    <section id="valuation" className="py-24 bg-[#0B0F17] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            Seller Concierge Tool
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Instant Home Valuation
          </h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Curious about your home’s current equity in today's active Southern Nevada market? Discover an estimated market value in seconds.
          </p>
        </div>

        {/* Valuation Card */}
        <div className="glass-panel rounded-3xl border border-[#C5A059]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10 text-xs">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#F3E7C4] font-semibold' : 'text-slate-500'}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                step >= 1 ? 'bg-[#C5A059] text-black font-bold' : 'bg-white/10 text-white'
              }`}>1</div>
              <span>Property Details</span>
            </div>
            <div className="h-[1px] flex-1 mx-4 bg-white/10" />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#F3E7C4] font-semibold' : 'text-slate-500'}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                step >= 2 ? 'bg-[#C5A059] text-black font-bold' : 'bg-white/10 text-white'
              }`}>2</div>
              <span>Specs & Features</span>
            </div>
            <div className="h-[1px] flex-1 mx-4 bg-white/10" />
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#F3E7C4] font-semibold' : 'text-slate-500'}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                step >= 3 ? 'bg-[#C5A059] text-black font-bold' : 'bg-white/10 text-white'
              }`}>3</div>
              <span>Estimated Valuation</span>
            </div>
          </div>

          {/* STEP 1: Address & Community */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Property Address / Street (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5240 Cascata Way, Pahrump"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Neighborhood / Community
                  </label>
                  <select
                    value={community}
                    onChange={(e) => setCommunity(e.target.value)}
                    className="w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Mountain Falls">Mountain Falls Golf Community</option>
                    <option value="Artesia">Artesia at Hafen Ranch</option>
                    <option value="Custom Acreage">Custom Acreage / Ranches</option>
                    <option value="Winery District">Winery District / South Valley</option>
                    <option value="Other Pahrump">Other Pahrump Enclave</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Property Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Single Family Luxury', 'Golf Course Residence', 'Acreage / Equestrian', 'Custom New Build'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setPropertyType(type)}
                      className={`p-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                        propertyType === type
                          ? 'border-[#C5A059] bg-[#C5A059]/15 text-[#F3E7C4] font-semibold'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-8 py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Specs & Upgrades</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Specs */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                      Living Area (Sq Ft)
                    </label>
                    <span className="text-xs font-bold text-[#F3E7C4]">{sqft.toLocaleString()} SF</span>
                  </div>
                  <input
                    type="range"
                    min="1200"
                    max="6500"
                    step="50"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full accent-[#C5A059] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>1,200 SF</span>
                    <span>6,500+ SF</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Bedrooms
                  </label>
                  <select
                    value={beds}
                    onChange={(e) => setBeds(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    {[2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num} Bedrooms</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Bathrooms
                  </label>
                  <select
                    value={baths}
                    onChange={(e) => setBaths(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    {[2, 2.5, 3, 3.5, 4, 4.5, 5].map((num) => (
                      <option key={num} value={num}>{num} Baths</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Property Condition
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="Turnkey Luxury">Turnkey Luxury / Designer Remodeled</option>
                    <option value="Excellent">Excellent Well-Maintained</option>
                    <option value="Updated">Updated / Good Condition</option>
                    <option value="Original">Original Condition</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Lot Size (Acres)
                  </label>
                  <select
                    value={acreage}
                    onChange={(e) => setAcreage(e.target.value)}
                    className="w-full px-4 py-3 bg-[#111827] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="0.25">Quarter Acre (0.25 Ac)</option>
                    <option value="0.5">Half Acre (0.50 Ac)</option>
                    <option value="1.0">1.0 Full Acre</option>
                    <option value="2.5">2.5 Acres</option>
                    <option value="5.0">5.0+ Acres</option>
                  </select>
                </div>
              </div>

              {/* Pool toggle */}
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <input
                  type="checkbox"
                  id="pool-check"
                  checked={pool}
                  onChange={(e) => setPool(e.target.checked)}
                  className="w-4 h-4 accent-[#C5A059] rounded cursor-pointer"
                />
                <label htmlFor="pool-check" className="text-xs text-slate-200 cursor-pointer">
                  Includes Custom Swimming Pool / Spa Oasis
                </label>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-8 py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Calculate Valuation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Results */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-[#141B2D] to-[#0D121F] border border-[#C5A059]/40 text-center">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
                  Estimated Current Market Value
                </span>
                <div className="font-luxury text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight my-2">
                  ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 font-light mt-2 max-w-lg mx-auto">
                  Based on recent MLS closed sales, {community} comparable trends, and {sqft.toLocaleString()} sq ft property profile.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10 text-left">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider block">Community</span>
                    <span className="text-xs font-semibold text-white">{community}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider block">Est. Price / SF</span>
                    <span className="text-xs font-semibold text-[#F3E7C4]">${Math.round(estimate.avg / sqft)} / SF</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-[10px] uppercase text-slate-400 tracking-wider block">Pool & Lot</span>
                    <span className="text-xs font-semibold text-white">{pool ? 'Pool Included' : 'No Pool'} • {acreage} Ac</span>
                  </div>
                </div>
              </div>

              {/* Request In-Depth Broker Price Opinion */}
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-luxury text-lg font-bold text-white">
                      Request Official Broker Price Opinion (BPO)
                    </h4>
                    <p className="text-xs text-slate-400 font-light">
                      Automated algorithms cannot replace 28+ years of localized expertise. Request an in-person equity consultation from Marci Metzger.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex items-center gap-1.5 text-xs text-[#C5A059] hover:underline cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Adjust Parameters
                  </button>
                </div>

                {reportRequested ? (
                  <div className="p-4 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/50 text-center text-xs space-y-1">
                    <p className="font-semibold text-[#F3E7C4]">BPO Request Received for {sellerName || 'Valued Client'}!</p>
                    <p className="text-slate-300">Marci Metzger will prepare your comprehensive valuation dossier and contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleRequestBPO} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={sellerName}
                      onChange={(e) => setSellerName(e.target.value)}
                      className="px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={sellerEmail}
                      onChange={(e) => setSellerEmail(e.target.value)}
                      className="px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={sellerPhone}
                      onChange={(e) => setSellerPhone(e.target.value)}
                      className="px-3.5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059]"
                    />
                    <button
                      type="submit"
                      className="sm:col-span-3 py-3 bg-[#C5A059] hover:bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
                    >
                      Receive Comprehensive Broker Market Dossier
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
