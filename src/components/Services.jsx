import React from "react";
import { motion } from "motion/react";
import svc1 from "../assets/service_1.webp";
import svc2 from "../assets/service_2.webp";
import svc3 from "../assets/service_3.webp";

export default function Services() {
  const items = [
    {
      src: svc1,
      alt: "Home interior staging",
      title: "Real Estate Done Right",
      body: "Whether buying or selling your residence, exploring investment properties, or simply learning the market — our team ensures you get an exceptional experience from start to close.",
    },
    {
      src: svc2,
      alt: "Modern luxury property with pool",
      title: "Commercial & Residential",
      body: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    },
    {
      src: svc3,
      alt: "Client consultation and partnership",
      title: "Rely on Expertise",
      body: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 px-6 md:px-10 lg:px-12 bg-[#FAF7F2] border-t border-[#E2DAD0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#24211E]" style={{ fontFamily: "'Playfair Display', serif" }}>
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map(({ src, alt, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className={`group ${i === 1 ? "md:mt-6" : ""}`}
            >
              <div className="overflow-hidden mb-4 sm:mb-5">
                <img
                  src={src}
                  alt={alt}
                  className="w-full aspect-[5/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3
                className="text-lg sm:text-xl font-medium text-[#24211E] mb-2 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p
                className="text-[#5C544D] text-xs sm:text-sm leading-[1.65]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
