import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import PrimaryHeading from "@/components/headingComponents/PrimaryHeading";
import ExtraParagraphHeading from "@/components/headingComponents/ExtraParagraphHeading";
import ParagraphHeading from "@/components/headingComponents/ParagraphHeading";

function FastrackCardLists({ lists, ...props }) {
  return (
    <>
      {lists.map((item) => (
        <Box
          id={item.id}
          sx={{
            backgroundColor: `${item.bgColor}`,
            padding: 1,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "violetPalette.dark",
              fontSize: "clamp(24px,3vw,32px)",
              fontWeight: "500",
            }}
          >
            {item.percentage}
          </Typography>
          <ParagraphHeading>{item.description}</ParagraphHeading>
        </Box>
      ))}
    </>
  );
}

export default FastrackCardLists;
