import React from "react";
import logoImg from "../assets/logo.webp";

export default function Contact() {
  return (
    <section id="contact">
      <div className="bg-white py-28 px-8 md:px-16 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-6xl font-medium text-black leading-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Find<br />Your Next<br /><em>Home.</em>
            </h2>
            <div className="flex flex-col gap-6">
              {["Name", "Email", "Phone"].map((field) => (
                <input key={field} type="text" placeholder={field}
                  className="w-full border-b border-black/10 pb-3 text-sm text-black bg-transparent focus:outline-none placeholder-black/25 focus:border-black/30 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              ))}
              <textarea placeholder="Tell us what you're looking for" rows={4}
                className="w-full border-b border-black/10 pb-3 text-sm text-black bg-transparent focus:outline-none placeholder-black/25 resize-none focus:border-black/30 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button
                className="self-start px-12 py-4 text-[10px] tracking-[0.25em] uppercase text-white bg-black hover:bg-neutral-800 font-semibold transition-colors mt-2 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-black/25 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>Our Office</p>
              <p className="text-2xl font-medium text-black mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Marci Metzger</p>
              <p className="text-xs tracking-widest uppercase text-black/35 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>The Ridge Realty Group</p>
              <p className="text-sm text-black/45 leading-loose mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                3190 HW-160, Suite F<br />Pahrump, Nevada 89048
              </p>
              <a href="tel:2069196886" className="text-sm font-semibold text-black hover:opacity-70 transition-opacity border-b border-black/30 pb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                (206) 919-6886
              </a>
            </div>

            <div className="mt-16">
              <p className="text-[10px] tracking-[0.25em] uppercase text-black/25 mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>Hours</p>
              {[["Monday – Friday", "9am – 5pm"], ["Saturday", "By Appointment"], ["Sunday", "Closed"]].map(([day, hours]) => (
                <div key={day} className="flex justify-between text-sm py-3 border-b border-black/5">
                  <span className="text-black/60" style={{ fontFamily: "'Inter', sans-serif" }}>{day}</span>
                  <span className="text-black/30" style={{ fontFamily: "'Inter', sans-serif" }}>{hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-14 flex gap-5">
              {["Facebook", "Instagram", "LinkedIn"].map((label) => (
                <a key={label} href="#" aria-label={label}
                  className="text-[10px] tracking-widest uppercase text-black/25 hover:text-black/60 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer
        className="py-7 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ backgroundColor: "#111" }}
      >
        <div className="flex items-center gap-5">
          <img src={logoImg} alt="Marci Metzger Homes" className="h-10 md:h-12 w-auto max-w-[220px] object-contain brightness-0 invert opacity-70" />
          <p className="text-[10px] tracking-widest uppercase text-white/25" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Marci Metzger Homes
          </p>
        </div>
        <p className="text-[10px] text-white/15" style={{ fontFamily: "'Inter', sans-serif" }}>
          The Ridge Realty Group · Equal Housing Opportunity · Nevada License #12345
        </p>
      </footer>
    </section>
  );
}
