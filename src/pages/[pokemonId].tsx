import React from 'react'
import  Bottom  from '../components/pokemon/bottom/'
import  Container  from '../components/pokemon/container/'
import { Info } from '../components/pokemon/info/style'
import  Top  from '../components/pokemon/top/'
import Link from 'next/link'
import Image from 'next/image'
import { InfoName } from '../components/pokemon/infoName/style'
import { InfoNumber } from '../components/pokemon/infoNumber/style'

export async function getStaticProps(context:any) {
    const {params} = context
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`)
    
    const pokemon = await data.json()

    return {
      props: {pokemon}
    }
    
}

export async function getStaticPaths(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151') 
    const data = await response.json()

    const paths = data.results.map((pokemon:{name:string})=>{
        return{
          params:{
            pokemonId: `${pokemon.name}`
          }
        }
      })
    
      return {paths, fallback:false}
    
}
const pokemonId = ({pokemon}:any) => {
    console.log(pokemon)
  return (
    <Container>
      <Top>

        <Info>

          <Link href={'/'}>
            <Image
            src='/images/back.svg'
            width={24}
            height={32}
            alt='back'
            />
          </Link>

          <InfoName />
          <InfoNumber />
        </Info>

        <Image 
        src='/images/back.svg'
        width={200}
        height={200}
        alt={pokemon.name}
        />

      </Top>
      <Bottom></Bottom>
    </Container>
  )
}

export default pokemonId