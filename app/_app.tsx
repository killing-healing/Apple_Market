import { ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import theme from './styles/theme'
import { CssBaseline } from '@mui/material'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}