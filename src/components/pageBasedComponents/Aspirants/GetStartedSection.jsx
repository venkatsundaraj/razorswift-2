'use client'

import React from 'react'
import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import ExtraSuperText from '@/components/headingComponents/ExtraSuperText'
import NavButton from '@/components/buttonComponents/NavButton'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'
import SuperText from '@/components/headingComponents/SuperText'
import Image from 'next/image'
import { Container, Grid } from '@mui/material'

function GetStartedSection({ readyToStartData }) {
  return (
    <CustomSection
      sx={{
        minHeight: { xs: '82.5vh', md: '100vh' },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        <SuperText
          sx={{
            color: 'violetPalette.dark',
          }}
        >
          {readyToStartData.title}
        </SuperText>
        <ParagraphHeading>{readyToStartData.description}</ParagraphHeading>
        {readyToStartData.buttonText && (
          <NavButton>{readyToStartData.buttonText}</NavButton>
        )}
        <Image
          alt={readyToStartData.title}
          style={{ width: 'clamp(350px,38vw,650px)', height: 'auto' }}
          src={readyToStartData.mainImage}
        />
        {readyToStartData.longDescription && (
          <Grid container>
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={6}>
              <ParagraphHeading sx={{ textAlign: 'center' }}>
                {readyToStartData.longDescription}
              </ParagraphHeading>
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
          </Grid>
        )}
      </Container>
    </CustomSection>
  )
}

export default GetStartedSection
