'use client'

import React from 'react'
import { Box } from '@mui/system'
import DropDownWrapper from '@/components/dropDownComponents/DropDownWrapper'
import { Grid } from '@mui/material'
import Image from 'next/image'
import blog from '@/constants/ImagePaths/blog/blog'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
import Link from 'next/link'
const BlogCard = () => {
  const banimg = {
    width: '100%',
    height: 'auto',
  }
  return (
    <DropDownWrapper style={{ width: '100%' }}>
      <Link style={{ textDecoration: 'none' }} href="">
        <Grid container spacing={5}>
          <Grid sx={{}} item lg={4}>
            <Stack
              sx={{
                backgroundColor: '#FFCCC9',
                paddingTop: '40px',
                borderRadius: '20px',
              }}
            >
              <Image alt="bannerImage" style={banimg} src={blog.blogplace2} />
              <Stack sx={{ padding: '10px' }}>
                <Link style={{ textDecoration: 'none', color: '' }} href="">
                  <Typography sx={{ color: 'black', fontSize: '24px' }}>
                    Tips to write a great resume
                  </Typography>
                </Link>
                <Link style={{ textDecoration: 'none', color: '' }} href="">
                  <Typography sx={{ color: 'black', fontSize: '16px' }}>
                    Read the article
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Link>
    </DropDownWrapper>
  )
}

export default BlogCard
