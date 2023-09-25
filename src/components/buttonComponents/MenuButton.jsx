'use client'

import React from 'react'
import { Button, Box, Typography } from '@mui/material'
import CustomImage from '../globalComponents/CustomImage/CustomImage'

function MenuButton({ headerdData, handleClickEvent, open }) {
  const handleClick = function (e) {
    handleClickEvent(e.currentTarget)
  }
  return (
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      sx={{
        transition: 'transform 0.3s ease, opacity 0.1s ease',
        opacity: '1',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&:hover > div h4': {
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          opacity: '0',
        },
        '&:hover > div [data-id="1"]': {
          transform: `translate(100%)`,
        },
        '&:hover > div [data-id="-1"]': {
          transform: `translate(-100%)`,
        },
        '&:hover > div [data-id="-2"]': {
          transform: `translate(-200%)`,
        },
      }}
    >
      {headerdData.forMenu.map((item, i) => (
        <Box>
          {item.text ? (
            <Typography
              data-id={item.id}
              variant="h4"
              sx={{
                fontSize: '36px',
                color: 'violetPalette.dark',
                transition: 'transform 0.3s ease',
              }}
            >
              {item.text}
            </Typography>
          ) : (
            <CustomImage
              data-id={item.id}
              width="28px"
              height="40px"
              src={item.name}
              alt="menu icon"
            />
          )}
        </Box>
      ))}
    </Button>
  )
}

export default MenuButton
