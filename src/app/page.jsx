import React from "react";
import "./globals.css";
import HeroSection from "../components/pageBasedComponents/Homepage/HeroSection";
import Navbar from "../components/pageBasedComponents/Homepage/navbar";
import DropdownSection from "../components/pageBasedComponents/Homepage/DropdownSection";
import PathwaySection from "../components/pageBasedComponents/Homepage/PathwaySection";
import ExploreSection from "../components/pageBasedComponents/Homepage/ExploreSection";
import DemoSection from "../components/pageBasedComponents/Homepage/DemoSection";
import Footer from "../components/pageBasedComponents/Homepage/Footer";
const page = () => {
  return (
    <div className="Topcontainer">
      <Navbar />
      <HeroSection />
      <DropdownSection />
      <PathwaySection />
      <ExploreSection />
      <DemoSection />
      <Footer />
    </div>
  );
};

export default page;
