import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import React from 'react'

function SubmitButton({ children, ...props }) {
  return <PrimaryFillButton {...props}>{children}</PrimaryFillButton>
}

export default SubmitButton
