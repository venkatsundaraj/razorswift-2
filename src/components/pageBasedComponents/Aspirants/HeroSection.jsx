"use client";

import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import PrimaryHeading from "@/components/headingComponents/PrimaryHeading";
import ExtraSuperText from "@/components/headingComponents/ExtraSuperText";
import SuperText from "@/components/headingComponents/SuperText";
import ViewportBoxComponent from "@/components/globalComponents/CustomContainer/ViewportBoxComponent";
import Image from "next/image";
import aspirantPageImagePaths from "@/constants/ImagePaths/Aspirants/aspirantPageImagePaths";
import CenteredFlexComponent from "@/components/globalComponents/CustomContainer/CenteredFlexComponent";
import ParagraphHeading from "@/components/headingComponents/ParagraphHeading";
import { heroSectionData } from "@/constants/Aspirants/aspirantPageData";
import PrimaryFillButton from "@/components/buttonComponents/PrimaryFillButton";
import Link from "next/link";
import { TickerBoxData } from "@/constants/Aspirants/aspirantPageData";
import TickerComponent from "@/components/TickerComponent/TickerComponent";
import CustomSection from "@/components/globalComponents/CustomContainer/CustomSection";

function HeroSection() {
  return (
    <CustomSection style={{ padding: "0px" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 65px)",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CenteredFlexComponent sx={{ gap: "10px" }}>
          <Image
            src={aspirantPageImagePaths.homePage.icon2}
            style={{
              width: "clamp(60px,12vw,140px)",
              height: "auto",
              objectFit: "cover",
            }}
            alt="Unlock your potential"
          />
          <SuperText
            component="h2"
            sx={{
              textTransform: "uppercase",
              color: (theme) => theme.palette.pinkPalette.light,
            }}
          >
            {heroSectionData.heading.primary}
          </SuperText>
        </CenteredFlexComponent>
        <CenteredFlexComponent sx={{ gap: "10px", justifyContent: "center" }}>
          <ExtraSuperText component="h1" sx={{ textTransform: "uppercase" }}>
            {heroSectionData.heading.secondary}
          </ExtraSuperText>
          <Image
            width={130}
            src={aspirantPageImagePaths.homePage.icon1}
            style={{
              width: "clamp(60px,12vw,140px)",
              height: "auto",
              objectFit: "cover",
            }}
            alt="Unlock your potential"
          />
        </CenteredFlexComponent>
        <ParagraphHeading
          align="center"
          sx={{ maxWidth: "400px", color: "primaryPalette.black" }}
        >
          {heroSectionData.description}
        </ParagraphHeading>
        <Link href="#">
          <PrimaryFillButton
            varient="contained"
            link="/about"
            sx={{
              marginTop: "18px",
              backgroundColor: (theme) => theme.palette.pinkPalette.dark,
              color: (theme) => theme.palette.primaryPalette.white,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.pinkPalette.dark,
              },
            }}
          >
            {heroSectionData.buttonContent}
          </PrimaryFillButton>
        </Link>
      </Container>
      <TickerComponent
        data={TickerBoxData}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      />
    </CustomSection>
  );
}

export default HeroSection;
