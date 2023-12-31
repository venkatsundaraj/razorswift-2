import React from "react";
import { Grid, Stack, Box, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ExtraParagraphHeading from "@/components/headingComponents/ExtraParagraphHeading";
import SubtitleHeading from "@/components/headingComponents/SubtitleHeading";

function DiscoverCardLists({ cardData }) {
  return (
    <Container>
      <Grid container spacing={3}>
        {cardData.map((item) => (
          <Grid item key={item.id} xs={12} md={4}>
            <Stack
              flexDirection="column"
              justifyContent="flex-end"
              sx={{
                backgroundColor: "pinkPalette.extraSuperLight",
                borderRadius: 3,
                pt: 5,
              }}
            >
              <Image
                alt={item.title}
                src={item.image}
                style={{ width: "100%", height: "auto" }}
              />
              <Box component="div" sx={{ padding: 2 }}>
                <ExtraParagraphHeading
                  sx={{ color: "primaryPalette.primaryBlack", mb: 1 }}
                >
                  {item.title}
                </ExtraParagraphHeading>
                <SubtitleHeading>
                  <Link
                    style={{ textDecoration: "none", color: "#212121" }}
                    href="/"
                  >
                    Read the artice
                  </Link>
                </SubtitleHeading>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DiscoverCardLists;
