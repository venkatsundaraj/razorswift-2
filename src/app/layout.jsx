import theme from "@/themes/theme";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import "./globals.css";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

export const metadata = {
  title: "Razor Swift",
  description: "Razor Swift",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <StyledEngineProvider>
        <ThemeProvider theme={theme}>
          <body>
            <CssBaseline />
            {children}
          </body>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  );
}
