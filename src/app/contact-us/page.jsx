import React from 'react'
import JoinUsBox from '@/components/pageBasedComponents/ContactUs/JoinUsBox'
import { Box } from '@mui/material'
import { joinUsData } from '@/constants/ContactUs/contactUsPageData'
import ContactBox from '@/components/pageBasedComponents/ContactUs/ContactBox'
import BannerSection from '@/components/pageBasedComponents/ContactUs/BannerSection'

function ContactUs() {
  return (
    <Box component="main">
      <BannerSection />
      <JoinUsBox joinUsData={joinUsData} />
    </Box>
  )
}

export default ContactUs
