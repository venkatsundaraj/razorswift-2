import React from 'react'
import PrimaryHeading from '../headingComponents/PrimaryHeading'
import { Box } from '@mui/material'
import { SwipeableDrawer } from '@mui/material'

function SwipeAbleDrawer() {
  return (
    <SwipeableDrawer
      anchor="top"
      open={open}
      disableSwipeToOpen={false}
      PaperProps={{
        sx: {
          height: { xs: '100vh', md: '50px' },
          backgroundColor: 'yellow',
          transition: 'all 300ms linear',
          top: 0,
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <PrimaryHeading>Hello world</PrimaryHeading>
    </SwipeableDrawer>
  )
}

export default SwipeAbleDrawer
