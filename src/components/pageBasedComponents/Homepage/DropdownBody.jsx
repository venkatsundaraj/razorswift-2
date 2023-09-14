import React from "react";
import { Box } from "@mui/system";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import homePageImagePaths from "../../../constants/ImagePaths/Homepage/homePageImagePaths";
import Whattoexp from "./whattoexp";
import { Container } from "@mui/material";

const DropdownBody = ({ contchange }) => {
  const imgs = {
    width: "500px",
    height: "initial",
  };
  const imgsvector = {
    width: "clamp(300px, 30.1vw, 500px)",
    height: "auto",
  };

  return (
    <Box
      sx={{
        backgroundColor: `${
          contchange.id == 1
            ? "primary.pinkcol"
            : "" || contchange.id == 2
            ? "primary.drophire"
            : "" || contchange.id == 3
            ? "primary.droppart"
            : ""
        }`,
        pt: "5%",
        pb: "5%",
        pl: { xs: "15px", lg: "64px" },
        pr: { xs: "15px", lg: "64px" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "50%", lg: "50%" } }}>
          <Box
            sx={{
              display: { xs: "flex" },
              flexDirection: { xs: "column", md: "column", lg: "column" },
              width: { xs: "100vw", lg: "900px" },
              alignItems: { xs: "center", md: "flex-start", lg: "flex-start" },
            }}
          >
            <Box sx={{ width: { xs: "100vw" } }}>
              <Image style={imgsvector} src={homePageImagePaths.aspiratvect} />
            </Box>
            <Box sx={{ width: { xs: "100vw" } }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "25px", lg: "clamp(45px,3.5vw,55px)" },

                  fontWeight: "500",
                }}
              >
                {contchange.firstsec.toptitleone}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "30px", lg: "clamp(65px,5vw,77px)" },
                  lineHeight: "1.0",
                  fontWeight: "600",
                  mb: "3%",
                }}
              >
                {contchange.firstsec.toptitletwo}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: "22px", mb: "5%" }}>
            {contchange.firstsec.toppara}
          </Typography>
          <Box
            sx={{
              backgroundColor: "common.white",
              width: "fit-content",
              borderRadius: "200px",
              pt: "5px",
              pb: "5px",
              pl: "20px",
              pr: "20px",
              cursor: "pointer",
            }}
          >
            <Link
              variant="body1"
              underline="none"
              sx={{
                fontSize: "20px",
                color: "primary.purp",
              }}
            >
              {contchange.firstsec.button}
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", md: "block", lg: "block" } }}>
          <Image style={imgs} src={homePageImagePaths.internmain} />
        </Box>
      </Container>
      {/* second */}
      <Whattoexp contchangeone={contchange} />
    </Box>
  );
};

export default DropdownBody;
