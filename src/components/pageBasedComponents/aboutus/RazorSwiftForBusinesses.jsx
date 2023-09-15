import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import Aboutusimagepathway from "@/constants/ImagePaths/Aboutus/Aboutusimagepathway";
const RazorSwiftForBusinesses = () => {
  const numbersec = {
    fontSize: "clamp(30px, 2.4vw, 40px)",
  };
  const numbersecdescription = {
    fontSize: "clamp(10px, 1.1vw, 16px)",
  };
  return (
    <Box sx={{ margin: "20px 30px" }}>
      <Box>
        <Typography
          sx={{ fontSize: "44px", fontWeight: "600", color: "primary.mainone" }}
        >
          RazorSwiftForBusinesses
        </Typography>
      </Box>

      <Grid container spacing={1}>
        <Grid
          sx={{ display: "flex", alignItems: "flex-end" }}
          item
          xs={12}
          md={6}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: { xs: "100%", md: "100%", lg: "fit-content" },
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
                  padding: "20px",
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
                <Typography
                  variant="body1"
                  style={numbersecdescription}
                  sx={{}}
                >
                  <b>Improvement</b> in new hire <b>retention.</b>
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "20px",
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
                <Typography
                  variant="body1"
                  style={numbersecdescription}
                  sx={{}}
                >
                  <b>Improvement</b> in new hire <b>retention.</b>
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
                  padding: "20px",
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
                <Typography
                  variant="body1"
                  style={numbersecdescription}
                  sx={{}}
                >
                  <b>Improvement</b> in new hire <b>retention.</b>
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "20px",
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
                  70%
                </Typography>
                <Typography
                  variant="body1"
                  style={numbersecdescription}
                  sx={{}}
                >
                  <b>Improvement</b> in new hire <b>retention.</b>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image src={Aboutusimagepathway.statisticimage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RazorSwiftForBusinesses;
