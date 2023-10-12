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
import blogscarddata from '@/constants/Blogs/blogscarddata'
import { Container } from '@mui/material'
const BlogCard = () => {
  const banimg = {
    width: '100%',
    height: 'auto',
  }
  return (
    <DropDownWrapper style={{ width: '100%' }}>
      <Container>
        <Grid container spacing={5}>
          {blogscarddata.map((item, index) => (
            <Grid sx={{}} item xs={12} lg={4}>
              <Stack
                sx={{
                  backgroundColor: '#FFCCC9',
                  paddingTop: '40px',
                  borderRadius: '20px',
                  height: '100%',
                }}
              >
                <Image alt="bannerImage" style={banimg} src={item.img} />
                <Stack sx={{ padding: '10px' }}>
                  <Typography sx={{ fontSize: '24px', paddingBottom: '20px' }}>
                    <Link
                      style={{ textDecoration: 'none', color: 'black' }}
                      href=""
                    >
                      {item.title}
                    </Link>
                  </Typography>
                  <Typography sx={{ fontSize: '16px' }}>
                    <Link
                      style={{ textDecoration: 'none', color: 'black' }}
                      href=""
                    >
                      {item.article}
                    </Link>
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </DropDownWrapper>
  )
}

export default BlogCard
