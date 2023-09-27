'use client'

import TickerComponent from '@/components/TickerComponent/TickerComponent'
import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import CustomImage from '@/components/globalComponents/CustomImage/CustomImage'
import ExtraSuperText from '@/components/headingComponents/ExtraSuperText'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'
import SuperText from '@/components/headingComponents/SuperText'

import { Box, Grid, Stack } from '@mui/material'

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
          pt: { xs: 0, md: 16, xl: 20 },
          pl: { xs: 0, md: 8, xl: 12 },
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={8} md={6}>
            <Stack
              flexDirection="column"
              justifyContent="space-between"
              alignItems={{ xs: 'center', md: 'start' }}
            >
              <SuperText
                sx={{
                  textAlign: 'center',
                  color: heroSectionData.heading.secondaryColor,
                }}
              >
                {heroSectionData.heading.primary}
              </SuperText>
              <ExtraSuperText
                sx={{
                  textAlign: 'center',
                  color: heroSectionData.heading.primaryColor,
                }}
              >
                {heroSectionData.heading.secondary}
              </ExtraSuperText>
              <ParagraphHeading
                sx={{ textAlign: { xs: 'center', md: 'left', width: '75%' } }}
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
        <Stack
          sx={{
            width: { xs: '400px', sm: '750px', md: '800px', xl: '1200px' },
            aspectRatio: '1245/504',
            position: 'absolute',
            right: { xs: '50%', md: '0' },
            bottom: '0',
            transform: { xs: 'translateX(50%)', md: 'translateX(0)' },
          }}
        >
          <CustomImage
            width="100%"
            height="100%"
            alt={heroSectionData.heading.primary}
            src={heroSectionData.bannerImage}
          />
        </Stack>
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
