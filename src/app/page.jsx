import React from 'react'
import './globals.css'
import HeroSection from '../components/pageBasedComponents/Homepage/HeroSection'
import Navbar from '../components/pageBasedComponents/Homepage/navbar'
import DropdownSection from '@/components/pageBasedComponents/Aspirants/DropdownSection'
// import DropdownSection from "../components/pageBasedComponents/Homepage/DropdownSection";
import PathwaySection from '../components/pageBasedComponents/Homepage/PathwaySection'
import ExploreSection from '../components/pageBasedComponents/Homepage/ExploreSection'
import DemoSection from '../components/pageBasedComponents/Homepage/DemoSection'
import Footer from '../components/pageBasedComponents/Homepage/Footer'

import dropDownBodyData from '@/constants/Homepage/dropDownBodyData'
import dropDownData from '@/constants/Homepage/dropDownData'

export const metadata = {
  title: 'Home | Razorswift',
}
//hello
const page = () => {
  return (
    <main className="Topcontainer">
      <HeroSection />
      <DropdownSection
        dropDownData={dropDownData}
        dropDownBodyData={dropDownBodyData}
      />

      <PathwaySection />
      <ExploreSection />
      <DemoSection />
    </main>
  )
}

export default page
