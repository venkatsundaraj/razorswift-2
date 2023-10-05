import React from 'react'
import { Box } from '@mui/system'
import HeroSection from '@/components/pageBasedComponents/blogs/HeroSection'
import Futuredsection from '@/components/pageBasedComponents/blogs/Futuredsection'
import BlogCard from '@/components/pageBasedComponents/blogs/BlogCard'
const Blogs = () => {
  return (
    <Box component="main" class="Topcontainer">
      <HeroSection />
      <Futuredsection />
      <BlogCard />
    </Box>
  )
}

export default Blogs
