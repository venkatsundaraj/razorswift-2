import React from "react";
import HeroSection from "@/components/pageBasedComponents/Aspirants/HeroSection";
import { Box } from "@mui/material";
import CareerSection from "@/components/pageBasedComponents/Aspirants/CareerSection";

export const metadata = {
  title: "Aspirants | Razorswift",
};

function Aspirants() {
  return (
    <Box component="main">
      <HeroSection />
      <CareerSection />
    </Box>
  );
}

export default Aspirants;
