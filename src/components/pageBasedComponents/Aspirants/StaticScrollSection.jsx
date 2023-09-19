"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { Container, Grid, Stack, Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";
import Image from "next/image";
import CustomSection from "@/components/globalComponents/CustomContainer/CustomSection";
import SecondaryHeading from "@/components/headingComponents/SecondaryHeading";
import { dropDownBodyData } from "@/constants/Aspirants/aspirantPageData";

import ParagraphHeading from "@/components/headingComponents/ParagraphHeading";
import SubtitleHeading from "@/components/headingComponents/SubtitleHeading";

function StaticScrollSection({ stickySliderData }) {
  const [percentage, setpercentage] = useState(0);
  const sectionRef = useRef(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const primaryCondition = latest > sectionRef.current.offsetTop;
    if (primaryCondition) {
      const value =
        (latest - sectionRef.current.offsetTop) /
        (sectionRef.current.clientHeight -
          document.documentElement.clientHeight);
      const filteredValue = Math.min(100, value * 100);
      if (filteredValue < 25) {
        setpercentage(0);
      } else if (25 < filteredValue && filteredValue < 50) {
        setpercentage(1);
      } else if (50 < filteredValue && filteredValue < 75) {
        setpercentage(2);
      } else if (75 < filteredValue && filteredValue < 100) {
        setpercentage(3);
      }
    }
  });

  return (
    <section
      ref={sectionRef}
      style={{
        height: "300vh",
        position: "relative",
        backgroundColor: "#EE5064",
        overflowX: "unset",
        padding: "40px 0",
      }}
    >
      <AppBar
        component="div"
        position="sticky"
        sx={{ backgroundColor: "unset", boxShadow: "unset" }}
      >
        <Toolbar sx={{ padding: "0" }}>
          <Container>
            <Grid
              container
              spacing={{ xs: 1, md: 4 }}
              alignItems={{ xs: "end" }}
              justifyContent="center"
              sx={{ height: "100vh", overfow: "hidden" }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{ height: { xs: "50%", md: "90%" } }}
              >
                {/* <Stack> */}
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    mb: { xs: 2, md: 5 },
                    position: "relative",
                    overflowY: "hidden",
                  }}
                >
                  {stickySliderData.image.map((image) => (
                    <Image
                      key={image.id}
                      alt="image"
                      src={image.image}
                      style={{
                        width: "100%",
                        left: "0",
                        top: `${image.id * 100}%`,
                        position: "absolute",
                        transform: `translateY(-${percentage * 100}%)`,
                        borderRadius: "40px",
                        transition: "transform 450ms ease-out",
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
                  ))}
                </Box>
                {/* </Stack> */}
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ height: { xs: "50%", md: "90%" } }}
              >
                <Stack
                  flexDirection="column"
                  alignItems="start"
                  sx={{ height: "100%" }}
                  justifyContent={{ xs: "center", md: "space-between" }}
                >
                  <SecondaryHeading>GET VERIFIED. GET HIRED.</SecondaryHeading>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        width: "100%",
                        mb: { xs: 2, md: 5 },
                        height: { xs: "60px", md: "40px" },
                        position: "relative",
                        overflowY: "hidden",
                      }}
                    >
                      {stickySliderData.title.map((title) => (
                        <SecondaryHeading
                          key={title.id}
                          style={{ textTransform: "uppercase" }}
                          sx={{
                            color: "primary.white",
                            width: "100%",
                            height: "100%",
                            left: "0",
                            top: `${title.id * 100}%`,
                            position: "absolute",
                            transform: `translateY(-${percentage * 100}%)`,
                            transition: "transform 400ms ease",
                          }}
                        >
                          {title.name}
                        </SecondaryHeading>
                      ))}
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        minHeight: { xs: "200px", md: "150px", xl: "200px" },
                        position: "relative",
                        overflowY: "hidden",
                      }}
                    >
                      {stickySliderData.paragraph.map((title) => (
                        <Box
                          key={title.id}
                          sx={{
                            left: "0",
                            top: `${title.id * 100}%`,
                            width: "100%",
                            minHeight: "100%",
                            transform: `translateY(-${percentage * 100}%)`,
                            transition: "transform 400ms ease",
                            position: "absolute",
                          }}
                        >
                          <ParagraphHeading>{title.subtitle}</ParagraphHeading>
                          <SubtitleHeading
                            sx={{
                              color: "primary.white",
                            }}
                          >
                            {title.paragraph}
                          </SubtitleHeading>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </section>
  );
}

export default StaticScrollSection;
