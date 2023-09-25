import aspirantPageImagePaths from '../ImagePaths/Aspirants/aspirantPageImagePaths'
import businessPageImagePaths from '../ImagePaths/Business/businessPageImagePaths'

export const heroSectionData = {
  heading: {
    primary: 'Empowering Talent.',
    secondary: 'Enabling Growth.',
    primaryColor: '#A62973',
    secondaryColor: '#A62973',
  },
  description: 'A dynamic ecosystem where talent and opportunities converge',
  buttonContent: 'Ask for Demo',
  bannerImage: businessPageImagePaths.heroSection.banner,
}

export const businessDropDownBodyData = {
  id: 1,
  title: 'Experience Swift',
  highLightedTitle: 'Hiring.',
  backgroundColor: '#DCA9C7',
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
  title: 'READY TO GET STARTED?',
  description: 'Hire at scale with the click of a button',
  mainImage: aspirantPageImagePaths.getStartedSection.questionTag,
}

export const quickTalentDiscoveryData = {
  pathways: [
    {
      id: 1,
      mainTitle: 'Razorswift PATHWAYS - QUICK TALENT DISCOVERY',
      mainDescription:
        'Pathways allow you to standardize assessments and training, to gain access to a large pool of verified profiles that match your unique requirement.',
      title: 'Company crafted pathways',
      description:
        'Tailor make your pathway to get interested aspirants to self curate their competencies to align with your skill requirements and cultural fit.',
      backgroundColor: '#FFE1E1',
      image: businessPageImagePaths.pathwayIcons.icon1,
      mainImage: businessPageImagePaths.dropDownSection.mainImage,
    },
    {
      id: 2,
      title: 'Company crafted pathways',
      description:
        'Tailor make your pathway to get interested aspirants to self curate their competencies to align with your skill requirements and cultural fit.',
      backgroundColor: '#EDD8F2',
      image: businessPageImagePaths.pathwayIcons.icon2,
      mainImage: businessPageImagePaths.dropDownSection.mainImage,
    },
    {
      id: 3,
      title: 'Company crafted pathways',
      description:
        'Tailor make your pathway to get interested aspirants to self curate their competencies to align with your skill requirements and cultural fit.',
      backgroundColor: '#FFE1E1',
      image: businessPageImagePaths.pathwayIcons.icon3,
      mainImage: businessPageImagePaths.dropDownSection.mainImage,
    },
    {
      id: 4,
      title: 'Company crafted pathways',
      description:
        'Tailor make your pathway to get interested aspirants to self curate their competencies to align with your skill requirements and cultural fit.',
      backgroundColor: '#EDD8F2',
      image: businessPageImagePaths.pathwayIcons.icon4,
      mainImage: businessPageImagePaths.dropDownSection.mainImage,
    },
  ],
}
