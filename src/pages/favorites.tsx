import React from 'react'
import  Container  from '../components/pokedex/container/'
import  Main  from '../components/pokedex/main/'
import  PokemonList  from '../components/pokedex/pokemonList/'
import {useFavoritesContext} from '../contexts/favoritesContext'

interface Types  {
  type: {
    name:string;
  }
}

interface PokemonProps {
  id:number;
  name:string;
  types: Types[];
}


const Favorites = () => {
    const {favorites} = useFavoritesContext()
    const [localFavorites, setLocalFavorites] = React.useState<string[]>()
    const [pokemonList, setPokemonList] = React.useState<PokemonProps[]>([])

    React.useEffect(()=>{
      if(localFavorites && localFavorites.length > 0){
          
          localFavorites?.forEach((item)=>{
            async function getPokemon() {
              const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${item}`) 
              const data = await response.json()
    
              setPokemonList((oldPokemonList)=> [...oldPokemonList, data])
              
              
            }
            getPokemon()
            
          })
      }
        
    },[localFavorites])

    React.useEffect(()=>{
      setLocalFavorites(favorites)
      setPokemonList([])
    }, [favorites])
    
 
    
      

      return (
      <Container>
       <Main>
        <PokemonList pokemonList={pokemonList} /> 
       </Main>
       </Container>
      )
    
    
  
}

export default Favorites

