import React from 'react'
import { Menu, MenuItem, Stack, Box } from '@mui/material'
import ParagraphHeading from '../headingComponents/ParagraphHeading'
import Link from 'next/link'

function MenuItems({ headerdData }) {
  return (
    <>
      {headerdData.navInItems.map((title, i) => (
        <Box>
          <MenuItem
            key={title.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'pinkPalette.dark',
              borderBottom: `${
                i === headerdData.navInItems.length - 1 || i === 0
                  ? ''
                  : '1px solid #A62973'
              }`,
              '&:hover': {
                backgroundColor: 'unset',
              },
            }}
          >
            <ParagraphHeading
              style={{ fontWeight: '600' }}
              sx={{ color: 'pinkPalette.dark' }}
            >
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                href={`${title.link || ''}`}
              >
                {title.name}
              </Link>
            </ParagraphHeading>
          </MenuItem>
          {title.subItems && (
            <Stack
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={1.2}
              sx={{ py: 1.2, borderBottom: '1px solid #A62973' }}
            >
              {title.subItems.map((item) => (
                <ParagraphHeading
                  key={item.id}
                  sx={{ color: 'pinkPalette.dark' }}
                >
                  <Link
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    href={`${item.link || ''}`}
                  >
                    {item.name}
                  </Link>
                </ParagraphHeading>
              ))}
            </Stack>
          )}
        </Box>
      ))}
    </>
  )
}

export default MenuItems
