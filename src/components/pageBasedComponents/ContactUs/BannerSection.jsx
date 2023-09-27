'use client'

import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import CustomImage from '@/components/globalComponents/CustomImage/CustomImage'
import { heroSection } from '@/constants/ContactUs/contactUsPageData'
import { Box, Container, Grid, Stack } from '@mui/material'

function BannerSection() {
  return (
    <CustomSection>
      <Container>
        <Box>
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <CustomImage
                  alt={heroSection.title}
                  src={heroSection.banner}
                  aspectRatio="133/129"
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
