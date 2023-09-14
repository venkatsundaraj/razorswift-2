"use client";
import React from "react";
import { Stack } from "@mui/system";
import { motion } from "framer-motion";
const ScrollSection = () => {
  return (
    <Stack>
      <motion.div>
        <motion.div>
          <Stack sx={{ padding: "15px" }}>
            <Stack>
              <Stack sx={{ backgroundColor: "yellow", height: "893px" }}>
                asdadas
              </Stack>
              <Stack sx={{ backgroundColor: "red", height: "893px" }}>
                asdadas
              </Stack>
              <Stack sx={{ backgroundColor: "blue", height: "893px" }}>
                asdadas
              </Stack>
              <Stack sx={{ backgroundColor: "green", height: "893px" }}>
                asdadas
              </Stack>
            </Stack>
          </Stack>
        </motion.div>
      </motion.div>
    </Stack>
  );
};

export default ScrollSection;
