import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "../assets/photo_gallery_1.webp";
import g2 from "../assets/photo_gallery_2.webp";
import g3 from "../assets/photo_gallery_3.webp";
import g4 from "../assets/photo_gallery_4.webp";
import g5 from "../assets/photo_gallery_5.webp";
import g6 from "../assets/photo_gallery_6.webp";
import g7 from "../assets/photo_gallery_7.webp";

const galleryImages = [
  { src: g1, title: "Mountain Falls Resort & Clubhouse", span: "md:col-span-2 md:row-span-2" },
  { src: g4, title: "Private Pool Estate with Mountain Views", span: "md:col-span-1 md:row-span-2" },
  { src: g2, title: "Sunlit Living Room with Mountain Views", span: "md:col-span-1 md:row-span-1" },
  { src: g3, title: "Pahrump Valley Scenic Community", span: "md:col-span-1 md:row-span-1" },
  { src: g7, title: "Waterfront Golf Course Residences", span: "md:col-span-1 md:row-span-1" },
  { src: g5, title: "Community Fitness & Sports Center", span: "md:col-span-2 md:row-span-1" },
  { src: g6, title: "Championship Golf & Tennis Courts", span: "md:col-span-1 md:row-span-1" },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightbox = (idx) => setSelectedIdx(idx);
  const closeLightbox = () => setSelectedIdx(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % galleryImages.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="bg-[#FAF7F2] py-24 px-8 md:px-16 border-t border-[#E2DAD0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-6xl font-medium text-[#24211E]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Photo Gallery
            </h2>
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[240px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className={`relative overflow-hidden group cursor-pointer rounded-xs ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-[#FAF7F2] text-xs tracking-wider font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#1E1B18]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-[#FAF7F2]/70 hover:text-[#FAF7F2] transition-colors cursor-pointer z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-8 h-8 stroke-[1.5]" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 p-3 bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/25 text-[#FAF7F2] rounded-full transition-colors cursor-pointer z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
          >
            <img
              src={galleryImages[selectedIdx].src}
              alt={galleryImages[selectedIdx].title}
              className="max-h-[75vh] w-auto object-contain rounded-xs shadow-2xl"
            />
            <p className="text-[#FAF7F2] text-sm tracking-wider mt-4 text-center font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              {galleryImages[selectedIdx].title} ({selectedIdx + 1} / {galleryImages.length})
            </p>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 p-3 bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/25 text-[#FAF7F2] rounded-full transition-colors cursor-pointer z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
