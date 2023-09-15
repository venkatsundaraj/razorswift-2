import React from "react";
import { Box } from "@mui/material";
import HeroSec from "@/components/pageBasedComponents/aboutus/herosec";
import RazorswiftForYou from "@/components/pageBasedComponents/aboutus/RazorswiftForYou";
import RazorSwiftForBusinesses from "@/components/pageBasedComponents/aboutus/RazorSwiftForBusinesses";
const About = () => {
  return (
    <Box>
      <HeroSec />
      <RazorswiftForYou />
      <RazorSwiftForBusinesses />
    </Box>
  );
};

export default About;
