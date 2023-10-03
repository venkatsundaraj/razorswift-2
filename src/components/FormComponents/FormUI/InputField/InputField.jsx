import styled from '@emotion/styled'
import { Stack, TextField } from '@mui/material'
import { FormControl } from '@mui/material'
import React from 'react'
import SubtitleHeading from '@/components/headingComponents/SubtitleHeading'

const Input = styled(TextField)(({ theme }) => ({}))

function InputField({ error, ...props }) {
  return (
    <FormControl fullWidth>
      <Stack flexDirection="column" gap={1}>
        <Input
          {...props}
          InputProps={{
            sx: {
              color: `${error ? 'pinkPalette.light' : 'primaryColor.black'}`,
            },
          }}
        />
        {error && (
          <SubtitleHeading sx={{ color: 'pinkPalette.light' }}>
            {error}
          </SubtitleHeading>
        )}
      </Stack>
    </FormControl>
  )
}

export default InputField
