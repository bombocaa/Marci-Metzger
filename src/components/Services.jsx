import React from "react";
import { IMGS } from "../data/constants";

export default function Services() {
  const items = [
    {
      src: IMGS.svc1,
      alt: "Luxury home interior",
      title: "Real Estate Done Right",
      body: "Whether buying or selling your residence, exploring investment properties, or simply learning the market — our team ensures you get an exceptional experience from start to close.",
    },
    {
      src: IMGS.svc2,
      alt: "Modern residential exterior",
      title: "Commercial & Residential",
      body: "Condos to estates, fixer-uppers to luxury retreats — we handle all of it. We live in this community. We know it. And we'll find you the perfect place in it.",
    },
    {
      src: IMGS.svc3,
      alt: "Client meeting with realtor",
      title: "Rely on Expertise",
      body: "Questions on credit, loans, or affordability? Trust us to connect you with the right professionals and keep you confident and never alone through the entire process.",
    },
  ];

  return (
    <section className="py-28 px-8 md:px-16 bg-[#FAF7F2] border-t border-[#E2DAD0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {items.map(({ src, alt, title, body }, i) => (
            <div key={title} className="group" style={{ marginTop: i === 1 ? "48px" : "0" }}>
              <div className="overflow-hidden mb-7">
                <img
                  src={src}
                  alt={alt}
                  className="w-full aspect-[5/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3
                className="text-xl font-medium text-[#24211E] mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p
                className="text-[#5C544D] text-sm leading-[1.75]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
