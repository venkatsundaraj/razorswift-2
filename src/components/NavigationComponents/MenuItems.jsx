import React from 'react'
import { Menu, MenuItem, Stack, Box } from '@mui/material'
import ParagraphHeading from '../headingComponents/ParagraphHeading'
import Link from 'next/link'
import PrimaryFillButton from '../buttonComponents/PrimaryFillButton'

function MenuItems({ headerdData, handleClose }) {
  return (
    <>
      {headerdData.navInItems.map((title, i) => (
        <Box key={title.id}>
          <MenuItem
            onClick={handleClose}
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
              sx={{
                color: 'pinkPalette.dark',
                '&:hover': {
                  textDecoration: `${
                    title.name === 'Solutions' ? 'none' : 'underline'
                  }`,
                },
              }}
            >
              {
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: `${
                      title.name === 'Solutions' ? 'default' : 'pointer'
                    }`,
                  }}
                  href={`${title.link || ''}`}
                >
                  {title.name}
                </Link>
              }
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
                  sx={{
                    color: 'pinkPalette.dark',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                  onClick={handleClose}
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
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ marginTop: 1 }}
      >
        {headerdData.actionButtons.map((item) => (
          <PrimaryFillButton
            style={{ padding: '4px 20px', borderRadius: '16px' }}
            sx={{
              backgroundColor: 'pinkPalette.dark',
              color: 'primaryPalette.white',
              '&:hover': {
                backgroundColor: 'pinkPalette.dark',
              },
            }}
            key={item.id}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '16px',
              }}
              href={item.link}
            >
              {item.name}
            </Link>
          </PrimaryFillButton>
        ))}
      </Stack>
    </>
  )
}

export default MenuItems
