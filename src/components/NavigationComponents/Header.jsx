'use client'

import { headerdData } from '@/constants/Aspirants/aspirantPageData'
import {
  AppBar,
  Box,
  Container,
  List,
  ListItem,
  Stack,
  Toolbar,
} from '@mui/material'
import Link from 'next/link'
import MenuButton from '../buttonComponents/MenuButton'
import NavButton from '../buttonComponents/NavButton'
import CustomImage from '../globalComponents/CustomImage/CustomImage'
import Navigation from './Navigation'
function Header() {
  return (
    <Box component="header">
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
    </Box>
  )
}

export default Header
