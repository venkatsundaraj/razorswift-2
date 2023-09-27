'use client'
import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import Image from 'next/image'
import meettheteam from '@/constants/Aboutus/meettheteam'
import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import Aboutusimagepathway from '@/constants/ImagePaths/Aboutus/Aboutusimagepathway'
import teamperson from '@/constants/Aboutus/teamperson'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
const person = () => {
  const { slug } = useParams()
  console.log(slug)

  const secstyle = {
    textDecoration: 'none',
  }
  const popup = useRef()
  const pagecontainer = useRef()

  const content = teamperson.find((item) => item.slug === slug)
  console.log(content)
  if (!content) {
    return null
  }
  return (
    <Container
      sx={{ overflowX: 'hidden', marginTop: '100px' }}
      ref={pagecontainer}
      className="topcontainer"
      id="topcontainer"
    >
      <Container>
        <Grid sx={{ width: '100%' }} container alignItems="center">
          <Grid item xs={12} lg={2}>
            {/* <Image
              style={{
                cursor: 'pointer',
                height: 'auto',
                width: '50px',
              }}
              src={Aboutusimagepathway.close}
            /> */}
          </Grid>
          <Grid justifyContent="center" item xs={12} lg={8}>
            <Typography sx={{ fontSize: '44px', textAlign: 'center' }}>
              {content.person[0].title}
            </Typography>
            <Typography sx={{ fontSize: '36px', textAlign: 'center' }}>
              {content.person[0].designation}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image src={Aboutusimagepathway.linkedin} />
            </Box>
          </Grid>
          <Grid item xs={12} lg={2}></Grid>
        </Grid>

        <Grid
          sx={{
            padding: '20px 0 20px 0',
            borderTop: '1px solid #707070',
            borderBottom: '1px solid #707070',
            marginTop: '80px',
          }}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Grid sx={{ borderRight: '1px solid #707070' }} item xs={12} lg={6}>
            <Stack
              flexDirection="row"
              justifyContent="center"
              sx={{ width: '100%' }}
            >
              <Image
                style={{
                  height: 'auto',
                  width: '90%',
                }}
                src={Aboutusimagepathway.teamdemo}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack sx={{ paddingLeft: '25px' }}>
              <Typography sx={{ fontSize: '24px' }}>
                {content.person[0].content}
              </Typography>
              <Typography sx={{ fontSize: '20px' }}>
                {content.person[0].description}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default person
