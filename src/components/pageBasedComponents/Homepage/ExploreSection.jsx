'use client'
import exploreSection from '@/constants/Homepage/exploresection.js'
import exploreSectiontwo from '@/constants/Homepage/exploreSectiontwo.js'
import { Box, Grid, Typography } from '@mui/material'
import Link from '@mui/material/Link'
import { motion } from 'framer-motion'
import React from 'react'
import data from '../../../constants/Homepage/whyrazor.js'
const ExploreSection = () => {
  const headfont = {
    fontSize: 'clamp(50px, 4vw, 64px)',
  }
  // const paraone = {
  //   fontSize: "clamp(15px, 1.4vw, 20px)",
  // };
  const numbersec = {
    fontSize: 'clamp(30px, 2.4vw, 40px)',
  }
  const numbersecdescription = {
    fontSize: 'clamp(10px, 1.1vw, 16px)',
  }
  const firstsec = {
    offscreen: {
      opacity: 0,
      rotate: 0,
      x: -200,
    },
    onscreen: {
      opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rotate: [0, 20, -20, 20, 0],
      x: 0,
      transition: {
        type: 'spring',
        duration: 10,
        ease: 'easeInOut',
        damping: 9.8,
        stiffness: 100,
      },
    },
  }
  const singlesec = {
    offscreen: {
      opacity: 0,
      rotate: 0,
      y: 200,
    },
    onscreen: {
      opacity: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rotate: [0, 20, -20, 20, 0],
      y: 0,
      transition: {
        type: 'spring',
        duration: 10,
        ease: 'easeInOut',
        damping: 9.8,
        stiffness: 100,
      },
    },
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row', lg: 'row' },
        height: { xs: '', md: '100vh', xl: '' },
        pl: '15px',
        pr: '15px',
        justifyContent: {
          xs: 'flex-start',
          md: 'center',
        },
        gap: { md: '60px' },
        alignItems: { xs: 'flex-start', md: 'center', lg: 'center' },
        padding: { md: '60px 50px' },
      }}
    >
      <Grid
        sx={{ alignItems: 'center', justifyContent: 'center' }}
        container
        spacing={10}
      >
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <motion.div transition={{ staggerChildren: 1.9 }}>
              <motion.div
                variants={firstsec}
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: 'primary.purp',
                    fontSize: {
                      xs: '25px',
                      md: 'clamp(50px, 4vw, 64px)',
                      lg: 'clamp(50px, 4vw, 64px)',
                    },
                    textAlign: 'left',
                    margin: '15px 0',
                    width: { xs: '300px', sm: '730px', md: '100%', lg: '100%' },
                  }}
                >
                  {data[0].title}
                </Typography>
              </motion.div>
            </motion.div>
            <motion.div transition={{ staggerChildren: 1.9 }}>
              <motion.div
                variants={firstsec}
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once: true }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '15px',
                      md: 'clamp(15px, 1.4vw, 20px)',
                      lg: 'clamp(15px, 1.4vw, 20px)',
                    },
                    textAlign: 'center',
                    mb: '3%',
                    textAlign: 'justify',
                    width: { xs: '100%' },
                  }}
                >
                  {data[0].description}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '15px',
                      md: 'clamp(15px, 1.4vw, 20px)',
                      lg: 'clamp(15px, 1.4vw, 20px)',
                    },
                    textAlign: 'justify',
                    mb: '4%',
                    width: { xs: '100%' },
                  }}
                >
                  {data[0].descriptiontwo}
                </Typography>
              </motion.div>
            </motion.div>
            <Link
              variant="body1"
              underline="none"
              sx={{
                backgroundColor: 'primary.purp',
                color: 'common.white',
                pt: '10px',
                pb: '10px',
                pl: '30px',
                pr: '30px',
                borderRadius: '200px',
                margin: '15px 0',
                cursor: 'pointer',
              }}
            >
              Explore
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} xl={5}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                height: 'clamp(250px, 19.3vw, 270px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: 2,
              }}
            >
              {exploreSection.map((item) => (
                <motion.div transition={{ staggerChildren: 1.9 }}>
                  <motion.div
                    variants={singlesec}
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        padding: '10px 20px',
                        borderRadius: '10px',
                        backgroundColor: `${item.bg}`,
                      }}
                    >
                      <Typography
                        variant="body1"
                        style={numbersec}
                        sx={{ color: 'primary.purp' }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={numbersecdescription}
                        sx={{}}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </motion.div>
              ))}
            </Box>
            <Box
              sx={{
                height: 'clamp(250px, 19.3vw, 270px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: 'flex-start', lg: 'flex-end' },
                marginLeft: { xs: '15px', md: '30px', lg: '30px' },
                gap: 2,
              }}
            >
              {exploreSectiontwo.map((item) => (
                <motion.div transition={{ staggerChildren: 1.9 }}>
                  <motion.div
                    variants={singlesec}
                    initial={'offscreen'}
                    whileInView={'onscreen'}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        padding: '10px 20px',
                        borderRadius: '10px',
                        backgroundColor: `${item.bg}`,
                      }}
                    >
                      <Typography
                        variant="body1"
                        style={numbersec}
                        sx={{ color: 'primary.purp' }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={numbersecdescription}
                        sx={{}}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
export default ExploreSection
