import React from 'react'
import { Stack, List, ListItem } from '@mui/material'
import NavButton from '../buttonComponents/NavButton'
import Link from 'next/link'
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
          <ListItem key={item.id}>
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
  )
}

export default Navigation
