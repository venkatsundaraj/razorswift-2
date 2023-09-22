'use client'

import PrimaryFillButton from '@/components/buttonComponents/PrimaryFillButton'
import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection'
import ExtraParagraphHeading from '@/components/headingComponents/ExtraParagraphHeading'
import { Stack } from '@mui/material'
import { useRouter } from 'next/navigation'

function error({ error, reset }) {
  const router = useRouter()
  return (
    <CustomSection
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ExtraParagraphHeading sx={{ color: 'pinkPalette.light' }}>
        {error.message}
      </ExtraParagraphHeading>
      <Stack
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        gap={5}
      >
        <PrimaryFillButton
          sx={{
            backgroundColor: 'pinkPalette.dark',
            color: 'primaryPalette.white',
            '&:hover': {
              backgroundColor: 'pinkPalette.dark',
              color: 'primaryPalette.white',
            },
          }}
          variant="filled"
        >
          Retry
        </PrimaryFillButton>
        <PrimaryFillButton
          sx={{
            backgroundColor: 'pinkPalette.dark',
            color: 'primaryPalette.white',
            '&:hover': {
              backgroundColor: 'pinkPalette.dark',
              color: 'primaryPalette.white',
            },
          }}
          variant="filled"
          onClick={() => router.back()}
        >
          Go Back
        </PrimaryFillButton>
      </Stack>
    </CustomSection>
  )
}

export default error
