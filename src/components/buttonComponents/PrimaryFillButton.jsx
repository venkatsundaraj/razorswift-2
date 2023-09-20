import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const FillButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1, 3),
  textTransform: "inherit",
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "20px",
  },
}));

function PrimaryFillButton({ children, link, ...props }) {
  return <FillButton {...props}>{children}</FillButton>;
}

export default PrimaryFillButton;
