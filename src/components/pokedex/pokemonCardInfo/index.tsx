import React from 'react'
import { PokemonCardInfo } from './style'

type Props = {
    children: JSX.Element[];
}
const index = ({children}:Props) => {
  return (
    <PokemonCardInfo>{children}</PokemonCardInfo>
  )
}

export default index