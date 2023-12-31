"use client";

import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { aboutUsData } from "@/constants/Aspirants/aspirantPageData";
import ParagraphHeading from "@/components/headingComponents/ParagraphHeading";

function AboutUsSection({ ...props }) {
  return (
    <Box
      {...props}
      component="section"
      sx={{
        backgroundColor: "pinkPalette.extraDark",
        padding: (theme) => theme.spacing(4, 0),
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <Typography
              variant="h3"
              sx={{
                color: "primaryPalette.white",
                fontSize: "clamp(34px,4vw,48px)",
                fontWeight: "600",
              }}
            >
              {aboutUsData.title}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={8}>
            <ParagraphHeading
              style={{ fontWeight: "400" }}
              sx={{ color: "primaryPalette.white" }}
            >
              {aboutUsData.description}
            </ParagraphHeading>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutUsSection;
