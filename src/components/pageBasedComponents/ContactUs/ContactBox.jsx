'use client'

import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import { Container, Grid, Stack, Box } from '@mui/material'
import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import React from 'react'
import { contactData } from '@/constants/ContactUs/contactUsPageData'
import TertiaryHeading from '@/components/headingComponents/TertiaryHeading'
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading'
import SubtitleHeading from '@/components/headingComponents/SubtitleHeading'
import Link from 'next/link'
import ExtraParagraphHeading from '@/components/headingComponents/ExtraParagraphHeading'
import SecondaryHeading from '@/components/headingComponents/SecondaryHeading'

function ContactBox() {
  return (
    <CustomSection style={{ padding: '40px 0 ' }}>
      <Container>
        <Box
          sx={{
            backgroundColor: '#F1C5E5',
            borderRadius: 6,
            padding: 4,
          }}
        >
          <Grid container spacing={{ xs: 2, md: 1 }} alignItems="center">
            <Grid item xs={12} sm={7}>
              <Stack>
                <TertiaryHeading
                  sx={{
                    color: 'primaryPalette.black',
                    mb: 2,
                    textAlign: { xs: 'center', sm: 'left' },
                  }}
                >
                  {contactData.title}
                </TertiaryHeading>
                <ParagraphHeading sx={{ color: 'primaryPalette.black' }}>
                  {contactData.description}
                </ParagraphHeading>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Stack justifyContent="space-around" flexDirection="row">
                <Box>
                  <SubtitleHeading
                    style={{ fontWeight: '600', color: 'primaryPalette.black' }}
                  >
                    EMAIL
                  </SubtitleHeading>

                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    href={`mailto:${contactData.emailId}`}
                  >
                    {contactData.emailId}
                  </Link>
                </Box>
                <Box>
                  <SubtitleHeading
                    style={{ fontWeight: '600', color: 'primaryPalette.black' }}
                  >
                    PHONE NUMBER
                  </SubtitleHeading>
                  <Link
                    style={{ textDecoration: 'none', color: 'black' }}
                    href={`tel:${contactData.mobile}`}
                  >
                    {contactData.mobile}
                  </Link>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </CustomSection>
  )
}

export default ContactBox
