import React from 'react'
import { Box } from '@mui/system'
import HeroSection from '@/components/pageBasedComponents/blogs/HeroSection'
import Futuredsection from '@/components/pageBasedComponents/blogs/Futuredsection'
const Blogs = () => {
  return (
    <Box component="main" class="Topcontainer">
      <HeroSection />
      <Futuredsection />
    </Box>
  )
}

export default Blogs
