"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import CustomSection from "@/components/globalComponents/CustomContainer/CustomSection";
import CareerDropDown from "@/components/dropDownComponents/CareerDropDown";

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
      <CareerDropDown
        changeHandler={onChangeHandler}
        dropDownData={dropDownData}
      />
      <CareerDropDownBody dropDownBodyData={dropDownBody} />
    </CustomSection>
  );
}

export default DropdownSection;
