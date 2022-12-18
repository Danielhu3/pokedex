import React from 'react'
import { PokemonCard } from './style'

type Props = {
    children: JSX.Element[];
    color:string;
}
const index = ({children,color}:Props) => {
  return (
    <PokemonCard color={color}>{children}</PokemonCard>
  )
}

export default index