import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const ViewPortBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "hidden",
  backgroundColor: theme.palette.primaryPalette.white,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

function ViewportBoxComponent({ children, ...props }) {
  return (
    <ViewPortBox component="section" {...props}>
      {children}
    </ViewPortBox>
  );
}

export default ViewportBoxComponent;
