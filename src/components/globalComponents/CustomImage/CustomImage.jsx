import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'

function CustomImage({ width, height, aspectRatio, ...props }) {
  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio: aspectRatio,
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
