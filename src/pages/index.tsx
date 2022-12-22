import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useTypeColor from '../hooks/useTypeColor'
import  PokemonCard  from '../components/pokedex/pokemonCard'
import  PokemonList  from '../components/pokedex/pokemonList'
import  Main  from '../components/pokedex/main/'
import  Container  from '../components/pokedex/container/'

type PokemonProps = {
  name:string;
  url:string;
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
     const [limit, setLimit] = React.useState(20)
     const {typeToColor} = useTypeColor()
  
     

     React.useEffect(()=>{
      const intersectionObserver = new IntersectionObserver((entries)=>{
        
          if(entries.some((entry)=> entry.isIntersecting)){
            raiseLimit()
          }
 
      })
      const observed = document.querySelector('#observed')
      if(observed !== null){
        intersectionObserver.observe(observed)
      }

      function raiseLimit(){
        if(limit === 140){
          setLimit((limit)=> limit +11)
        }
  
        else{
          setLimit((limit)=> limit + 20)
        }
        
       }
      

      return () => intersectionObserver.disconnect()
     },[limit])
     
    
  return (
    <Container>
    <Main>
    <PokemonList>
      <>
      {
        result.slice(0, limit).map((pokemon)=>
        <PokemonCard key={pokemon.name} color={typeToColor(primaryTypes[pokemon.name as keyof typeof primaryTypes])}>
          <span>#{('00'+ pokemon.id).slice(-3)}</span>

          
            <Image 
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + pokemon.id).slice(-3)}.png`}
            alt={pokemon.name}
            width={450}
            height={450}
            />
          
          
            <Link href={`/${pokemon.name}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Link>
          
         
        </PokemonCard>
        ) 
      }
       {limit < 151 && <p id='observed'></p>}
       </>
    </PokemonList>
    </Main>
    </Container>
  )
}

export default Index
