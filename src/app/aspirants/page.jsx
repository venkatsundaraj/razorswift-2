import React from "react";
import HeroSection from "@/components/pageBasedComponents/Aspirants/HeroSection";
import { Box } from "@mui/material";
import CareerSection from "@/components/pageBasedComponents/Aspirants/CareerSection";
import DropdownSection from "@/components/pageBasedComponents/Aspirants/DropdownSection";
import DiscoverSection from "@/components/pageBasedComponents/Aspirants/DiscoverSection";
import FastrackSection from "@/components/pageBasedComponents/Aspirants/FastrackSection";
import GetStartedSection from "@/components/pageBasedComponents/Aspirants/GetStartedSection";
import AboutUsSection from "@/components/pageBasedComponents/Aspirants/AboutUsSection";
import StaticScrollSection from "@/components/pageBasedComponents/Aspirants/StaticScrollSection";
import { stickySliderData } from "@/constants/Aspirants/aspirantPageData";

export const metadata = {
  title: "Aspirants | Razorswift",
};

function Aspirants() {
  return (
    <Box component="main">
      {/* hello */}
      <HeroSection />
      <StaticScrollSection stickySliderData={stickySliderData} />
      <CareerSection />
      <DropdownSection />
      <DiscoverSection />
      <FastrackSection />
      <GetStartedSection />
      <AboutUsSection />
    </Box>
  );
}

export default Aspirants;
