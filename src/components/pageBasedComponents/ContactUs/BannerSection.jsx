'use client'

import FormSection from '@/components/FormComponents/FormSection'
import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import CustomImage from '@/components/globalComponents/CustomImage/CustomImage'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'
import PrimaryHeading from '@/components/headingComponents/PrimaryHeading'
import { heroSection } from '@/constants/ContactUs/contactUsPageData'
import { Box, Container, Grid, Stack } from '@mui/material'

function BannerSection() {
  return (
    <CustomSection style={{ padding: '82px 0' }}>
      <Container>
        <Box>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} md={6}>
              <PrimaryHeading
                component="h1"
                sx={{
                  color: 'violetPalette.dark',
                }}
              >
                {heroSection.title}
              </PrimaryHeading>
              <ParagraphHeading style={{ color: '#B14384' }}>
                {heroSection.description}
              </ParagraphHeading>
              <FormSection />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack alignItems="center" justifyContent="center">
                <CustomImage
                  alt={heroSection.title}
                  src={heroSection.banner}
                  width="clamp(250px,40vw,500px)"
                  aspectRatio="203/198"
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </CustomSection>
  )
}

export default BannerSection
