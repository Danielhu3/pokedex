import React from 'react'
import { PokemonList } from './style'

type Props = {
    children?:  JSX.Element | JSX.Element[];
}
const index = ({children}:Props) => {
  return (
    <PokemonList>{children}</PokemonList>
  )
}

export default index