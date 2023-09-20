import React from "react";
import { Box } from "@mui/material";
import HeroSection from "@/components/pageBasedComponents/Aspirants/HeroSection";
import CareerDropDownBody from "@/components/dropDownComponents/CareerDropDownBody";
import { businessDropDownBodyData } from "@/constants/Business/businessPageData";
import GetStartedSection from "@/components/pageBasedComponents/Aspirants/GetStartedSection";
import { readyToStartData } from "@/constants/Business/businessPageData";
import AboutUsSection from "@/components/pageBasedComponents/Aspirants/AboutUsSection";

function Business() {
  return (
    <Box component="main">
      <HeroSection />
      <CareerDropDownBody dropDownBodyData={businessDropDownBodyData} />
      <GetStartedSection readyToStartData={readyToStartData} />
      <AboutUsSection />
    </Box>
  );
}

export default Business;
