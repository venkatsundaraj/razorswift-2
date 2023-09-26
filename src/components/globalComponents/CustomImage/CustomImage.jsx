import React from 'react'
import Image from 'next/image'
import { Box } from '@mui/material'

function CustomImage({ width, height, aspectRatio, alt, ...props }) {
  const altTag = alt || 'Razorswift'
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
      <Image
        priority={true}
        alt={altTag}
        objectFit="cover"
        layout="fill"
        sizes="auto"
        {...props}
      />
    </Box>
  )
}

export default CustomImage
