import React from 'react'
import  PokemonList  from '../components/pokedex/pokemonList'
import  Main  from '../components/pokedex/main/'
import  Container  from '../components/pokedex/container/'



type PokemonProps = {
  name:string;
  //url:string;
  id: number;
}

type PrimaryTypesProps = {
  [key:string]:string
}

interface Pokedex{
  primaryTypes: PrimaryTypesProps
  result: Array<PokemonProps>
}

export async function getStaticProps() {
    
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    const result = await data.json()

    result.results.forEach((item: PokemonProps, index:number)=>{
      item.id = index +1
    })

    let primaryTypes: PrimaryTypesProps = {}
    
    for(let x = 1; x<=151;x++){
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
      const result = await data.json()
      primaryTypes[result.name as keyof typeof primaryTypes] = result.types[0].type.name

    }
    
    return {
        props: {result: result.results, primaryTypes}
    }
}

const Index = ({result, primaryTypes}:Pokedex) => {
      console.log(result)
     
        return (
          <Container>
          <Main>
          <PokemonList pokemonList={result} primaryTypes={primaryTypes}/>
          </Main>
          </Container>
        )
          
  
}

export default Index
