import aspirantPageImagePaths from '../ImagePaths/Aspirants/aspirantPageImagePaths'
import businessPageImagePaths from '../ImagePaths/Business/businessPageImagePaths'
import partnersPageImagePaths from '../ImagePaths/Partners/partnersPageImagePaths'

export const heroSectionData = {
  heading: {
    primary: 'Aggregating the human',
    secondary: 'Talent Landscape',
    primaryColor: '#A62973',
    secondaryColor: '#A62973',
  },
  description: 'A dynamic ecosystem where talent and opportunities converge',
  buttonContent: 'Partner with us',
  bannerImage: partnersPageImagePaths.heroSection.banner,
}

export const partnersDropDownBodyData = {
  id: 1,
  title: 'Aggregating the Talent',
  highLightedTitle: 'Partner landscape.',
  backgroundColor: '#F3C3C9',
  buttonData: {
    title: 'Ask for Demo',
    backgroundColor: '#FFFFFF',
    color: '#A62973',
  },
  trophyImage: businessPageImagePaths.dropDownSection.clock,
  description:
    'AI driven automation for Large scale hiring with efficient cost and time',
  image: businessPageImagePaths.dropDownSection.mainImage,
  whatToExpect: [
    {
      id: 1,
      image: aspirantPageImagePaths.dropDownSection.forStudents.icon1,
      title: 'Job ready talent on Day 1',
      description:
        'Manage skill gap and talent shortage with customized pathways.',
    },
    {
      id: 2,
      image: aspirantPageImagePaths.dropDownSection.forStudents.icon2,
      title: 'Unified talent ecosystem',
      description: 'Seamless collaboration with talent partners with pathways.',
    },
    {
      id: 3,
      image: aspirantPageImagePaths.dropDownSection.forStudents.icon3,
      title: 'Standardized profiles',
      description:
        'Standardized assessments and AI enriched profiles with defined pathways',
    },
    {
      id: 4,
      image: aspirantPageImagePaths.dropDownSection.forStudents.icon4,
      title: 'Be a Marquee employer',
      description:
        'Enhanced exposure and increased recognition among aspirants with corporate pathways',
    },
  ],
}

export const readyToStartData = {
  title: 'WHY PARTNER WITH US',
  description: 'Hire at scale with the click of a button',
  mainImage: aspirantPageImagePaths.getStartedSection.questionTag,
  buttonText: 'Partner with us',
  longDescription: `Razorswift Innovations' commitment to innovation and strategic partnerships creates a harmonious ecosystem where businesses and candidates can thrive. By integrating with key players in the talent marketplace, we ensure that the hiring process is efficient, credible, and beneficial for all involved. 
`,
}
