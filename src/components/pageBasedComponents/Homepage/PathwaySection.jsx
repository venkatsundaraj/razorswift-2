"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import data from "../../../constants/Homepage/pathway.js";
import datatwo from "../../../constants/Homepage/pathwaytwo.js";
import homePageImagePaths from "../../../constants/ImagePaths/Homepage/homePageImagePaths";
import pathwayheads from "@/constants/Homepage/pathwayheads.js";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";
import { useState } from "react";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: "1px solid",
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ display: "none" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#DCBDE3",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const fonttitle = {
  fontWeight: "bold",
};

const fontdes = {
  fontSize: "clamp(15px, 1.2vw, 20px)",

  fontWeight: "500",
  height: "clamp(75px, 5.5vw, 110px)",
};

const fontaspi = {
  fontSize: "clamp(34px, 2.5vw, 44px)",

  fontWeight: "500",
};

const fontaspitwo = {
  fontSize: "clamp(20px, 1.5vw, 28px)",

  fontWeight: "500",
};

const fontaspithree = {
  fontSize: "clamp(15px, 1.2vw, 20px)",
  textDecoration: "none",
  fontWeight: "500",
};

const accordimg = {
  width: "clamp(280px, 21.7vw, 360px)",
  // height: "clamp(180px, 13.3vw, 280px)",
  height: "auto",
};

export default function PathwaySection() {
  const [expanded, setExpanded] = React.useState("panel0"); // Change initial value to null
  const [expandedone, setExpandedone] = React.useState("panelone0");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null); // Update to null when collapsed
  };
  const handleChangeone = (panelone) => (eventone, newExpandedone) => {
    setExpandedone(newExpandedone ? panelone : null); // Update to null when collapsed
  };

  // const [clickedId, setClickedId] = useState("1");
  const [content, setContent] = useState(datatwo[0]);
  const handleTitleClick = (id) => {
    // Find the item in datatwo with a matching id
    const matchingItem = datatwo.find(
      (item) => item.id.toString() === id.toString()
    );

    setContent(matchingItem);

    console.log(matchingItem);
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        padding: { xs: "15px", lg: "60px 50px " },
      }}
    >
      {/* first sec*/}
      <Grid container spacing={10}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          item
          xs={12}
          lg={6}
        >
          <Typography
            variant="h1"
            sx={{
              color: "common.white",
              marginBottom: "50px",
              fontSize: { xs: "35px", lg: "clamp(45px, 3.5vw, 64px)" },
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            RAZORSWIFT PATHWAYS
          </Typography>
          <Box>
            {pathwayheads.map((item) => (
              <Box key={item.id}>
                <Typography
                  style={fontaspi}
                  sx={{ color: "common.white", cursor: "pointer" }}
                  onClick={() => handleTitleClick(item.id)}
                >
                  {item.title}
                </Typography>
                <Typography
                  style={fontaspitwo}
                  sx={{ color: "common.white", cursor: "pointer" }}
                >
                  {item.description}
                </Typography>
                <Link style={fontaspithree} href={item.link}>
                  <Typography
                    style={fontaspithree}
                    sx={{
                      color: "common.white",
                      backgroundColor: "primary.purp",
                      width: "fit-content",
                      padding: "5px 15px",
                      borderRadius: "50px",
                      margin: "15px 0 15px 0",
                      cursor: "pointer",
                    }}
                  >
                    {item.button}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          {/* <Box value={2} sx={{}}>
            <Typography
              variant="body1"
              style={fontaspi}
              sx={{ color: "common.white" }}
            >
              Aspirants
            </Typography>
            <Typography
              variant="body1"
              style={fontaspitwo}
              sx={{ color: "common.white" }}
            >
              Be a niche specialist to achieve your potential
            </Typography>
            <Typography
              variant="body1"
              style={fontaspithree}
              sx={{
                color: "common.white",
                backgroundColor: "primary.purp",
                width: "fit-content",
                padding: "5px 15px",
                borderRadius: "50px",
                margin: "15px 0 15px 0",
                cursor: "pointer",
              }}
            >
              Choose your pathway now
            </Typography>
          </Box> */}
        </Grid>
        {/* second sec*/}
        <Grid item xs={12} lg={5}>
          <Box sx={{}}>
            {content.accord.map(
              (
                item,
                index // Add index parameter to map
              ) => (
                <Accordion
                  key={index} // Add a unique key for each accordion
                  sx={{
                    backgroundColor: "primary.accord",
                    borderRadius:
                      index === 0
                        ? "40px 40px 0 0"
                        : index === content.accord.length - 1
                        ? "0px 0px 40px 40px"
                        : "0",
                    width: { xs: "325px", sm: "790px", md: "100%", lg: "100%" },
                    // paddingTop: "25px",
                    // paddingBottom: "25px",
                  }}
                  expanded={expandedone === `panelone${index}`} // Use index to identify each accordion
                  onChange={handleChangeone(`panelone${index}`)} // Use index to identify each accordion
                >
                  <Box sx={{ padding: "20px 0" }}>
                    <AccordionSummary
                      sx={{
                        borderRadius:
                          index === 0
                            ? "30px 30px 0 0"
                            : index === content.accord.length - 1
                            ? "0px 0px 40px 40px"
                            : "0",
                        backgroundColor: "primary.accord",
                        height: "0px",
                      }}
                      aria-controls={`panelone${index}d-content`} // Use index to identify each accordion
                      id={`panelone${index}d-header`} // Use index to identify each accordion
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "clamp(25px, 2vw, 36px)",
                            md: "clamp(22px, 2vw, 36px)",
                            sm: "20px",
                            xs: "20px",
                          },
                        }}
                        style={fonttitle}
                      >
                        {item.title}
                      </Typography>
                    </AccordionSummary>
                  </Box>
                  <AccordionDetails
                    sx={{
                      border: "none",
                      padding: "0",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{ padding: "10px 10px 0 20px" }}
                        style={fontdes}
                      >
                        {item.description}
                      </Typography>
                      <Box
                        sx={{
                          marginTop: { lg: "-30px" },
                          display: "flex",

                          justifyContent: "flex-end",
                        }}
                      >
                        <Image style={accordimg} src={item.img} />
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              )
            )}
          </Box>
        </Grid>
      </Grid>
      {/* </Box> */}
    </Box>
  );
}
