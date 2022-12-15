import type { AppProps } from 'next/app'
import MainComponent from '../components/mainComponent'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainComponent>
      <Component {...pageProps} />
    </MainComponent>)
}
