import React from 'react'
import { Box, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Image from 'next/image'
import Aboutusimagepathway from '@/constants/ImagePaths/Aboutus/Aboutusimagepathway'
import { Container } from '@mui/material'
import razorswiftforyou from '@/constants/Aboutus/razorswiftforyou'
const RazorswiftForYou = () => {
  const imgprop = {
    width: '100%',
    height: 'auto',
  }
  return (
    <Container sx={{ marginTop: '100px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Image style={imgprop} src={Aboutusimagepathway.puzzle} />
        </Grid>
        <Grid
          sx={{ display: 'flex', alignItems: 'center' }}
          item
          xs={12}
          md={6}
        >
          <Box>
            <Typography sx={{ fontSize: '24px' }}>
              {razorswiftforyou[0].title}
            </Typography>
            <Typography
              sx={{
                fontSize: '35px',
                fontWeight: '600',
                color: 'primary.thirdsec',
                lineHeight: '1',
              }}
            >
              {razorswiftforyou[0].description}
            </Typography>
            <Typography sx={{ fontSize: '20px' }}>
              {razorswiftforyou[0].descriptiontwo}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default RazorswiftForYou
