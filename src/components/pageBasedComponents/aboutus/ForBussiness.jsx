import React from 'react'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Container } from '@mui/material'
import forbusinesses from '@/constants/Aboutus/Forbusinesses'
import Aboutusimagepathway from '@/constants/ImagePaths/Aboutus/Aboutusimagepathway'
import Image from 'next/image'
const ForBussiness = () => {
  return (
    <Container sx={{ marginTop: '100px' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: '600',
              color: 'primary.headaboutus',
              textAlign: 'justify',
            }}
          >
            {forbusinesses[0].title}
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: '20px' }}>
        <Grid alignItems="center" container spacing={6}>
          <Grid item xs={12} md={6}>
            <Image
              alt="statisticimage"
              style={{ width: '100%' }}
              src={Aboutusimagepathway.statisticimage}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'primary.paragrey',
              }}
            >
              {forbusinesses[0].description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default ForBussiness
