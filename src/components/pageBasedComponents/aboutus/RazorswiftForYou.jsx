import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import Image from "next/image";
import Aboutusimagepathway from "@/constants/ImagePaths/Aboutus/Aboutusimagepathway";
const RazorswiftForYou = () => {
  return (
    <Box sx={{ margin: "20px 30px" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Image src={Aboutusimagepathway.puzzle} />
        </Grid>
        <Grid
          sx={{ display: "flex", alignItems: "center" }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography sx={{ fontSize: "24px" }}>
              RazorSwift for you
            </Typography>
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "600",
                color: "primary.thirdsec",
              }}
            >
              A Dynamic Ecosystem at the intersection of Talent and Opportunity
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              We empower aspiring individuals to perpetually thrive within
              India's evolving hiring landscape. Pathways, our innovative
              approach, leverages an extensive network of knowledge partners.
              This network spans assessment tools, interview facilitators,
              upskilling modules, comprehensive mentorship, and guidance for
              holistic career progression. Aspirants can tailor their journey by
              choosing skills-based, domain-based, or corporate pathways.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RazorswiftForYou;
