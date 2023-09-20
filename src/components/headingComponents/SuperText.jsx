"use client";

import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Heading = styled(Typography)(({ theme }) => ({
  lineHeight: 1.05,
  fontSize: "32px",
  width: "fit-content",
  [theme.breakpoints.up("md")]: {
    fontSize: "56px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "78px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "112px",
  },
}));

function SuperText({ children, ...props }) {
  return (
    <Heading variant="h2" {...props}>
      {children}
    </Heading>
  );
}

export default SuperText;
