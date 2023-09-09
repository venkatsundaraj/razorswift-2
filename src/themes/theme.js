"use client";

import { createTheme } from "@mui/material/styles";

import { Urbanist, Bebas_Neue } from "next/font/google";

const urbanist = Urbanist({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme({
  // You can also customize other palette colors here if needed
  palette: {
    primary: {
      main: "#A62973",
      mainone: "#672376",
      secbg: "#FCD3D1",
      thirdsec: "#EE5064",
      purp: "#672376",
      pinkcol: "#DAB0E3",
      dropdown: "#DCBDE3",
      accord: "#E5BED5",
      drophire: "#DCA9C7",
      droppart: "#F3C3C9",
      pinktwo: "#EBC8DD",
      redpink: "#FFCCC9",
      redpinktwo: "#FFE3E3",
      redpinkthree: "#EDD8F2",
    },
    pinkPalette: {
      dark: "#A62973",
      light: "#EE5064",
      superLight: "#FCD3D1",
    },
    primaryPalette: {
      white: "#FFFFFF",
      black: "#3A3A3A",
    },
    violetPalette: {
      dark: "#672376",
      light: "#DAB0E3",
      superLight: "#EDD8F2",
    },
  },

  //Font family
  typography: {
    // fontFamily: [bebasNeue.style.fontFamily, urbanist.style.fontFamily],
    h6: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h5: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h4: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h3: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h2: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    h1: {
      fontFamily: bebasNeue.style.fontFamily,
    },
    body1: {
      fontFamily: urbanist.style.fontFamily,
    },
    subtitle1: {
      fontFamily: urbanist.style.fontFamily,
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none",
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "span",
          subtitle2: "span",
          body1: "p",
          body2: "span",
        },
      },
      styleOverrides: {},
    },

    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: urbanist.style.fontFamily,
        },
      },
    },
  },
  // Breakpoints
  breakpoints: {
    xs: 0,
    sm: 767,
    md: 992,
    lg: 1200,
    xl: 1536,
  },
});

export default theme;
