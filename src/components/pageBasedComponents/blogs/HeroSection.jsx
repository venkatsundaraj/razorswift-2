import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '120px',
      }}
    >
      <Typography
        sx={{ fontSize: '80px', fontWeight: '500', color: '#A62973' }}
      >
        A treasure trove of knowledge
      </Typography>
      <Typography sx={{ fontSize: '24px' }}>
        Knowledge hub, written for igniting growth and fueling ambitions.
      </Typography>
    </Box>
  )
}

export default HeroSection
