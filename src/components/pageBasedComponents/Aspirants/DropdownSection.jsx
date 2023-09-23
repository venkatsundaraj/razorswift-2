"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomSection from "@/components/globalComponents/CustomContainer/CustomSection";
import CareerDropDown from "@/components/dropDownComponents/CareerDropDown";
import { motion } from "framer-motion";
import CareerDropDownBody from "@/components/dropDownComponents/CareerDropDownBody";

function DropdownSection({ dropDownBodyData, dropDownData }) {
  const [dropDownBody, setDropDownBody] = useState(dropDownBodyData[0]);
  const onChangeHandler = function (value) {
    const selectedBody = dropDownBodyData.find(
      (item) => item.id.toString() === value.toString()
    );
    setDropDownBody(selectedBody);
    console.log(value, dropDownBody);
  };
  const firstsec = {
    offscreen: {
      opacity: 0,
      rotate: 0,
      y: 200,
    },
    onscreen: {
      opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rotate: [0, 20, -20, 20, 0],
      y: 0,
      transition: {
        type: "spring",
        duration: 2,
        ease: "easeInOut",
        damping: 9.8,
        stiffness: 100,
      },
    },
  };
  return (
    <CustomSection
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        minHeight: "100vh",
        justifyContent: "start",
      }}
    >
      <motion.div transition={{ staggerChildren: 1.9 }}>
        <motion.div
          variants={firstsec}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true }}
        >
          <CareerDropDown
            changeHandler={onChangeHandler}
            dropDownData={dropDownData}
          />
        </motion.div>
      </motion.div>
      <CareerDropDownBody dropDownBodyData={dropDownBody} />
    </CustomSection>
  );
}

export default DropdownSection;
