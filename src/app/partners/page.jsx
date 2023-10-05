import BannerSection from '@/components/pageBasedComponents/Aspirants/BannerSection'
import GetStartedSection from '@/components/pageBasedComponents/Aspirants/GetStartedSection'
import BusinessDropDownBody from '@/components/pageBasedComponents/Business/BusinessDropDownBody'
import { TickerBoxData } from '@/constants/Aspirants/aspirantPageData'
import {
  heroSectionData,
  partnersDropDownBodyData,
  readyToStartData,
} from '@/constants/Partners/partnersPageData'
import { Box } from '@mui/material'
import Duplicate from '@/components/dropDownComponents/Duplicate'

export const metadata = {
  title: 'Partners | Razorswift',
}

function Partners() {
  return (
    <Box component="main">
      <BannerSection
        TickerBoxData={TickerBoxData}
        heroSectionData={heroSectionData}
      />
      <BusinessDropDownBody dropDownBodyData={partnersDropDownBodyData} />
      <GetStartedSection readyToStartData={readyToStartData} />
    </Box>
  )
}

export default Partners
