import React from "react";
import logoImg from "../assets/logo.webp";

export default function Contact() {
  return (
    <section id="contact">
      <div className="bg-[#FAF7F2] py-28 px-8 md:px-16 border-t border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-6xl font-medium text-[#24211E] leading-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let's Find<br />Your Next<br /><em>Home.</em>
            </h2>
            <div className="flex flex-col gap-6">
              {["Name", "Email", "Phone"].map((field) => (
                <input key={field} type="text" placeholder={field}
                  className="w-full border-b border-[#E2DAD0] pb-3 text-sm text-[#24211E] bg-transparent focus:outline-none placeholder-[#8A8075]/60 focus:border-[#786F66] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              ))}
              <textarea placeholder="Tell us what you're looking for" rows={4}
                className="w-full border-b border-[#E2DAD0] pb-3 text-sm text-[#24211E] bg-transparent focus:outline-none placeholder-[#8A8075]/60 resize-none focus:border-[#786F66] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <button
                className="self-start px-12 py-4 text-[10px] tracking-[0.25em] uppercase text-[#FAF7F2] bg-[#24211E] hover:bg-[#3B3632] font-semibold transition-colors mt-2 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8A8075] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>Our Office</p>
              <p className="text-2xl font-medium text-[#24211E] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Marci Metzger</p>
              <p className="text-xs tracking-widest uppercase text-[#8A8075] mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>The Ridge Realty Group</p>
              <p className="text-sm text-[#5C544D] leading-loose mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                3190 HW-160, Suite F<br />Pahrump, Nevada 89048
              </p>
              <a href="tel:2069196886" className="text-sm font-semibold text-[#24211E] hover:text-[#5C544D] transition-colors border-b border-[#24211E]/30 pb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                (206) 919-6886
              </a>
            </div>

            <div className="mt-16">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#8A8075] mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>Hours</p>
              {[["Monday – Friday", "9am – 5pm"], ["Saturday", "By Appointment"], ["Sunday", "Closed"]].map(([day, hours]) => (
                <div key={day} className="flex justify-between text-sm py-3 border-b border-[#E2DAD0]">
                  <span className="text-[#5C544D]" style={{ fontFamily: "'Inter', sans-serif" }}>{day}</span>
                  <span className="text-[#8A8075]" style={{ fontFamily: "'Inter', sans-serif" }}>{hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-14 flex gap-5">
              {["Facebook", "Instagram", "LinkedIn"].map((label) => (
                <a key={label} href="#" aria-label={label}
                  className="text-[10px] tracking-widest uppercase text-[#8A8075] hover:text-[#24211E] transition-colors"
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
        className="py-8 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ backgroundColor: "#1E1B18" }}
      >
        <div className="flex items-center gap-5">
          <img src={logoImg} alt="Marci Metzger Homes" className="h-10 md:h-12 w-auto max-w-[220px] object-contain brightness-0 invert opacity-75" />
          <p className="text-[10px] tracking-widest uppercase text-[#FAF7F2]/50" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Marci Metzger Homes
          </p>
        </div>
        <p className="text-[10px] text-[#FAF7F2]/30" style={{ fontFamily: "'Inter', sans-serif" }}>
          The Ridge Realty Group · Equal Housing Opportunity · Nevada License #12345
        </p>
      </footer>
    </section>
  );
}
