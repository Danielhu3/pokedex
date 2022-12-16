import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
    <Navbar />
      <Component {...pageProps} />
    </>)
}
