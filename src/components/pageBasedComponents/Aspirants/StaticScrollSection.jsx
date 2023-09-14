"use client";

import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { Container, Grid, Stack } from "@mui/material";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";
import CustomSection from "@/components/globalComponents/CustomContainer/CustomSection";
import SecondaryHeading from "@/components/headingComponents/SecondaryHeading";

const numberArray = ["one", "two", "three"];

function StaticScrollSection() {
  const sectionref = React.createRef();

  window.addEventListener("scroll", (e) => {
    console.log(sectionref);
  });
  return (
    <CustomSection
      ref={sectionref}
      sx={{ height: "300vh", position: "relative", overflowX: "unset" }}
    >
      <AppBar
        component="div"
        position="sticky"
        sx={{ backgroundColor: "unset", boxShadow: "unset" }}
      >
        <Toolbar>
          <Container>
            <Grid container spacing={1}>
              <Grid item md={6}></Grid>
              <Grid item md={6} sx={{ height: "100vh" }}>
                <Stack
                  alignItems="center"
                  gap="20px"
                  justifyContent="center"
                  sx={{ height: "100%" }}
                >
                  <SecondaryHeading sx={{ color: "black" }}>
                    Hello World
                  </SecondaryHeading>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </CustomSection>
  );
}

export default StaticScrollSection;
