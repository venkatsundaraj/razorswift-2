'use client'

import React from 'react'
import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import ExtraSuperText from '@/components/headingComponents/ExtraSuperText'
import NavButton from '@/components/buttonComponents/NavButton'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'
import SuperText from '@/components/headingComponents/SuperText'
import Image from 'next/image'
import { Container, Grid } from '@mui/material'
import CustomImage from '@/components/globalComponents/CustomImage/CustomImage'
import TertiaryHeading from '@/components/headingComponents/TertiaryHeading'

function GetStartedSection({ readyToStartData }) {
  return (
    <CustomSection
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: {
          xs: '82.5vh',
          md: '100vh',
        },
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
        <TertiaryHeading style={{ fontWeight: '500', textAlign: 'center' }}>
          {readyToStartData.description}
        </TertiaryHeading>
        {readyToStartData.longDescription && (
          <Grid container>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={10}>
              <ParagraphHeading sx={{ textAlign: 'center' }}>
                {readyToStartData.longDescription}
              </ParagraphHeading>
            </Grid>
            <Grid item xs={12} sm={1}></Grid>
          </Grid>
        )}
        {readyToStartData.buttonText && (
          <NavButton href="/contact-us">
            {readyToStartData.buttonText}
          </NavButton>
        )}
        {readyToStartData.qrImage && (
          <CustomImage
            alt={readyToStartData.title}
            width={{ xs: '100px' }}
            aspectRatio="1/1"
            src={readyToStartData.qrImage}
          />
        )}

        <CustomImage
          alt={readyToStartData.title}
          width={{
            xs: '300px',
            sm: '500px',
            md: '500px',
            lg: '560px',
            xl: '700px',
          }}
          aspectRatio="1/0.85"
          src={readyToStartData.mainImage}
        />
      </Container>
    </CustomSection>
  )
}

export default GetStartedSection
