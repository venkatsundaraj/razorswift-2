import React from 'react'
import { Stack, List, ListItem } from '@mui/material'
import NavButton from '../buttonComponents/NavButton'
import Link from 'next/link'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import MenuButton from '../buttonComponents/MenuButton'

function Navigation({ headerdData }) {
  return (
    <Stack alignItems="center" justifyContent="center" flexDirection="row">
      <List
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {headerdData.navItems.map((item) => (
          <ListItem key={item.id} sx={{ px: 1 }}>
            <Link href={`${item.link}`}>
              <NavButton
                sx={{ color: 'primaryPalette.black' }}
                startIcon={<ExitToAppIcon />}
              >
                {item.name}
              </NavButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <MenuButton headerdData={headerdData} />
    </Stack>
  )
}

export default Navigation
