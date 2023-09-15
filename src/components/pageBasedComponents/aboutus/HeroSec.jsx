import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const HeroSec = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ marginTop: "50px" }}>
        <Typography sx={{ fontSize: "24px" }}>
          Let's get to know each other.
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: "72px", color: "primary.main" }}
        >
          Making Human Asset Management easier
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSec;
