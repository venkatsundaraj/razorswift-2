import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Image from "next/image";
import homePageImagePaths from "../../../constants/ImagePaths/Homepage/homePageImagePaths";
const DemoSection = () => {
  const fontstwo = {
    fontSize: "clamp(20px, 1.5vw, 28px)",
  };

  return (
    <Box
      sx={{
        lineHeight: "1.0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        // border: "1px solid",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "primary.purp",
            lineHeight: "1.0",
            fontSize: {
              xs: "25px",
              md: "clamp(40px, 3vw, 100px)",
              lg: "clamp(40px, 3vw, 100px)",
            },
          }}
        >
          READY TO GET STARTED?
        </Typography>
        <Typography variant="body1" style={fontstwo} sx={{ margin: "20px 0" }}>
          Hire at scale with the click of a button.
        </Typography>
        <Box sx={{ display: "flex", gap: 5 }}>
          {/* <Box
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "200px",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              underline="none"
              sx={{
                fontSize: "15px",
                fontFamily: "urbanist",

                color: "common.white",
              }}
            >
              Build Your Profile
            </Link>
          </Box> */}
          <Box
            sx={{
              border: "2px solid",
              borderColor: "primary.main",
              borderRadius: "200px",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link
              variant="body1"
              underline="none"
              sx={{
                fontSize: "15px",

                color: "primary.main",
              }}
            >
              Get a Demo
            </Link>
          </Box>
        </Box>
        <Image
          style={{ width: "clamp(300px, 23.1vw, 500px)", height: "auto" }}
          src={homePageImagePaths.fivemen}
        />
      </Box>
    </Box>
  );
};

export default DemoSection;
