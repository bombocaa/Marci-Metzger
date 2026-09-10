import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import AgentProfile from "./components/AgentProfile";
import GetItSold from "./components/GetItSold";
import SearchSection from "./components/SearchSection";
import Affiliations from "./components/Affiliations";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <AgentProfile />
        <GetItSold />
        <SearchSection />
        <Affiliations />
        <Gallery />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
