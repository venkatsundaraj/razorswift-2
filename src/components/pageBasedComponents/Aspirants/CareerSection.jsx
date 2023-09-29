'use client';

import React from 'react';
import { Box, Container, Stack, Button } from '@mui/material';
import PrimaryHeading from '@/components/headingComponents/PrimaryHeading';
import CustomSection from '@/components/globalComponents/CustomContainer/CustomSection';
import { CareerData } from '@/constants/Aspirants/aspirantPageData';
import CenteredFlexComponent from '@/components/globalComponents/CustomContainer/CenteredFlexComponent';
import ParagraphHeading from '@/components/headingComponents/ParagraphHeading';
import CareerCards from '@/components/CardComponents/AspirantCards/CareerCards';

function CareerSection() {
  return (
    <CustomSection>
      <Container>
        <PrimaryHeading sx={{ color: 'violetPalette.dark' }}>
          {CareerData.heading}
        </PrimaryHeading>
        <Stack
          sx={(theme) => ({
            width: '100%',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            flexDirection: 'column',
            margin: theme.spacing(2, 0, 4, 0),
            [theme.breakpoints.up('md')]: {
              flexDirection: 'row',
              alignItems: 'center',
            },
          })}
        >
          <ParagraphHeading
            sx={{ color: 'primaryPalette.black', flexBasis: '80%' }}
          >
            {CareerData.description}
          </ParagraphHeading>
          <Button
            nowrap="true"
            size="large"
            sx={{
              backgroundColor: 'transparent',
              color: 'primaryPalette.black',
              textTransform: 'capitalize',
              textDecoration: 'underline',
              display: 'none',
              '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            Apply Filters
          </Button>
        </Stack>
        <CareerCards pathways={CareerData.pathways} />
      </Container>
    </CustomSection>
  );
}

export default CareerSection;
