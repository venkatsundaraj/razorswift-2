import BannerSection from '@/components/pageBasedComponents/Aspirants/BannerSection'
import CareerSection from '@/components/pageBasedComponents/Aspirants/CareerSection'
import DropdownSection from '@/components/pageBasedComponents/Aspirants/DropdownSection'
import FastrackSection from '@/components/pageBasedComponents/Aspirants/FastrackSection'
import GetStartedSection from '@/components/pageBasedComponents/Aspirants/GetStartedSection'
import StaticScrollSection from '@/components/pageBasedComponents/Aspirants/StaticScrollSection'
import HeroSection from '@/components/pageBasedComponents/Aspirants/HeroSection'
import {
  TickerBoxData,
  dropDownBodyData,
  dropDownData,
  heroSectionData,
  readyToStartData,
  stickySliderData,
} from '@/constants/Aspirants/aspirantPageData'
import { Box } from '@mui/material'
export const metadata = {
  title: 'Aspirants | Razorswift',
}

function Aspirants() {
  return (
    <Box component="main">
      {/* <BannerSection
        TickerBoxData={TickerBoxData}
        heroSectionData={heroSectionData}
      /> */}
      <HeroSection
        TickerBoxData={TickerBoxData}
        heroSectionData={heroSectionData}
      />
      <StaticScrollSection stickySliderData={stickySliderData} />
      <CareerSection />
      <DropdownSection
        dropDownData={dropDownData}
        dropDownBodyData={dropDownBodyData}
      />

      <FastrackSection />
      <GetStartedSection readyToStartData={readyToStartData} />
    </Box>
  )
}

export default Aspirants
