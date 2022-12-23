import React from 'react'
import { PokemonChangeArrow } from './style'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    type: string;
    id:number;
}
const index = ({type, id}:Props) => {
    function changePokemon(){
        if(type === 'previous'){
          return id-1
        }
        return id+1
    }
  return (
    <PokemonChangeArrow type={type}>
      <Link href={`${changePokemon()}`}>
        <Image 
        src='/images/arrow-left.svg'
        width={8}
        height={16}
        alt={`${type}-arrow`}
        />
      </Link>
    </PokemonChangeArrow>
  ) 
}

export default index