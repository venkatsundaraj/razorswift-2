import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import React from 'react'

function SubmitButton({ children, ...props }) {
  return (
    <PrimaryFillButton
      sx={{
        backgroundColor: '#EE5064',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#EE5064',
          color: '#fff',
        },
      }}
      {...props}
    >
      {children}
    </PrimaryFillButton>
  )
}

export default SubmitButton
