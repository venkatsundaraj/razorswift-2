import { Grid, Container, Stack, Typography, Box, Paper } from "@mui/material";
import Image from "next/image";
import React from "react";
import SecondaryHeading from "../headingComponents/SecondaryHeading";
import ParagraphHeading from "../headingComponents/ParagraphHeading";
import ExtraParagraphHeading from "../headingComponents/ExtraParagraphHeading";
import theme from "@/themes/theme";
import SubtitleHeading from "../headingComponents/SubtitleHeading";

function CareerDropDownBody({ dropDownBodyData }) {
  return (
    <Box
      sx={{
        backgroundColor: `${dropDownBodyData.backgroundColor}`,
        width: "100%",
      }}
    >
      <Container
        sx={{
          padding: (theme) => theme.spacing(5, 0, 0, 0),
        }}
      >
        <Grid
          sx={{ padding: (theme) => theme.spacing(0, 2) }}
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={6}>
            <Stack direction="column" alignItems="start" gap={2}>
              <Image
                src={dropDownBodyData.trophyImage}
                alt={dropDownBodyData.title}
                style={{
                  width: "65%",
                  objectFit: "cover",
                  height: "auto",
                }}
              />
              <SecondaryHeading sx={{ color: "primaryPalette.primaryBlack" }}>
                {dropDownBodyData.title}
              </SecondaryHeading>
              <Typography
                variant="h3"
                sx={{
                  color: "primaryPalette.primaryBlack",
                  fontSize: "clamp(34px,4vw,48px)",
                  color: "primaryPalette.primaryBlack",
                  fontWeight: "600",
                }}
              >
                {dropDownBodyData.highLightedTitle}
              </Typography>
              <SubtitleHeading
                sx={{
                  color: "primaryPalette.primaryBlack",
                }}
              >
                {dropDownBodyData.description}
              </SubtitleHeading>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Stack>
              <Image
                alt={dropDownBodyData.title}
                src={dropDownBodyData.image}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "auto",
                }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          px={2}
          py={5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={3}>
            <ExtraParagraphHeading
              style={{ fontWeight: 500 }}
              sx={{ flexBasis: "clamp(40px,15vw,250px)", mb: { xs: 2, md: 0 } }}
            >
              What to expect ?
            </ExtraParagraphHeading>
          </Grid>
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              position: "relative",
              "&::before": {
                content: `""`,
                position: "absolute",
                width: "2px",
                left: "-80px",
                top: "50%",
                transform: "translate(0,-50%)",
                height: { sm: "0%", lg: "50%" },
                backgroundColor: "violetPalette.dark",
              },
            }}
          >
            <Grid container spacing={2}>
              {dropDownBodyData.whatToExpect.map((item) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <Paper
                    sx={{
                      borderRadius: 2,
                      display: "flex",
                      minHeight: "100%",
                      alignItems: "center",
                      padding: 2,
                      gap: 2,
                      justifyContent: { xs: "start", md: "center" },
                    }}
                  >
                    <Image
                      alt={item.title}
                      src={item.image}
                      style={{ width: "clamp(60px, 6vw, 80px)" }}
                    />
                    <Stack
                      flexDirection="column"
                      alignItems="start"
                      justifyContent="center"
                      gap="8px"
                    >
                      <ExtraParagraphHeading sx={{ fontWeight: "600" }}>
                        {item.title}
                      </ExtraParagraphHeading>
                      <SubtitleHeading>{item.description}</SubtitleHeading>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CareerDropDownBody;
