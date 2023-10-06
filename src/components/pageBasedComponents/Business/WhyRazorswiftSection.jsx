'use client'

import React from 'react'
import DropDownWrapper from '@/components/dropDownComponents/DropDownWrapper'
import { Grid, Stack } from '@mui/material'
import PrimaryHeading from '@/components/headingComponents/PrimaryHeading'
import { whyRazorswiftSection } from '@/constants/Business/businessPageData'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'
import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import Link from 'next/link'
import FastrackCardLists from '@/components/CardComponents/AspirantCards/FastrackCardLists'

function WhyRazorswiftSection() {
  return (
    <DropDownWrapper component="section">
      <Grid
        container
        spacing="1"
        sx={{
          borderRadius: 4,
          py: { xs: 4, md: 5 },
          px: { xs: 0, md: 3 },
          backgroundColor: '#D9B6E1',
        }}
      >
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
              sx={{
                backgroundColor: 'violetPalette.dark',
                mt: { xs: 0, md: 2 },
                color: 'primaryPalette.white',
              }}
            >
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                href={`${whyRazorswiftSection.button.link}`}
              >
                {whyRazorswiftSection.button.title}
              </Link>
            </PrimaryFillButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={1}
            alignItems="center"
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
                  sx={{ alignSelf: 'start', width: '50%' }}
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
                  sx={{ alignSelf: 'start', width: '50%' }}
                  lists={whyRazorswiftSection.cardsRight}
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </DropDownWrapper>
  )
}

export default WhyRazorswiftSection
