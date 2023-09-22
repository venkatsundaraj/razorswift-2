import React from "react";
import { Box } from "@mui/material";
import HeroSection from "@/components/pageBasedComponents/Aspirants/HeroSection";
import CareerDropDownBody from "@/components/dropDownComponents/CareerDropDownBody";
import { businessDropDownBodyData } from "@/constants/Business/businessPageData";
import GetStartedSection from "@/components/pageBasedComponents/Aspirants/GetStartedSection";
import { readyToStartData } from "@/constants/Business/businessPageData";
import AboutUsSection from "@/components/pageBasedComponents/Aspirants/AboutUsSection";
import StickyContainerSection from "@/components/pageBasedComponents/Business/StickyContainerSection";

function Business() {
  return (
    <Box component="main">
      <HeroSection />
      <CareerDropDownBody dropDownBodyData={businessDropDownBodyData} />
      <StickyContainerSection />
      <GetStartedSection readyToStartData={readyToStartData} />
    </Box>
  );
}

export default Business;
