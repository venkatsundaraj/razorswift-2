import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";
import homePageImagePaths from "../../../constants/ImagePaths/Homepage/homePageImagePaths";
const PythonPathway = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        backgroundColor: "primary.secbg",
        p: "10px",
        height: "50px",
        overflowY: "hidden",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "14px", lg: "28px" },
        }}
      >
        Check out the newly added{" "}
        <Box component="span" sx={{ fontWeight: "600" }}>
          Python pathway
        </Box>
      </Typography>
      <Box sx={{ marginTop: "10px" }} component="span">
        <Image src={homePageImagePaths.secsecpyth} />
      </Box>
    </Box>
  );
};

export default PythonPathway;
