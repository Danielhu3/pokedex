import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'

import {FavoritesProvider} from '../contexts/favoritesContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />

    <FavoritesProvider>
      <Component {...pageProps} />
    </FavoritesProvider>
     
    </>)
}
