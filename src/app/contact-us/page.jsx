import React from 'react'
import JoinUsBox from '@/components/pageBasedComponents/ContactUs/JoinUsBox'
import { Box } from '@mui/material'
import { joinUsData } from '@/constants/ContactUs/contactUsPageData'
import ContactBox from '@/components/pageBasedComponents/ContactUs/ContactBox'

function ContactUs() {
  return (
    <Box component="main">
      <JoinUsBox joinUsData={joinUsData} />
      <ContactBox />
    </Box>
  )
}

export default ContactUs
