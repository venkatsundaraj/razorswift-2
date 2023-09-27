import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import { FormControl } from '@mui/material'
import React from 'react'

const Input = styled(TextField)(({ theme }) => ({}))

function InputField({ ...props }) {
  return (
    <FormControl fullWidth>
      <Input
        required
        {...props}
        InputProps={{
          sx: {
            color: 'primaryColor.black',
          },
        }}
      />
    </FormControl>
  )
}

export default InputField
