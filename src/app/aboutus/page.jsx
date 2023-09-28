import React from 'react'
import { Box } from '@mui/material'
import HeroSec from '@/components/pageBasedComponents/aboutus/HeroSec'
import RazorswiftForYou from '@/components/pageBasedComponents/aboutus/RazorswiftForYou'
import RazorSwiftForBusinesses from '@/components/pageBasedComponents/aboutus/RazorSwiftForBusinesses'
import ForBussiness from '@/components/pageBasedComponents/aboutus/ForBussiness'
import OurCommitment from '@/components/pageBasedComponents/aboutus/OurCommitment'
import JoinUsBox from '@/components/pageBasedComponents/ContactUs/JoinUsBox'
import MeettheTeam from '@/components/pageBasedComponents/aboutus/MeettheTeam'
import { joinUsData } from '@/constants/ContactUs/contactUsPageData'
const About = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }} component="main">
      <HeroSec />
      <RazorswiftForYou />
      <RazorSwiftForBusinesses />
      <ForBussiness />
      <MeettheTeam />
      <OurCommitment />
      <JoinUsBox sx={{ mb: 4 }} joinUsData={joinUsData} />
    </Box>
  )
}

export default About
