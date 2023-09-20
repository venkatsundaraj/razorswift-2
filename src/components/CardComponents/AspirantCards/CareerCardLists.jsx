"use client";

import React from "react";
import {
  Card,
  Typography,
  Grid,
  CardHeader,
  CardContent,
  CardActions,
  Stack,
} from "@mui/material";
import ExtraParagraphHeading from "@/components/headingComponents/ExtraParagraphHeading";
import ExtraSubtitleHeading from "@/components/headingComponents/ExtraSubtitleHeading";
import SubtitleHeading from "@/components/headingComponents/SubtitleHeading";
import CenteredFlexComponent from "@/components/globalComponents/CustomContainer/CenteredFlexComponent";

function CareerCardLists({ pathway }) {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Card
        sx={{
          borderRadius: (theme) => theme.spacing(1),
          boxShadow: "unset",
          border: "1px solid #7070705e",
        }}
      >
        <ExtraSubtitleHeading
          align="center"
          sx={{
            width: "100%",
            textTransform: "uppercase",
            backgroundColor: "violetPalette.light",
            py: 0.5,
          }}
        >
          {pathway.typeOfPathway}
        </ExtraSubtitleHeading>
        <CardContent>
          <ExtraParagraphHeading sx={{ color: "primaryPalette.black" }}>
            {pathway.courseName}
          </ExtraParagraphHeading>
          <SubtitleHeading sx={{ mt: 1, minHeight: "172.25px" }}>
            {pathway.description}
          </SubtitleHeading>
          <CenteredFlexComponent
            sx={{ width: "100%", justifyContent: "space-between" }}
          >
            <ExtraSubtitleHeading>{pathway.level}</ExtraSubtitleHeading>
            <ExtraSubtitleHeading>
              {pathway.numberOfLessons}
            </ExtraSubtitleHeading>
          </CenteredFlexComponent>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CareerCardLists;
