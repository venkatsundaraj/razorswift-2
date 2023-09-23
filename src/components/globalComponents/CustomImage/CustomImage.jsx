import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'

function CustomImage({ width, height, top, left, right, bottom, ...props }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: width,
        height: `${height ? height : 'auto'}`,
      }}
      component="div"
    >
      <Image layout="fill" {...props} />
    </Box>
  )
}

export default CustomImage
