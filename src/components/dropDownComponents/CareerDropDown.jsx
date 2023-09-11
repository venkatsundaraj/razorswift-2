"use client";

import React, { useState } from "react";
import { Select, MenuItem, FormControl, NativeSelect } from "@mui/material";
import SecondaryHeading from "../headingComponents/SecondaryHeading";

function CareerDropDown({ dropDownData, changeHandler }) {
  const [profession, setProfession] = useState("1");
  const handleChange = function (e) {
    setProfession(e.target.value);
    changeHandler(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={profession}
        labelId=""
        id="select"
        onChange={handleChange}
        displayEmpty
        sx={{
          padding: (theme) => theme.spacing(1, 2),
          boxShadow: 2,
          borderRadius: (theme) => theme.spacing(5),
          color: "violetPalette.dark",
        }}
      >
        {dropDownData?.map((item) => (
          <MenuItem
            key={item.id}
            name={item.title}
            disableRipple
            value={item.id}
            sx={{ padding: 1 }}
          >
            <SecondaryHeading
              sx={{ color: "primaryPalette.dark", fontWeight: "600" }}
            >
              {item.title}
            </SecondaryHeading>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CareerDropDown;
