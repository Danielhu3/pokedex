import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'

import {FavoritesProvider} from '../contexts/favoritesContext'
import {SortListProvider} from '../contexts/sortListContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />

    <FavoritesProvider>
    <SortListProvider>
      <Component {...pageProps} />
    </SortListProvider>
    </FavoritesProvider>
     
    </>)
}
