import CustomImage from '@/components/globalComponents/CustomImage/CustomImage'
import { Grid, Box, Container } from '@mui/material'
import React from 'react'
import { bannerSection } from '@/constants/Signup/signupPageData'

function BannerSection() {
  return (
    <Box sx={{ minHeight: '100vh' }} component="section">
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <CustomImage
              src={bannerSection.bannerImage}
              width="100%"
              height="100%"
              aspectRatio="1/1"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default BannerSection
