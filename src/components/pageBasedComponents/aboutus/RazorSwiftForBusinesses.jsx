'use client'
import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import razorswiftforbusinesscont from '@/constants/Aboutus/razorswiftforbusinesscont'

import { Container } from '@mui/material'
import razorswiftforbusiness from '@/constants/Aboutus/razorswiftforbusiness'
import razorswiftforbusinesstwo from '@/constants/Aboutus/razorswiftforbusinesstwo'

const RazorSwiftForBusinesses = () => {
  const numbersec = {
    fontSize: 'clamp(30px, 2.4vw, 40px)',
  }
  const numbersecdescription = {
    fontSize: 'clamp(10px, 1.1vw, 16px)',
  }
  return (
    <Container sx={{ marginTop: '100px' }}>
      <Box>
        <Typography
          sx={{ fontSize: '44px', fontWeight: '600', color: 'primary.mainone' }}
        >
          RazorSwift For Businesses
        </Typography>
      </Box>
      <Box sx={{ marginTop: '50px' }}>
        <Grid justifyContent="center" alignItems="center" container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: '600',
                color: 'primary.headaboutus',
                textAlign: 'justify',
              }}
            >
              {razorswiftforbusinesscont[0].title}
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'primary.paragrey',
                textAlign: 'justify',
              }}
            >
              {razorswiftforbusinesscont[0].description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  height: 'clamp(250px, 19.3vw, 270px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  gap: 2,
                }}
              >
                {razorswiftforbusiness.map((item) => (
                  <Box
                    sx={{
                      padding: '10px 20px',
                      borderRadius: '10px',
                      backgroundColor: `${item.bg}`,
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={numbersec}
                      sx={{ color: 'primary.purp' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={numbersecdescription}
                      sx={{}}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  height: { xs: 'clamp(250px, 19.3vw, 270px)', xl: '350px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: { xs: 'flex-start', lg: 'flex-end' },
                  marginLeft: { xs: '15px', md: '30px', lg: '30px' },
                  gap: 2,
                }}
              >
                {razorswiftforbusinesstwo.map((item) => (
                  <Box
                    sx={{
                      padding: '10px 20px',
                      borderRadius: '10px',
                      backgroundColor: `${item.bg}`,
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={numbersec}
                      sx={{ color: 'primary.purp' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={numbersecdescription}
                      sx={{}}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default RazorSwiftForBusinesses
