import React from "react";
import { Box } from "@mui/material";
import HeroSec from "@/components/pageBasedComponents/aboutus/HeroSec";
import RazorswiftForYou from "@/components/pageBasedComponents/aboutus/RazorswiftForYou";
import RazorSwiftForBusinesses from "@/components/pageBasedComponents/aboutus/RazorSwiftForBusinesses";
import ForBussiness from "@/components/pageBasedComponents/aboutus/ForBussiness";
import OurCommitment from "@/components/pageBasedComponents/aboutus/OurCommitment";
import LookingtoWork from "@/components/pageBasedComponents/aboutus/LookingtoWork";
const About = () => {
  return (
    <Box>
      <HeroSec />
      <RazorswiftForYou />
      <RazorSwiftForBusinesses />
      <ForBussiness />
      <OurCommitment />
      <LookingtoWork />
    </Box>
  );
};

export default About;