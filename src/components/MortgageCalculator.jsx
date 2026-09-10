import React, { useState, useMemo } from 'react';
import { DollarSign, Percent, Calendar, PieChart, ShieldCheck } from 'lucide-react';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(750000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(0.68); // Typical NV property tax rate
  const [hoaMonthly, setHoaMonthly] = useState(120);

  const calculations = useMemo(() => {
    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
    const loanAmount = homePrice - downPaymentAmount;
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalPayments = loanTermYears * 12;

    let monthlyPI = 0;
    if (monthlyInterestRate > 0) {
      monthlyPI =
        (loanAmount *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments))) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    } else {
      monthlyPI = loanAmount / totalPayments;
    }

    const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyInsurance = (homePrice * 0.0035) / 12; // Approx 0.35% for NV
    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + hoaMonthly;

    return {
      downPaymentAmount,
      loanAmount,
      monthlyPI: Math.round(monthlyPI),
      monthlyTax: Math.round(monthlyTax),
      monthlyInsurance: Math.round(monthlyInsurance),
      hoaMonthly,
      totalMonthly: Math.round(totalMonthly),
    };
  }, [homePrice, downPaymentPercent, interestRate, loanTermYears, propertyTaxRate, hoaMonthly]);

  // Percentage shares for visual bar
  const piPercent = Math.round((calculations.monthlyPI / calculations.totalMonthly) * 100);
  const taxPercent = Math.round((calculations.monthlyTax / calculations.totalMonthly) * 100);
  const insPercent = Math.round((calculations.monthlyInsurance / calculations.totalMonthly) * 100);
  const hoaPercent = 100 - (piPercent + taxPercent + insPercent);

  return (
    <section id="calculator" className="py-24 bg-[#080B11] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-semibold mb-2">
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
            Financial Advisory
            <span className="w-6 h-[1px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Luxury Mortgage & Investment Estimator
          </h2>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Model your monthly investment for luxury residences in Southern Nevada with Nevada’s favorable property tax landscape.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            {/* Home Price */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Estate Purchase Price
                </label>
                <span className="font-luxury text-xl font-bold text-[#F3E7C4]">
                  ${homePrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="350000"
                max="3000000"
                step="25000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>$350K</span>
                <span>$1.5M</span>
                <span>$3.0M+</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="text-sm font-bold text-white">
                  ${calculations.downPaymentAmount.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>5% ($37.5K)</span>
                <span>20% Conventional</span>
                <span>50%</span>
              </div>
            </div>

            {/* Interest Rate & Loan Term */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                    Interest Rate
                  </label>
                  <span className="text-sm font-bold text-[#F3E7C4]">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="9.0"
                  step="0.125"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#C5A059] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                  Loan Term
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[30, 15].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setLoanTermYears(term)}
                      className={`py-2 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
                        loanTermYears === term
                          ? 'bg-[#C5A059] text-black border-[#C5A059]'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {term} Years
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* HOA Dues */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider text-slate-300 font-semibold">
                  Estimated HOA / Community Dues
                </label>
                <span className="text-sm font-bold text-white">${hoaMonthly}/mo</span>
              </div>
              <input
                type="range"
                min="0"
                max="400"
                step="20"
                value={hoaMonthly}
                onChange={(e) => setHoaMonthly(Number(e.target.value))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>$0 (No HOA / Acreage)</span>
                <span>$120 (Standard)</span>
                <span>$400</span>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#141B2D] to-[#0E131F] border border-[#C5A059]/40 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
                Estimated Total Monthly Payment
              </span>
              <div className="font-luxury text-4xl sm:text-5xl font-extrabold text-white tracking-tight my-2">
                ${calculations.totalMonthly.toLocaleString()}
                <span className="text-xs text-slate-400 font-normal uppercase tracking-wider block sm:inline sm:ml-2">
                  / Month
                </span>
              </div>

              {/* Progress Distribution Bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex my-6 bg-black/40 border border-white/10">
                <div style={{ width: `${piPercent}%` }} className="bg-[#C5A059]" title="Principal & Interest" />
                <div style={{ width: `${taxPercent}%` }} className="bg-[#4E72B8]" title="Property Tax" />
                <div style={{ width: `${insPercent}%` }} className="bg-[#10B981]" title="Home Insurance" />
                <div style={{ width: `${hoaPercent}%` }} className="bg-[#EAB308]" title="HOA Dues" />
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                    <span className="text-slate-300">Principal & Interest</span>
                  </div>
                  <span className="font-bold text-white">${calculations.monthlyPI.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4E72B8]" />
                    <span className="text-slate-300">NV Property Tax (0.68%)</span>
                  </div>
                  <span className="font-bold text-white">${calculations.monthlyTax.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                    <span className="text-slate-300">Homeowners Insurance</span>
                  </div>
                  <span className="font-bold text-white">${calculations.monthlyInsurance.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
                    <span className="text-slate-300">HOA Community Fee</span>
                  </div>
                  <span className="font-bold text-white">${calculations.hoaMonthly.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] text-slate-400 font-light flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
              <span>Estimates for guidance only. Consult your preferred luxury mortgage lender for precise rate locks.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
