import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
const ForBussiness = () => {
  return (
    <Box sx={{ margin: "30px 60px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "600",
              color: "primary.headaboutus",
              textAlign: "justify",
            }}
          >
            For businesses, Pathways is a canvas to tailor competencies,
            aligning aspirants' abilities with the company's vision.
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "primary.paragrey",
                textAlign: "justify",
              }}
            >
              Corporate pathways establish a uniform, structured process in line
              with organizational needs. This entails standardized assessments
              and enabling modules, catalyzing efficient curation and hiring.
              The approach harmonizes with ecosystem partners, fostering
              flexibility and unity in talent acquisition and management.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "primary.paragrey",
              }}
            >
              Pathways revolutionize talent progression, underpinned by AI, data
              insights, and third-party collaborations, optimizing time and
              costs. Our cutting-edge AI algorithms intricately match aspirants'
              profiles to career pathways. This transcends skills, encompassing
              aspirational and upskilling trajectories, enriching matches with
              future-forward perspectives.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ForBussiness;
