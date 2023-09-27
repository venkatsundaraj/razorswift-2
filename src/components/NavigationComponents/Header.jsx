'use client'

import { headerdData } from '@/constants/Aspirants/aspirantPageData'
import {
  AppBar,
  useScrollTrigger,
  Box,
  Container,
  Slide,
  Stack,
  Toolbar,
} from '@mui/material'
import CustomImage from '../globalComponents/CustomImage/CustomImage'
import Navigation from './Navigation'
const HideOnScroll = function ({ window, children }) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })
  console.log(trigger)
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
function Header(props) {
  return (
    <Box component="header">
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            backgroundColor: 'primaryPalette.white',
            boxShadow: 'unset',
            zIndex: '1200',
          }}
        >
          <Toolbar>
            <Container>
              <Stack
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
              >
                <CustomImage
                  src={headerdData.logo}
                  alt="Razorswift-logo"
                  width="clamp(160px,10vw,244px)"
                  aspectRatio="2/1"
                />
                <Navigation headerdData={headerdData} />
              </Stack>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  )
}

export default Header
