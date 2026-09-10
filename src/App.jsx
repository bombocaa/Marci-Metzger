import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import Neighborhoods from './components/Neighborhoods';
import AboutMarci from './components/AboutMarci';
import WhyChooseUs from './components/WhyChooseUs';
import ValuationCalculator from './components/ValuationCalculator';
import MortgageCalculator from './components/MortgageCalculator';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [searchFilter, setSearchFilter] = useState(null);

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroSearch = (filterData) => {
    setSearchFilter(filterData);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-[#C5A059] selection:text-black font-sans">
      {/* Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main>
        {/* Hero with Search Widget */}
        <Hero onSearch={handleHeroSearch} onOpenContact={handleOpenContact} />

        {/* Featured Luxury Estates */}
        <FeaturedListings searchFilter={searchFilter} onOpenContact={handleOpenContact} />

        {/* Curated Neighborhoods & Enclaves */}
        <Neighborhoods />

        {/* About Marci Metzger - Managing Broker */}
        <AboutMarci onOpenContact={handleOpenContact} />

        {/* The 4 Pillars of Excellence */}
        <WhyChooseUs />

        {/* Interactive Home Valuation Tool */}
        <ValuationCalculator onOpenContact={handleOpenContact} />

        {/* Mortgage & Investment Estimator */}
        <MortgageCalculator />

        {/* Verified Client Testimonials */}
        <Testimonials />

        {/* Private Consultation & Contact Info */}
        <ContactSection />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
