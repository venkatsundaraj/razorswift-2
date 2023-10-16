import BannerSection from '@/components/pageBasedComponents/Aspirants/BannerSection';
import GetStartedSection from '@/components/pageBasedComponents/Aspirants/GetStartedSection';
import BusinessDropDownBody from '@/components/pageBasedComponents/Business/BusinessDropDownBody';
import StickyContainerSection from '@/components/pageBasedComponents/Business/StickyContainerSection';
import { TickerBoxData } from '@/constants/Aspirants/aspirantPageData';
import {
  businessDropDownBodyData,
  heroSectionData,
  readyToStartData,
} from '@/constants/Business/businessPageData';
import { Box } from '@mui/material';
import WhyRazorswiftSection from '@/components/pageBasedComponents/Business/WhyRazorswiftSection';
import HeroSection from '@/components/pageBasedComponents/Aspirants/HeroSection';

export const metadata = {
  title: 'Business | Razorswift',
};

function Business() {
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
      <BusinessDropDownBody dropDownBodyData={businessDropDownBodyData} />
      <StickyContainerSection />
      <WhyRazorswiftSection />
      <GetStartedSection readyToStartData={readyToStartData} />
    </Box>
  );
}

export default Business;
