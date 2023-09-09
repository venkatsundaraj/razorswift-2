import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import sshot from "../../public/images/screenshot.png";
const whatwedo = () => {
  const fonts = {
    fontSize: "clamp(50px, 4vw, 64px)",
  };
  const fontstwo = {
    fontSize: "clamp(50px, 4.5vw, 72px)",
  };
  const fontsthree = {
    fontSize: "clamp(15px, 1.3vw, 20px)",
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "primary.thirdsec",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Box sx={{ padding: "50px", display: "flex", alignItems: "center" }}>
        <Image src={sshot} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "50%",
          padding: "50px",
        }}
      >
        <Box>
          <Typography
            variant="p"
            style={fonts}
            sx={{
              color: "common.white",
              fontFamily: "Bebas Neue",
            }}
          >
            WHAT WE DO
          </Typography>
          <Typography sx={{ fontSize: "14px", fontFamily: "Urbanist" }}>
            Explain the overall process of how RazorSwift works,
          </Typography>
        </Box>
        <Box>
          <Typography
            style={fontstwo}
            variant="p"
            sx={{
              fontFamily: "Bebas Neue",
              color: "common.white",
            }}
          >
            ENROLL
          </Typography>
          <Typography
            style={fontsthree}
            sx={{ color: "common.white", mb: "3%", fontWeight: "600" }}
          >
            Start by signing up with us, if you are looking to score big. Sign
            up is as easy as sending a message on WhatsApp.
          </Typography>
          <Typography style={fontsthree} sx={{ color: "common.white" }}>
            Let's address the aspirants first, and talk about a simple signing
            up process and in a broader sense what the company offers to them -
            we will keep this within 3 lines. In this point, we can also mention
            the 'students' and 'experienced professional' distinction.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default whatwedo;
