import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import  Container  from '../components/pokedex/container/'
import  Main  from '../components/pokedex/main/'
import  PokemonCard  from '../components/pokedex/pokemonCard/'
import  PokemonCardInfo  from '../components/pokedex/pokemonCardInfo/'
import  PokemonList  from '../components/pokedex/pokemonList/'
import  IconStar  from '../components/svg/iconStar/'
import {useFavoritesContext} from '../contexts/favoritesContext'
import useTypeColor from '../hooks/useTypeColor'

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

    const {typeToColor} = useTypeColor()
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
    
 
    if(pokemonList && pokemonList.length > 0){
      console.log(pokemonList)

      return (
      <Container>
       <Main>
        <PokemonList>
          <>
            {
              pokemonList.map((pokemon)=> 
              <PokemonCard key={pokemon.name} color={typeToColor(pokemon.types[0].type.name)}>
                <PokemonCardInfo>
                    <IconStar border={true} 
                    pokemon={pokemon.name} 
                    />
                    <span>#{('00'+ pokemon.id).slice(-3)}</span> 
                  </PokemonCardInfo>
      
                  <Image 
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + pokemon.id).slice(-3)}.png`}
                  alt={pokemon.name}
                  width={450}
                  height={450}
                  />
                  <Link href={`/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Link>
              </PokemonCard>)
            }
          
          </>
        </PokemonList>
       </Main>
       </Container>
      )
    }
    else{
      return(
        <Container>
        <Main>
        
          <p>
            não tem favoritos
          </p>
      
       </Main>
       </Container>
      )
    }
  
}

export default Favorites