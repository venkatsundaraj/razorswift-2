import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import herosec from '@/constants/Aboutus/herosec'
const HeroSec = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box sx={{ marginTop: '50px' }}>
        <Typography sx={{ fontSize: '24px' }}>{herosec[0].title}</Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: '72px', color: 'primary.main' }}
        >
          {herosec[0].description}
        </Typography>
      </Box>
    </Box>
  )
}

export default HeroSec
