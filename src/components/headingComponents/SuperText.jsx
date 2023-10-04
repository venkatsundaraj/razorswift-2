'use client'

import React from 'react'
import { Typography } from '@mui/material'
import styled from '@emotion/styled'

const Heading = styled(Typography)(({ theme }) => ({
  lineHeight: 1.05,
<<<<<<< HEAD
  fontSize: '32px',
  width: 'fit-content',
  [theme.breakpoints.up('md')]: {
    fontSize: '56px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '74px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '112px',
  },
=======
  fontSize: '46px',
  width: 'fit-content',
  [theme.breakpoints.up('md')]: {
    fontSize: '52px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '56px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '72px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '112px',
  },
>>>>>>> business-page
}))

function SuperText({ children, ...props }) {
  return (
    <Heading variant="h2" {...props}>
      {children}
    </Heading>
  )
}

export default SuperText
