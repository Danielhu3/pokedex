import React from 'react'
import { PokemonChangeArrow } from './style'
import Image from 'next/image'

type Props = {
    type: string;
}
const index = ({type}:Props) => {
    function changePokemon(){
        console.log(type)
    }
  return (
    <PokemonChangeArrow onClick={()=> changePokemon()} type={type}>
      <Image 
      src='/images/arrow-left.svg'
      width={8}
      height={16}
      alt={`${type}-arrow`}
      />
    </PokemonChangeArrow>
  ) 
}

export default index