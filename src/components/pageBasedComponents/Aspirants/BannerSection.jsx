'use client'

import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import SuperText from '@/components/headingComponents/SuperText'
import { ApiError } from '@/lib/exceptions/ApiError'
import { TickerBoxData } from '@/constants/Aspirants/aspirantPageData'
import TickerComponent from '@/components/TickerComponent/TickerComponent'
import { Container, Grid, Box } from '@mui/material'
import { heroSectionData } from '@/constants/Aspirants/aspirantPageData'
import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import ExtraSuperText from '@/components/headingComponents/ExtraSuperText'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'

function BannerSection() {
  return (
    <CustomSection style={{ padding: '0px', height: '100vh' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 65px)',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'top',
          pt: { xs: 4, md: 8, xl: 12 },
          pl: { xs: 4, md: 8, xl: 12 },
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} lg={4}>
            <SuperText
              style={{ width: '100%' }}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                color: 'pinkPalette.light',
              }}
            >
              {heroSectionData.heading.primary}
            </SuperText>
            <ExtraSuperText
              style={{ width: '100%' }}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                color: 'pinkPalette.dark',
              }}
            >
              {heroSectionData.heading.secondary}
            </ExtraSuperText>
            <ParagraphHeading>{heroSectionData.description}</ParagraphHeading>
            <PrimaryFillButton
              varient="contained"
              link="/about"
              sx={{
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
          </Grid>
        </Grid>
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
