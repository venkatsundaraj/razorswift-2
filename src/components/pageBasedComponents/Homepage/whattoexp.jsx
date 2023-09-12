import React from "react";
// import data from "@/utilities/what-to-expect";
import Image from "next/image";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
const Whattoexp = ({ contchangeone }) => {
  const dropdata = contchangeone.secondec;
  const imgsize = {
    width: "15%",
    marginRight: "3%",
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          alignItems: "center",
          mt: "5%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%", lg: "50%" },
            borderRight: { xs: "none", lg: "1px solid" },
            pt: "3%",
            pb: "3%",
            borderColor: "primary.mainone",
            textAlign: "center",
          }}
        >
          <Typography variant="body1" sx={{ fontSize: "28px" }}>
            What to expect ?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "row" },
            flexWrap: { xs: "nowrap", md: "wrap", lg: "wrap" },
            justifyContent: "end",
          }}
        >
          {dropdata.map((item) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                borderRadius: "20px",
                backgroundColor: "common.white",
                width: { xs: "100%", md: "45%", lg: "45%" },
                p: "15px",
                alignItems: "center",
                ml: "1%",
                mb: "1%",
              }}
            >
              <Image style={imgsize} src={item.image} />
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "clamp(19px,1.5vw,20px)",
                    fontWeight: "600",
                    lineHeight: 1.0,
                    mb: "5%",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "clamp(17px,1.2vw,20px)",
                    lineHeight: 1.0,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Whattoexp;
