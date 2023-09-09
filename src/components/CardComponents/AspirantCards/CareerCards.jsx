"use client";

import React from "react";
import { Grid } from "@mui/material";
import CareerCardLists from "./CareerCardLists";

function CareerCards({ pathways }) {
  return (
    <Grid container spacing={3}>
      {pathways.map((pathway) => (
        <CareerCardLists pathway={pathway} />
      ))}
    </Grid>
  );
}

export default CareerCards;
