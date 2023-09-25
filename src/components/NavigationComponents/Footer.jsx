import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Link } from '@mui/material'
import Image from 'next/image'

import homePageImagePaths from '@/constants/ImagePaths/Homepage/homePageImagePaths'
const footer = () => {
  const fontstyle = {
    color: 'white',
    fontSize: '24px',
  }
  const footerimg = {
    width: '20%',
  }
  return (
    <Box
      sx={{
        backgroundColor: 'primary.footer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: '40px',
        pb: '40px',
        pl: { xs: '15px', lg: '15%' },
        pr: { xs: '15px', lg: '15%' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'common.white',
            fontSize: '64px',

            fontWeight: '600',
            textAlign: 'center',
            lineHeight: '1.2',
            mb: '30px',
            fontSize: {
              xs: '25px',
              md: 'clamp(40px,3.1vw,64px)',
              lg: '64px',
            },
          }}
        >
          New Age Marketplace for
          <br /> Talent Acquisition
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'common.white',

            mb: '30px',
            fontSize: { xs: '17px', lg: '28px' },
          }}
        >
          Grow your expertise and business with us!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row', lg: 'row' },
          alignItems: { xs: 'center', lg: 'flex-start' },
          gap: { xs: '50px', lg: '150px' },
          mb: '50px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box>
            <Image src={homePageImagePaths.footerlogo} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDireaction: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Image style={footerimg} src={homePageImagePaths.twitt} />
            <Image style={footerimg} src={homePageImagePaths.fb} />
            <Image style={footerimg} src={homePageImagePaths.linkedin} />
            <Image style={footerimg} src={homePageImagePaths.insta} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: { xs: '50px', lg: '150px' },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: '3%' }}>
            <Link
              variant="body1"
              underline="none"
              style={fontstyle}
              sx={{
                cursor: 'pointer',
                fontWeight: '600',
                lineHeight: 2,
              }}
            >
              Solutions
            </Link>
            <Link
              variant="body1"
              underline="none"
              style={fontstyle}
              sx={{
                cursor: 'pointer',
                fontWeight: '300',
                lineHeight: 2,
              }}
            >
              Aspirants
            </Link>
            <Link
              variant="body1"
              underline="none"
              style={fontstyle}
              sx={{
                cursor: 'pointer',
                fontWeight: '300',
                lineHeight: 2,
              }}
            >
              Businesses
            </Link>
            <Link
              variant="body1"
              underline="none"
              style={fontstyle}
              sx={{
                cursor: 'pointer',
                fontWeight: '300',
                lineHeight: 2,
              }}
            >
              Partners
            </Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', mt: '3%' }}>
            <Link
              variant="body1"
              underline="none"
              style={fontstyle}
              sx={{
                cursor: 'pointer',
                fontWeight: '600',
                lineHeight: 2,
              }}
            >
              Courses
            </Link>
            <Link
              variant="body1"
              underline="none"
              style={fontstyle}
              sx={{
                cursor: 'pointer',
                fontWeight: '600',
                lineHeight: 2,
              }}
            >
              About
            </Link>
            <Link
              variant="body1"
              underline="none"
              style={fontstyle}
              sx={{
                cursor: 'pointer',
                fontWeight: '600',
                lineHeight: 2,
              }}
            >
              Contact Us
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: '0', md: '160px', lg: '160px' },
          borderTop: '1px solid',
          borderColor: 'common.white',
          width: '100%',
          pt: '3%',
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: 'common.white', fontSize: { xs: '16px', lg: '20px' } }}
        >
          2023 Razorswift. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: '50px' }}>
          <Typography
            variant="body1"
            sx={{ color: 'common.white', fontSize: { xs: '16px', lg: '20px' } }}
          >
            Terms of Services
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'common.white', fontSize: { xs: '16px', lg: '20px' } }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default footer
