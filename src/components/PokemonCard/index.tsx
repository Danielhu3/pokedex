import React from 'react'
import { PokemonCard } from './style'

type Props = {
    children: JSX.Element[];
}
const index = ({children}:Props) => {
  return (
    <PokemonCard>{children}</PokemonCard>
  )
}

export default index