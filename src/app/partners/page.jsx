import { Box } from '@mui/material'
import BannerSection from '@/components/pageBasedComponents/Aspirants/BannerSection'
import { TickerBoxData } from '@/constants/Aspirants/aspirantPageData'
import { heroSectionData } from '@/constants/Partners/partnersPageData'

function Partners() {
  return (
    <Box variant="main">
      <BannerSection
        TickerBoxData={TickerBoxData}
        heroSectionData={heroSectionData}
      />
    </Box>
  )
}

export default Partners
