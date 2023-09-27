'use client'

import React from 'react'
import {
  Card,
  Typography,
  Grid,
  CardHeader,
  CardContent,
  CardActions,
  Stack,
} from '@mui/material'
import ExtraParagraphHeading from '@/components/headingComponents/ExtraParagraphHeading'
import ExtraSubtitleHeading from '@/components/headingComponents/ExtraSubtitleHeading'
import SubtitleHeading from '@/components/headingComponents/SubtitleHeading'
import CenteredFlexComponent from '@/components/globalComponents/CustomContainer/CenteredFlexComponent'

function CareerCardLists({ pathway }) {
  return (
    <Grid key={pathway.id} item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          borderRadius: (theme) => theme.spacing(1),
          boxShadow: 'unset',
          border: '1px solid #7070705e',
        }}
      >
        <ExtraSubtitleHeading
          align="center"
          sx={{
            width: '100%',
            textTransform: 'uppercase',
            backgroundColor: 'violetPalette.light',
            py: 0.5,
          }}
        >
          {pathway.typeOfPathway}
        </ExtraSubtitleHeading>
        <CardContent sx={{ minHeight: '125px' }}>
          <ExtraParagraphHeading sx={{ color: 'pinkPalette.light', mb: 1 }}>
            {`Rs. ${pathway.amount}/-`}
          </ExtraParagraphHeading>
          <ExtraParagraphHeading sx={{ color: 'primaryPalette.black' }}>
            {pathway.pathwayName}
          </ExtraParagraphHeading>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default CareerCardLists
