'use client'
import React from 'react'
import { Box } from '@mui/system'
import DropDownWrapper from '@/components/dropDownComponents/DropDownWrapper'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import Image from 'next/image'
import blog from '@/constants/ImagePaths/blog/blog'
const Futuredsection = () => {
  const banimg = {
    width: 'clamp(300px, 36.2vw, 530px)',
    height: 'auto',
  }
  return (
    <DropDownWrapper style={{ width: '100%' }}>
      <Box
        sx={{
          backgroundColor: '#EFBEBE',
          padding: '40px 30px',
          borderRadius: '20px',
        }}
      >
        <Grid alignItems="center" container spacing={1}>
          <Grid item lg={6}>
            <Typography
              sx={{ fontSize: '24px', fontWeight: '600', color: '#A62973' }}
            >
              FEATURED
            </Typography>
            <Box sx={{ margin: '20px 0' }}>
              <Typography
                sx={{
                  fontSize: '36px',
                  fontWeight: '600',
                  paddingBottom: '10px',
                }}
              >
                Tips to write a great resume
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  padding: '10px 0',
                  borderTop: '1px solid #A62973',
                }}
              >
                Writing a great resume is essential for landing your dream job.
                A resume is a summary of your career, showcasing the jobs you’ve
                held and currently hold, the responsibilities you’ve taken on,
                the skills you’ve developed, and the qualities you bring to the
                table as an employee.
              </Typography>
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: '600',
                  textDecoration: 'underline',
                }}
              >
                Read More
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ fontSize: '20px' }}>
                21 September 2023
              </Typography>
              <Typography sx={{ fontSize: '20px' }}>
                Authored By: Sandhya Reddy
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { lg: 'center', xl: 'end' },
              }}
            >
              <Image alt="bannerImage" style={banimg} src={blog.blogplace} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </DropDownWrapper>
  )
}

export default Futuredsection
