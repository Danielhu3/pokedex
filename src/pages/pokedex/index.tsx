import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  PokemonCard  from '../../components/PokemonCard/'
import useTypeColor from '../../hooks/useTypeColor'
export async function getStaticProps() {
    
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    const result = await data.json()

    result.results.forEach((item, index:number)=>{
      item.id = index +1
    })
   



    return {
        props: {result: result.results}
    }
}

const Index = ({result}:any) => {
      // i notice that if i don't get all pokemons data on getStaticProps, i wouldn't be able to make the search function in the future
     const [limit, setLimit] = React.useState(20)

     function raiseLimit(){
      if(limit === 140){
        setLimit((limit)=> limit +11)
      }

      else{
        setLimit((limit)=> limit + 20)
      }
     }
  
     
  return (
    
    <>
     
    <button onClick={limit <151 ? ()=> raiseLimit() : ()=>{}}>ADICIONAR</button>
    
      {
        result.slice(0, limit).map((pokemon)=>
        <PokemonCard key={pokemon.name}>
          <span>#{('00'+ pokemon.id).slice(-3)}</span>
          <Image 
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + pokemon.id).slice(-3)}.png`}
          alt={pokemon.name}
          width={450}
          height={450}
          />
          <Link href={`/pokedex/${pokemon.name}`}>{pokemon.name}</Link>
        </PokemonCard>
        )
      }
   
    </>
  )
}

export default Index
