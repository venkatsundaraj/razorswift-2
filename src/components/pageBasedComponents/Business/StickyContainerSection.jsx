"use client";

import CustomSection from "@/components/globalComponents/CustomContainer/CustomSection";
import PrimaryHeading from "@/components/headingComponents/PrimaryHeading";
import React from "react";
import { Box } from "@mui/material";
import { useRef } from "react";

const backgroundColor = ["#ebfafe", "#ffbcf0", "#fdffad", "#ebfafe", "#ffbcf0"];

const sectionRef = useRef(null);

function StickyContainerSection() {
  return (
    <CustomSection
      style={{ overflowX: "unset" }}
      sx={{
        px: 5,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {backgroundColor.map((item, i) => {
        return (
          <div
            ref={sectionRef}
            key={i}
            style={{
              display: "flex",
              alignItems: "top",
              justifyContent: "center",
              width: "100%",
              height: "80vh",
              borderRadius: 4,
              backgroundColor: `${item}`,
              position: "sticky",
              top: `${i * 25}px`,
              padding: 1,
            }}
          >
            <PrimaryHeading>Hello World</PrimaryHeading>
          </div>
        );
      })}
    </CustomSection>
  );
}

export default StickyContainerSection;
