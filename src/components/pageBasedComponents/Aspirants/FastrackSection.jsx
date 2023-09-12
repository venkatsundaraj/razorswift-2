"use client";
import CustomSection from "@/components/globalComponents/CustomContainer/CustomSection";
import ViewportBoxComponent from "@/components/globalComponents/CustomContainer/ViewportBoxComponent";
import { Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { fastrackSectionData } from "@/constants/Aspirants/aspirantPageData";
import PrimaryHeading from "@/components/headingComponents/PrimaryHeading";
import FastrackCardLists from "@/components/CardComponents/AspirantCards/FastrackCardLists";
import React from "react";
import ParagraphHeading from "@/components/headingComponents/ParagraphHeading";

function FastrackSection() {
  return (
    <ViewportBoxComponent>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={4}>
            <Stack flexDirection="column" gap={2}>
              <Image
                style={{ width: "100%" }}
                alt={fastrackSectionData.title}
                src={fastrackSectionData.image}
              />
              <PrimaryHeading sx={{ color: "violetPalette.dark" }}>
                {fastrackSectionData.title}
              </PrimaryHeading>
              <ParagraphHeading sx={{ color: "primaryPalette.black" }}>
                {fastrackSectionData.description}
              </ParagraphHeading>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Stack
              sx={{ height: "100%", gap: 2 }}
              alignItems={{ xs: "center", md: "end" }}
              justifyContent="start"
              flexDirection="column"
            >
              <FastrackCardLists
                sx={{ alignSelf: "start", width: "50%" }}
                lists={fastrackSectionData.cardsRight}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Stack
              sx={{ height: "100%", gap: 2 }}
              alignItems={{ xs: "center", md: "start" }}
              justifyContent="end"
              flexDirection="column"
            >
              <FastrackCardLists
                sx={{ alignSelf: "start", width: "50%" }}
                lists={fastrackSectionData.cardsRight}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </ViewportBoxComponent>
  );
}

export default FastrackSection;
