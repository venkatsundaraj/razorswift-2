"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import data from "../../../constants/Homepage/pathway.js";
import datatwo from "../../../constants/Homepage/pathwaytwo.js";
import homePageImagePaths from "../../../constants/ImagePaths/Homepage/homePageImagePaths";
import Image from "next/image";
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

  fontWeight: "500",
};

const accordimg = {
  width: "clamp(185px, 14.3vw, 300px)",
  // height: "clamp(180px, 13.3vw, 280px)",
  height: "clamp(145px, 11.2vw, 255px)",
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

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        padding: { xs: "15px", lg: "0 50px 20px" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "common.white",

          fontSize: { xs: "35px", lg: "clamp(45px, 3.5vw, 64px)" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        RAZORSWIFT PATHWAYS
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          justifyContent: "space-around",
        }}
      >
        {/* first sec*/}
        <Box sx={{ width: { xs: "100vw", md: "35vw", lg: "35vw" } }}>
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
          {data.map(
            (
              item,
              index // Add index parameter to map
            ) => (
              <Accordion
                key={index} // Add a unique key for each accordion
                sx={{
                  backgroundColor: "primary.dropdown",
                  borderRadius:
                    index === 0
                      ? "40px 40px 0 0"
                      : index === data.length - 1
                      ? "0px 0px 40px 40px"
                      : "0",
                  width: { xs: "325px", sm: "730px", md: "100%", lg: "100%" },
                }}
                expanded={expanded === `panel${index}`} // Use index to identify each accordion
                onChange={handleChange(`panel${index}`)} // Use index to identify each accordion
              >
                <AccordionSummary
                  sx={{
                    borderRadius:
                      index === 0
                        ? "30px 30px 0 0"
                        : index === data.length - 1
                        ? "0px 0px 40px 40px"
                        : "0",
                  }}
                  aria-controls={`panel${index}d-content`} // Use index to identify each accordion
                  id={`panel${index}d-header`} // Use index to identify each accordion
                >
                  <Typography
                    variant="body1"
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
                <AccordionDetails sx={{ border: "none", height: "40vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ marginLeft: "10px" }}
                      style={fontdes}
                    >
                      {item.description}
                    </Typography>
                    <Image
                      style={accordimg}
                      src={homePageImagePaths.pathwayacc}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            )
          )}
        </Box>
        {/* second sec*/}
        <Box sx={{ width: { xs: "100vw", md: "35vw", lg: "35vw" } }}>
          <Typography style={fontaspi} sx={{ color: "common.white" }}>
            Businesses
          </Typography>
          <Typography style={fontaspitwo} sx={{ color: "common.white" }}>
            Standardise assessments and training.
          </Typography>
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
            Craft your pathway now
          </Typography>
          {datatwo.map(
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
                      : index === datatwo.length - 1
                      ? "0px 0px 40px 40px"
                      : "0",
                  width: { xs: "325px", sm: "730px", md: "100%", lg: "100%" },
                }}
                expanded={expandedone === `panelone${index}`} // Use index to identify each accordion
                onChange={handleChangeone(`panelone${index}`)} // Use index to identify each accordion
              >
                <AccordionSummary
                  sx={{
                    borderRadius:
                      index === 0
                        ? "30px 30px 0 0"
                        : index === datatwo.length - 1
                        ? "0px 0px 40px 40px"
                        : "0",
                    backgroundColor: "primary.accord",
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
                <AccordionDetails sx={{ border: "none", height: "40vh" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Typography sx={{ marginLeft: "10px" }} style={fontdes}>
                      {item.description}
                    </Typography>
                    <Image
                      style={accordimg}
                      src={homePageImagePaths.pathwayacc}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}
