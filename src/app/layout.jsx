import theme from '@/themes/theme'
import React from 'react'
import { ThemeProvider } from '@mui/material/styles'

import './globals.css'
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import Layout from '@/components/NavigationComponents/Layout'

export const metadata = {
  title: 'Razor Swift',
  description: 'Razor Swift',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <body>
            <Layout>
              <CssBaseline />
              {children}
            </Layout>
          </body>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  )
}
