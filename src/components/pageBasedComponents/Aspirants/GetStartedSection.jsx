"use client";

import React from "react";
import CustomSection from "@/components/globalComponents/CustomContainer/CustomSection";
import ExtraSuperText from "@/components/headingComponents/ExtraSuperText";

import ParagraphHeading from "@/components/headingComponents/ParagraphHeading";
import SuperText from "@/components/headingComponents/SuperText";
import Image from "next/image";

function GetStartedSection({ readyToStartData }) {
  return (
    <CustomSection
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <SuperText
        sx={{
          color: "violetPalette.dark",
        }}
      >
        {readyToStartData.title}
      </SuperText>
      <ParagraphHeading>{readyToStartData.description}</ParagraphHeading>
      <Image
        alt={readyToStartData.title}
        style={{ width: "clamp(350px,38vw,650px)", height: "auto" }}
        src={readyToStartData.mainImage}
      />
    </CustomSection>
  );
}

export default GetStartedSection;
