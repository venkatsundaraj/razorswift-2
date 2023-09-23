import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
const OurCommitment = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <Box>
            <Typography
              sx={{ textAlign: "center", fontSize: "44px", fontWeight: "600" }}
            >
              Our Commitment
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              textAlign: "justify",
              fontSize: "20px",
              color: "primary.paragrey",
            }}
          >
            RazorSwift's commitment extends beyond hiring, sparking continuous
            engagement post-placement. We redefine talent acquisition and
            progression, sculpting a roadmap for sustained success. In this
            vision, both businesses and aspirants embark on a transformative
            journey toward enduring achievement.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </Box>
  );
};

export default OurCommitment;
