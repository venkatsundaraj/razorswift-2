import React from 'react'
import InputField from './FormUI/InputField/InputField'
import SubmitButton from './FormUI/SubmitButton/SubmitButton'
import { Stack, Box } from '@mui/material'

function Form() {
  return (
    <Box sx={{ padding: '16px 0' }}>
      <form>
        <Stack flexDirection="column" gap={3} alignItems="start">
          <InputField
            id="standard-basic"
            type="text"
            label="Full Name"
            variant="standard"
          />
          <InputField
            id="standard-basic"
            type="email"
            label="Email Id"
            variant="standard"
          />
          <InputField
            id="standard-basic"
            type="number"
            label="Mobile Number"
            variant="standard"
          />

          <InputField
            id="filled-multiline-static"
            type="text"
            label="Your Message"
            multiline
            rows={4}
            variant="standard"
          />

          <SubmitButton>Submit</SubmitButton>
        </Stack>
      </form>
    </Box>
  )
}

export default Form
