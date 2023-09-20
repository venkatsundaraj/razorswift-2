"use client";

import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  NativeSelect,
  InputLabel,
  Typography,
} from "@mui/material";
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
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        onChange={handleChange}
        displayEmpty
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: 10,
              padding: (theme) => theme.spacing(2, 2),
              "& .MuiMenuItem-root": {
                padding: 2,
                borderRadius: 6,
                fontSize: "18px",
              },
            },
          },
        }}
        sx={{
          padding: (theme) => theme.spacing(1, 2),
          boxShadow: 2,
          borderRadius: (theme) => theme.spacing(5),
          color: "violetPalette.dark",
          position: "relative",
        }}
      >
        {dropDownData?.map((item) => (
          <MenuItem
            key={item.id}
            name={item.title}
            disableRipple
            value={item.id}
            sx={{
              padding: 2,
              textAlign: "center",
              textAlign: "center",
            }}
          >
            <SecondaryHeading
              style={{ width: "100%" }}
              sx={{
                color: "primaryPalette.dark",
                fontWeight: "600",
                textAlign: "center",
              }}
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
