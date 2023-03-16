import React from 'react'
import useTypeColor from '../../../hooks/useTypeColor';
import { PokemonList } from './style'
import  IconStar  from '../../svg/iconStar/';
import  PokemonCard  from '../pokemonCard/';
import  PokemonCardInfo  from '../pokemonCardInfo/';
import Image from 'next/image';
import Link from 'next/link';

type PrimaryTypesProps = {
  [key:string]:string
}

interface Types  {
  type: {
    name:string;
  }
}
interface PokemonProps {
  id:number;
  name:string;
  types?: Types[];
}

type Props = {
    pokemonList: Array<PokemonProps>;
    primaryTypes?: PrimaryTypesProps;
}
const Index = ({ pokemonList, primaryTypes}:Props) => {
  const {typeToColor} = useTypeColor()
  const [limit, setLimit] = React.useState(20)
  const [localPokemonList, setLocalPokemonList] = React.useState<PokemonProps[]>()

  React.useEffect(()=>{
    setLocalPokemonList(pokemonList)
  }, [pokemonList])


     

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
    <PokemonList>
      {
        localPokemonList && localPokemonList.length > 0 ? 
        localPokemonList.slice(0,limit).map((pokemon)=>
        <PokemonCard key={pokemon.name} 
        color={primaryTypes ? typeToColor(primaryTypes[pokemon.name as keyof typeof primaryTypes]) 
        : pokemon.types ? typeToColor( pokemon.types[0].type.name) : ''}>

          <PokemonCardInfo>
            <IconStar border={primaryTypes ? true : false} pokemon={pokemon.name}/>
            <span>#{('00'+ pokemon.id).slice(-3)}</span> 
          </PokemonCardInfo>

          <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + pokemon.id).slice(-3)}.png`}
          alt={pokemon.name}
          width={450}
          height={450}/>
          <Link href={`/${pokemon.id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Link>

        </PokemonCard>)
        
        : <p>não tem</p>
      }
      {limit < 151 && <p id='observed'></p>}
    </PokemonList>
  )
}

export default Index