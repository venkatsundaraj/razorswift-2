import React from "react";
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const TickerBox = styled(List)(({ theme }) => ({
  width: "100%",
  height: "65px",
  backgroundColor: theme.palette.pinkPalette.superLight,
}));
function TickerComponent() {
  return (
    <TickerBox>
      <Typography align="center" variant="h3">
        TICKER
      </Typography>
    </TickerBox>
  );
}

export default TickerComponent;
