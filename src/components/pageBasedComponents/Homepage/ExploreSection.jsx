import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import data from "../../../constants/Homepage/whyrazor.js";
const ExploreSection = () => {
  const headfont = {
    fontSize: "clamp(50px, 4vw, 64px)",
  };
  // const paraone = {
  //   fontSize: "clamp(15px, 1.4vw, 20px)",
  // };
  const numbersec = {
    fontSize: "clamp(30px, 2.4vw, 40px)",
  };
  const numbersecdescription = {
    fontSize: "clamp(10px, 1.1vw, 16px)",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row", lg: "row" },
        alignItems: "center",
        height: { xs: "100vh", sm: "50vh", md: "100vh", xl: "65vh" },
        pl: "15px",
        pr: "15px",
        justifyContent: {
          xs: "flex-start",
          md: "center",
        },
        gap: { md: "60px" },
        alignItems: { xs: "flex-start", md: "center", lg: "center" },
        padding: { md: "0 60px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "flex-start",
          width: { md: "800px", lg: "800px", xl: "800px" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "primary.purp",
            fontSize: {
              xs: "25px",
              md: "clamp(50px, 4vw, 64px)",
              lg: "clamp(50px, 4vw, 64px)",
            },

            textAlign: "left",
            margin: "15px 0",
            width: { xs: "300px", sm: "730px", md: "100%", lg: "100%" },
          }}
        >
          {data[0].title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "15px",
              md: "clamp(15px, 1.4vw, 20px)",
              lg: "clamp(15px, 1.4vw, 20px)",
            },
            textAlign: "center",
            mb: "3%",

            textAlign: "justify",
            width: { xs: "100%", sm: "700px", md: "100%", lg: "100%" },
          }}
        >
          {data[0].description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "15px",
              md: "clamp(15px, 1.4vw, 20px)",
              lg: "clamp(15px, 1.4vw, 20px)",
            },
            textAlign: "justify",
            mb: "4%",

            width: { xs: "100%", sm: "700px", md: "100%", lg: "100%" },
          }}
        >
          {data[0].descriptiontwo}
        </Typography>
        <Link
          variant="body1"
          underline="none"
          sx={{
            backgroundColor: "primary.purp",
            color: "common.white",
            pt: "10px",
            pb: "10px",
            pl: "30px",
            pr: "30px",
            borderRadius: "200px",
            margin: "15px 0",
            cursor: "pointer",
          }}
        >
          Explore
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: { xs: "100%", md: "45%", lg: "fit-content" },
        }}
      >
        <Box
          sx={{
            height: "clamp(250px, 19.3vw, 270px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "primary.pinktwo",
            }}
          >
            <Typography
              variant="body1"
              style={numbersec}
              sx={{ color: "primary.purp" }}
            >
              70%
            </Typography>
            <Typography variant="body1" style={numbersecdescription} sx={{}}>
              <b>Improvement</b> in new hire <b>retention.</b>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "primary.redpinktwo",
              marginTop: "20px",
            }}
          >
            <Typography
              variant="body1"
              style={numbersec}
              sx={{ color: "primary.purp" }}
            >
              70%
            </Typography>
            <Typography variant="body1" style={numbersecdescription} sx={{}}>
              <b>Reduction</b> and removing <b>human bias</b>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            height: "clamp(250px, 19.3vw, 270px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-start", lg: "flex-end" },
            marginLeft: { xs: "15px", md: "30px", lg: "30px" },
          }}
        >
          <Box
            sx={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "primary.redpink",
            }}
          >
            <Typography
              variant="body1"
              style={numbersec}
              sx={{ color: "primary.purp" }}
            >
              70%
            </Typography>
            <Typography variant="body1" style={numbersecdescription} sx={{}}>
              <b>Improvement</b>in best candidate<b>matches</b>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: "primary.redpinkthree",
              marginTop: "20px",
            }}
          >
            <Typography
              variant="body1"
              style={numbersec}
              sx={{ color: "primary.purp" }}
            >
              67%
            </Typography>
            <Typography variant="body1" style={numbersecdescription} sx={{}}>
              <b>Faster</b> onboarding process
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExploreSection;
