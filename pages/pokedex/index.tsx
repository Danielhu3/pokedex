import React from 'react'
export async function getStaticProps(valor?: string) {
    
    const data = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const result = await data.json()

    return {
        props: {result}
    }
}

const Index = ({result}:any) => {
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
     
   console.log(pokemons)
  return (
    
    <>
    <button onClick={haveMoreItems ? ()=> setPage((page)=>page+1) : ()=>{}}>ADICIONAR</button>
    <ul>
      {pokemons.map((item:any)=> <li key={item.name}>{item.name}</li>)}
    </ul>
    </>
  )
}

export default Index

