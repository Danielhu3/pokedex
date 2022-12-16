import React from 'react'

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
    <div>{pokemon.name}</div>
  )
}

export default pokemonId