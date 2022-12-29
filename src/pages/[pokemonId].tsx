import React from 'react'
import  Bottom  from '../components/pokemon/bottom/'
import  Container  from '../components/pokemon/container/'
import  Info  from '../components/pokemon/info/'
import  Top  from '../components/pokemon/top/'
import Link from 'next/link'
import Image from 'next/image'
import  InfoLeftName  from '../components/pokemon/infoLeftName'
import  InfoRightNumber  from '../components/pokemon/infoRightNumber/'
import  InfoLeft  from '../components/pokemon/infoLeft/'
import  Pokemon  from '../components/pokemon/pokemon/'
import  PokemonChangeArrow  from '../components/pokemon/PokemonChangeArrow'
import  BottomTypes  from '../components/pokemon/bottomTypes/'
import  BottomTypesType  from '../components/pokemon/BottomTypesType/'
import  BottomAbout  from '../components/pokemon/bottomAbout/'
import  BottomAboutItems  from '../components/pokemon/bottomAboutItems/'
import  BottomAboutItemsItem  from '../components/pokemon/bottomAboutItemsItem/'
import useTypeColor from '../hooks/useTypeColor'
import  BottomTitle  from '../components/pokemon/bottomTitle/'
import  BottomStats  from '../components/pokemon/BottomStats/'
import  BottomStatsStatBar  from '../components/pokemon/BottomStatsStatBar/'
import  BottomStatsStat  from '../components/pokemon/BottomStatsStat/'
import  BottomStatsStatName  from '../components/pokemon/BottomStatsStatName/'
import  BottomStatsStatValue  from '../components/pokemon/bottomStatsStatValue'
import  InfoRight  from '../components/pokemon/infoRight/'
import  IconStar from '../components/svg/iconStar'


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

    const paths = data.results.map((_:any, index:number)=>{
        return{
          params:{
            pokemonId: `${index+1}`
          }
        }
      })
    
      return {paths, fallback:false}
    
}


interface Stats {
  base_stat: number;
  stat:{
    name:string;
  }
}

interface Abilities {
  ability:{
    name:string;
  }
}

interface Types  {
  type: {
    name:string;
  }
}

interface PokemonProps  {
  weight:number;
  height:number;
  id:number;
  name:string;

  types: Types[];
  stats: Stats[];
  abilities: Abilities[];

}

interface Pokemon {
  pokemon: PokemonProps;
}
const PokemonId = ({pokemon}:Pokemon) => {
    const {typeToColor} = useTypeColor()
    const primaryTypeColor = typeToColor(pokemon.types[0].type.name)

  return (
    <Container color={primaryTypeColor}>
      <Top>

        <Info>
          <InfoLeft>
            <Link href={'/'}>
              <Image
              src='/images/back.svg'
              width={24}
              height={32}
              alt='back'
              />
            </Link>

            <InfoLeftName name={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}/>
          </InfoLeft>  
          <InfoRight>
            <IconStar pokemon={pokemon.name}/>
            <InfoRightNumber number={pokemon.id} />
          </InfoRight>
          
        </Info>

        <Pokemon>
          {pokemon.id > 1 ? <PokemonChangeArrow type='previous' id={pokemon.id} /> : <></>}
          
          <Image 
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + pokemon.id).slice(-3)}.png`}
          width={200}
          height={200}
          alt={pokemon.name}
          />

          {pokemon.id < 151 ? <PokemonChangeArrow type='next' id={pokemon.id}/> : <></>}
        </Pokemon>

      </Top>
      <Bottom>
        <BottomTypes>
          {pokemon.types.map((item)=> 
          <BottomTypesType key={item.type.name }type={item.type.name} color={typeToColor(item.type.name)}/>)}
        </BottomTypes>

        <BottomAbout>
          <BottomTitle color={primaryTypeColor} text='About' />
          <BottomAboutItems>
            <BottomAboutItemsItem field ='Weight' value={pokemon.weight / 10} />
            <BottomAboutItemsItem  field ='Height' value={pokemon.height / 10} />
            <BottomAboutItemsItem field='Abilities' values={pokemon.abilities}/>
          </BottomAboutItems>
        </BottomAbout>

        <BottomStats>
          <BottomTitle color={primaryTypeColor} text='Base Stats'/>
           {
            pokemon.stats.map((item)=>
            <BottomStatsStat key={item.stat.name} >
              <BottomStatsStatName name={item.stat.name} color={primaryTypeColor}/>
              <BottomStatsStatValue value={item.base_stat}/>
              <BottomStatsStatBar value={item.base_stat} color={primaryTypeColor}/>
            </BottomStatsStat>
            )
           }

        </BottomStats>
        
      </Bottom>
    </Container>
  )
}

export default PokemonId
