'use client'

import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import ExtraParagraphHeading from '@/components/headingComponents/ExtraParagraphHeading'
import { Container, Grid, Stack, Box } from '@mui/material'
import React from 'react'

import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import TertiaryHeading from '@/components/headingComponents/TertiaryHeading'

function JoinUsBox({ joinUsData }) {
  return (
    <CustomSection style={{ padding: '40px 0 0' }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'pinkPalette.dark',
            borderRadius: 6,
            padding: 4,
          }}
        >
          <Grid
            spacing={{ xs: 2, md: 1 }}
            container
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={6}>
              <Stack>
                <TertiaryHeading
                  sx={{
                    color: 'primaryPalette.white',
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  {joinUsData.title}
                </TertiaryHeading>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack
                justifyContent={{ xs: 'center', md: 'end' }}
                flexDirection="row"
              >
                <PrimaryFillButton
                  style={{ padding: '4px 16px', borderRadius: '8px' }}
                  sx={{
                    backgroundColor: 'pinkPalette.navLight',
                    color: 'pinkPalette.dark',
                    width: 'fit-content',
                    '&:hover': {
                      backgroundColor: 'pinkPalette.navLight',
                      color: 'pinkPalette.dark',
                    },
                  }}
                >
                  {joinUsData.buttonText}
                </PrimaryFillButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </CustomSection>
  )
}

export default JoinUsBox
