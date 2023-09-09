"use client";

import React from "react";
import { Paper, Typography, Grid } from "@mui/material";

function CareerCardLists({ pathway }) {
  return (
    <Grid item sm={12} md={4}>
      <Paper variant="outlined">
        <Typography varient="h1">{pathway.typeOfPathway}</Typography>
      </Paper>
    </Grid>
  );
}

export default CareerCardLists;
