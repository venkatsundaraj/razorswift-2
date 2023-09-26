import React from 'react'
import { Menu, MenuItem } from '@mui/material'

function MenuItems({ handleCloseItems, open }) {
  const handleClose = function (entry) {
    handleCloseItems(entry)
  }
  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={open}
      onClose={handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem>Hello</MenuItem>
      <MenuItem>Hello</MenuItem>
    </Menu>
  )
}

export default MenuItems
