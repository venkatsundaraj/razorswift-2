import CareerDropDownBody from '@/components/dropDownComponents/CareerDropDownBody'
import BannerSection from '@/components/pageBasedComponents/Aspirants/BannerSection'
import GetStartedSection from '@/components/pageBasedComponents/Aspirants/GetStartedSection'
import StickyContainerSection from '@/components/pageBasedComponents/Business/StickyContainerSection'
import {
  businessDropDownBodyData,
  readyToStartData,
} from '@/constants/Business/businessPageData'
import { Box } from '@mui/material'
import {
  TickerBoxData,
  heroSectionData,
} from '@/constants/Aspirants/aspirantPageData'

export const metadata = {
  title: 'Business | Razorswift',
}

function Business() {
  return (
    <Box component="main">
      <BannerSection
        TickerBoxData={TickerBoxData}
        heroSectionData={heroSectionData}
      />
      <CareerDropDownBody dropDownBodyData={businessDropDownBodyData} />
      <StickyContainerSection />
      <GetStartedSection readyToStartData={readyToStartData} />
    </Box>
  )
}

export default Business
