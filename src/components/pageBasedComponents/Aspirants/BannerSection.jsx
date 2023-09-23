'use client'

import TickerComponent from '@/components/TickerComponent/TickerComponent'
import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import ExtraSuperText from '@/components/headingComponents/ExtraSuperText'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'
import SuperText from '@/components/headingComponents/SuperText'

import { Box, Grid, Stack } from '@mui/material'
import Image from 'next/image'

function BannerSection({ heroSectionData, TickerBoxData }) {
  return (
    <CustomSection style={{ padding: '0px', height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          height: 'calc(100vh - 65px)',
          width: '100%',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'start' },
          pt: { xs: 0, md: 8, xl: 12 },
          pl: { xs: 0, md: 8, xl: 12 },
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={6} md={4}>
            <Stack
              flexDirection="column"
              justifyContent="space-between"
              alignItems={{ xs: 'center', md: 'start' }}
            >
              <SuperText
                sx={{
                  color: 'pinkPalette.light',
                }}
              >
                {heroSectionData.heading.primary}
              </SuperText>
              <ExtraSuperText
                sx={{
                  color: 'pinkPalette.dark',
                }}
              >
                {heroSectionData.heading.secondary}
              </ExtraSuperText>
              <ParagraphHeading
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
              >
                {heroSectionData.description}
              </ParagraphHeading>

              <PrimaryFillButton
                varient="contained"
                link="/about"
                sx={{
                  width: 'max-content',
                  marginTop: '18px',
                  backgroundColor: (theme) => theme.palette.pinkPalette.dark,
                  color: (theme) => theme.palette.primaryPalette.white,
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.pinkPalette.dark,
                  },
                }}
              >
                {heroSectionData.buttonContent}
              </PrimaryFillButton>
            </Stack>
          </Grid>
        </Grid>

        <Image
          priority={false}
          style={{
            width: 'clamp(370px, 63.5vw, 1210px)',
            height: 'auto',
            position: 'absolute',
            right: '0',
            bottom: '0',
          }}
          alt={heroSectionData.heading.primary}
          src={heroSectionData.bannerImage}
        />
      </Box>
      <TickerComponent
        variant="div"
        data={TickerBoxData}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </CustomSection>
  )
}

export default BannerSection
