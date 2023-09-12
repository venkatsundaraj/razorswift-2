"use client";
import React from "react";
import CustomSection from "@/components/globalComponents/CustomContainer/CustomSection";
import PrimaryHeading from "@/components/headingComponents/PrimaryHeading";
import { discoverSectionData } from "@/constants/Aspirants/aspirantPageData";
import PrimaryFillButton from "@/components/buttonComponents/PrimaryFillButton";
import DiscoverCardLists from "@/components/CardComponents/AspirantCards/DiscoverCardLists";

function DiscoverSection() {
  return (
    <CustomSection
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        minHeight: "100vh",
        justifyContent: "start",
        color: "violetPalette.dark",
      }}
    >
      <PrimaryHeading>{discoverSectionData.title}</PrimaryHeading>
      <PrimaryFillButton
        href="/hello"
        variant="contained"
        sx={{
          backgroundColor: (theme) => theme.palette.violetPalette.dark,
          color: (theme) => theme.palette.primaryPalette.white,
          mb: 8,
          "&:hover": {
            backgroundColor: (theme) => theme.palette.violetPalette.dark,
          },
        }}
      >
        {discoverSectionData.buttonTitle}
      </PrimaryFillButton>
      <DiscoverCardLists cardData={discoverSectionData.cards} />
    </CustomSection>
  );
}

export default DiscoverSection;
