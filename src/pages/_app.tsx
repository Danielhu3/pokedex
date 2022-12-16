import type { AppProps } from 'next/app'
import MainComponent from '../components/mainComponent'
import GlobalStyle from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
    <MainComponent>
      <Component {...pageProps} />
    </MainComponent>
    </>)
}
