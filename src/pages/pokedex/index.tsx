import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  PokemonCard  from '../../components/PokemonCard/'
import useTypeColor from '../../hooks/useTypeColor'
export async function getStaticProps() {
    
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const result = await data.json()
    const teste = 'testando'

    return {
        props: {result, teste}
    }
}

const Index = ({result,teste}:any) => {
     const [apiInfo,setApiInfo] = React.useState(result)
     const [pokemons, setPokemons] = React.useState(result.results)
     const [haveMoreItems, setHaveMoreItems] = React.useState(true)
     const [page, setPage] = React.useState(1)

    React.useEffect(()=>{
      async function query() {
        if(page > 1){
          let query 
          const actualOffset = apiInfo.next.split('&limit')[0].split('offset=')[1]

          if(actualOffset !== undefined){
            // if query search limit try to surpass 151 (1º pokemon generation)
            if(parseInt(actualOffset) === 40){
              const lastQuery = apiInfo.next.split('limit=')[0] + 'limit=11'
              query = lastQuery
              setHaveMoreItems(false) 
            }
            else{
              query = apiInfo.next
            }
          }
          
          const data = await fetch(query)
          const result = await data.json()
          setApiInfo(result)
          setPokemons((actualPokemons:any)=> [...actualPokemons, ...result.results])
        }
      }

      query()
    },[page])
     
  function getPokemonId(url:string){
    const id = url.split('pokemon/').pop()?.split('/')[0]
    return id
    
   
  }


  
  //const {apiFetch} = useTypeColor()
   function GetColor(url:string) {
    async function AsyncF() {
      const id = getPokemonId(url)
      const  {idToColor} =  useTypeColor()
      const color = await idToColor(id)
     
      return color
    }
    const color = AsyncF()
    return color
    
   
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/1`)
    .then((response)=> response.json()
      .then((json)=> console.log(json)))
  
 
  return (
    
    <>
     
    <button onClick={haveMoreItems ? ()=> setPage((page)=>page+1) : ()=>{}}>ADICIONAR</button>
    
      {pokemons.map((pokemon:any)=> 
      <PokemonCard key={pokemon.name}>
       <span>#{'00'+ getPokemonId(pokemon.url)?.slice(-3)}</span> 
     
       <Image 
       src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00'+getPokemonId(pokemon.url)).slice(-3)}.png`}
       alt={pokemon.name}
       width={450}
       height={450}
       />
      <Link href={`/pokedex/${pokemon.name}`}>{pokemon.name}</Link>
  
      
      </PokemonCard>
      
      )}
   
    </>
  )
}

export default Index

