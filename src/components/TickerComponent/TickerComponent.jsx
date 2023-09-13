import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  Box,
  IconButton,
  ListItemText,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { TickerBoxData } from "@/constants/Aspirants/aspirantPageData";
import ParagraphHeading from "../headingComponents/ParagraphHeading";

const TickerBox = styled(List)(({ theme }) => ({
  width: "100%",
  height: "65px",
  backgroundColor: theme.palette.pinkPalette.superLight,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
}));
function TickerComponent() {
  const [value, setValue] = useState(0);
  const [courses, setCourses] = useState(TickerBoxData.slidingValue);

  useEffect(() => {
    const timeOut = setInterval(() => {
      setValue((prev) => {
        return prev >= courses.length - 1 ? 0 : prev + 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [value]);

  return (
    <TickerBox>
      {courses.map((item, itemIndex) => {
        let position = "slide nextSlide";
        if (value === itemIndex) {
          position = "slide activeSlide";
        }

        if (
          itemIndex === value - 1 ||
          (value === 0 && itemIndex === courses.length - 1)
        ) {
          position = "slide lastSlide";
        }
        return (
          <Box
            sx={{
              position: "relative",
              left: "0",
              top: "0",
              position: "relative",
              overflow: "hidden",
              width: "300px",
              backgroundCcolor: "blueviolet",
              height: "100%",
            }}
          >
            <ParagraphHeading
              key={item.id}
              className={position}
              align="center"
              sx={{
                width: "100%",
                left: "50%",
                position: "absolute",
                transform: "translate(-50%,0)",
              }}
              variant="body1"
            >
              {item.title}
            </ParagraphHeading>
          </Box>
        );
      })}
    </TickerBox>
  );
}

export default TickerComponent;
