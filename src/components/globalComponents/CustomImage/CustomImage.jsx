import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

function CustomImage({ ...props }) {
  return (
    <Box
      sx={{ position: "relative", width: `100px`, height: "100px" }}
      component="div"
    >
      <Image fill={true} {...props} />
    </Box>
  );
}

export default CustomImage;
