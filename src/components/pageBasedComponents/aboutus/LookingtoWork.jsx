import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import Aboutusimagepathway from "@/constants/ImagePaths/Aboutus/Aboutusimagepathway";
import Link from "@mui/material/Link";
const LookingtoWork = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Image src={Aboutusimagepathway.lookingto} />
            <Typography sx={{ fontSize: "36px" }}>
              Looking to work with us?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3}>
          <Link
            sx={{
              textDecoration: "none",
              backgroundColor: "primary.litepink",
              color: "primary.main",
              cursor: "pointer",
            }}
          >
            Join Us
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LookingtoWork;
