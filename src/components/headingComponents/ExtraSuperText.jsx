'use client'

import React from 'react'
import { Typography } from '@mui/material'
import styled from '@emotion/styled'

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  lineHeight: 1.05,
  width: 'fit-content',
  [theme.breakpoints.up('md')]: {
    fontSize: '68px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '100px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '140px',
  },
}))

function ExtraSuperText({ children, ...props }) {
  return (
    <Heading variant="h1" {...props}>
      {children}
    </Heading>
  )
}

export default ExtraSuperText
