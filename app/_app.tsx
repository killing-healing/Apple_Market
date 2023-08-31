import { ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import theme from './styles/theme'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import store from './redux/store'

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../mocks");
}

export default async function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

