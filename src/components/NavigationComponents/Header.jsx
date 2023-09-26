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
import { useState } from 'react'
import MenuButton from '../buttonComponents/MenuButton'
import NavButton from '../buttonComponents/NavButton'
import MenuItems from './MenuItems'
import CustomImage from '../globalComponents/CustomImage/CustomImage'

function Header() {
  return (
    <Box component="header">
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'transparent',
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
              <Stack
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
              >
                <List
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {headerdData.navItems.map((item) => (
                    <ListItem>
                      <Link href={`${item.link}`}>
                        <NavButton sx={{ color: 'primaryPalette.black' }}>
                          {item.name}
                        </NavButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>

                <MenuButton headerdData={headerdData} />
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
