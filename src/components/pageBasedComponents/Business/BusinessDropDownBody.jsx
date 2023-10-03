'use client'

import React from 'react'
import { Box } from '@mui/material'
import CareerDropDownBody from '@/components/dropDownComponents/CareerDropDownBody'
import DropDownWrapper from '@/components/dropDownComponents/DropDownWrapper'

function BusinessDropDownBody({ dropDownBodyData }) {
  return (
    <DropDownWrapper component="section">
      <CareerDropDownBody
        style={{ width: '100%', padding: '24px 0' }}
        dropDownBodyData={dropDownBodyData}
      />
    </DropDownWrapper>
  )
}

export default BusinessDropDownBody
