'use client'

import React from 'react'
import DropDownWrapper from '@/components/dropDownComponents/DropDownWrapper'
import { Grid, Stack, Box } from '@mui/material'
import PrimaryHeading from '@/components/headingComponents/PrimaryHeading'
import { whyRazorswiftSection } from '@/constants/Business/businessPageData'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'
import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import Link from 'next/link'
import FastrackCardLists from '@/components/CardComponents/AspirantCards/FastrackCardLists'

function WhyRazorswiftSection() {
  return (
    <DropDownWrapper component="section">
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#D9B6E1',
          borderRadius: 4,

          py: { xs: 4, md: 5 },
          px: { xs: 2, md: 3 },
        }}
      >
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={12} md={6}>
            <Stack
              flexDirection="column"
              alignItems="start"
              justifyContent="space-between"
              gap={2}
            >
              <PrimaryHeading sx={{ color: 'violetPalette.dark' }}>
                {whyRazorswiftSection.title}
              </PrimaryHeading>
              <ParagraphHeading>
                {whyRazorswiftSection.description}
              </ParagraphHeading>
              <PrimaryFillButton
                href={`${whyRazorswiftSection.button.link}`}
                sx={{
                  backgroundColor: 'violetPalette.dark',
                  mt: { xs: 0, md: 2 },
                  color: 'primaryPalette.white',
                }}
              >
                {whyRazorswiftSection.button.title}
              </PrimaryFillButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              alignItems="center"
              justifyContent="center"
              sx={{ height: '100%', mt: { xs: 2, md: 0 } }}
            >
              <Grid
                item
                xs={12}
                md={6}
                sx={{ height: { xs: 'fit-content', md: '80%' } }}
              >
                <Stack
                  sx={{ height: '100%', gap: 2 }}
                  alignItems={{ xs: 'center', md: 'end' }}
                  justifyContent="start"
                  flexDirection="column"
                >
                  <FastrackCardLists
                    sx={{ alignSelf: 'start' }}
                    lists={whyRazorswiftSection.cardsLeft}
                  />
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ height: { xs: 'fit-content', md: '80%' } }}
              >
                <Stack
                  sx={{ height: '100%', gap: 2 }}
                  alignItems={{ xs: 'center', md: 'start' }}
                  justifyContent="end"
                  flexDirection="column"
                >
                  <FastrackCardLists
                    sx={{ alignSelf: 'start' }}
                    lists={whyRazorswiftSection.cardsRight}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </DropDownWrapper>
  )
}

export default WhyRazorswiftSection

{
  /* <Grid item xs={12} md={6}>
  <Grid
    container
    spacing={{ xs: 0, md: 2 }}
    alignItems="center"
    justifyContent="center"
    sx={{ height: '100%', mt: { xs: 2, md: 0 } }}
  >
    <Grid item xs={12} md={6} sx={{ height: { xs: 'fit-content', md: '80%' } }}>
      <Stack
        sx={{ height: '100%', gap: 2 }}
        alignItems={{ xs: 'center', md: 'end' }}
        justifyContent="start"
        flexDirection="column"
      >
        <FastrackCardLists
          sx={{ alignSelf: 'start' }}
          lists={whyRazorswiftSection.cardsLeft}
        />
      </Stack>
    </Grid>
    <Grid item xs={12} md={6} sx={{ height: { xs: 'fit-content', md: '80%' } }}>
      <Stack
        sx={{ height: '100%', gap: 2 }}
        alignItems={{ xs: 'center', md: 'start' }}
        justifyContent="end"
        flexDirection="column"
      >
        <FastrackCardLists
          sx={{ alignSelf: 'start' }}
          lists={whyRazorswiftSection.cardsRight}
        />
      </Stack>
    </Grid>
  </Grid>
</Grid>; */
}
