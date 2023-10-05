'use client'
import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Link from '@mui/material/Link'
import Image from 'next/image'
import homePageImagePaths from '../../../constants/ImagePaths/Homepage/homePageImagePaths'
import demosection from '@/constants/Homepage/demosection'
import { motion } from 'framer-motion'
const DemoSection = () => {
  console.log(demosection)
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
        lineHeight: '1.0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: { xs: '100%', sm: '', md: '' },

        justifyContent: 'center',
        padding: '40px 0',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.div transition={{ staggerChildren: 1.9 }}>
          <motion.div
            variants={singlesec}
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'primary.purp',
                  lineHeight: '1.0',
                  fontSize: {
                    xs: '25px',
                    md: 'clamp(50px, 4vw, 64px)',
                    lg: 'clamp(50px, 4vw, 64px)',
                  },
                }}
              >
                {demosection.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  margin: '20px 0',
                  fontSize: {
                    xs: 'clamp(20px, 1.5vw, 28px)',
                    md: 'clamp(20px, 1.5vw, 28px)',
                    lg: '28px',
                  },
                }}
              >
                {demosection.description}
              </Typography>
            </Box>
          </motion.div>
        </motion.div>

        <Box sx={{ display: 'flex', gap: 5 }}>
          <Box
            sx={{
              border: '2px solid',
              borderColor: 'primary.main',
              borderRadius: '200px',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
              zIndex: '1',
              cursor: 'pointer',
            }}
          >
            <Link
              variant="body1"
              underline="none"
              sx={{
                fontSize: '15px',

                color: 'primary.main',
              }}
            >
              {demosection.button}
            </Link>
          </Box>
        </Box>
        <Box sx={{ marginTop: '-42px' }}>
          <Image
            alt="readytostartnew"
            style={{ width: 'clamp(350px, 54vw, 1000px)', height: 'auto' }}
            src={homePageImagePaths.readytostartnew}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default DemoSection
