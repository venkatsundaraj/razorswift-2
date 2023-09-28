import { Box } from '@mui/material'
import BannerSection from '@/components/pageBasedComponents/Aspirants/BannerSection'
import { TickerBoxData } from '@/constants/Aspirants/aspirantPageData'
import { heroSectionData } from '@/constants/Partners/partnersPageData'
import { partnersDropDownBodyData } from '@/constants/Partners/partnersPageData'
import GetStartedSection from '@/components/pageBasedComponents/Aspirants/GetStartedSection'
import CareerDropDownBody from '@/components/dropDownComponents/CareerDropDownBody'
import { readyToStartData } from '@/constants/Partners/partnersPageData'

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
      <CareerDropDownBody dropDownBodyData={partnersDropDownBodyData} />
      <GetStartedSection readyToStartData={readyToStartData} />
    </Box>
  )
}

export default Partners
