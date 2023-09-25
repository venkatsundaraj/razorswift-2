import React from 'react'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import Link from 'next/link'

const FillButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(0.4, 1.6),
  border: '1px solid #A62973',
  background: 'transparent',
  textTransform: 'inherit',
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
  },
}))

function NavButton({ children, link, ...props }) {
  return <FillButton {...props}>{children}</FillButton>
}

export default NavButton
