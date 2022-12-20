import React from 'react'
import  Bottom  from '../components/pokemon/bottom/'
import  Container  from '../components/pokemon/container/'
import  Info  from '../components/pokemon/info/'
import  Top  from '../components/pokemon/top/'
import Link from 'next/link'
import Image from 'next/image'
import  InfoLeftName  from '../components/pokemon/infoLeftName'
import  InfoNumber  from '../components/pokemon/infoNumber/'
import  InfoLeft  from '../components/pokemon/infoLeft/'
import  Pokemon  from '../components/pokemon/pokemon/'
import  PokemonChangeArrow  from '../components/pokemon/PokemonChangeArrow'
import  BottomTypes  from '../components/pokemon/bottomTypes/'
import  BottomTypesType  from '../components/pokemon/BottomTypesType/'
import  BottomAbout  from '../components/pokemon/bottomAbout/'
import  BottomAboutItems  from '../components/pokemon/bottomAboutItems/'
import  BottomAboutItemsItem  from '../components/pokemon/bottomAboutItemsItem/'
import useTypeColor from '../hooks/useTypeColor'

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
const PokemonId = ({pokemon}:any) => {
    console.log(pokemon)
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
          <InfoNumber number={pokemon.id} />
        </Info>

        <Pokemon>
          {pokemon.id > 1 ? <PokemonChangeArrow type='previous' /> : <></>}
          
          <Image 
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('00' + pokemon.id).slice(-3)}.png`}
          width={200}
          height={200}
          alt={pokemon.name}
          />

          {pokemon.id < 151 ? <PokemonChangeArrow type='next' /> : <></>}
        </Pokemon>

      </Top>
      <Bottom>
        <BottomTypes>
          {pokemon.types.map((item)=> 
          <BottomTypesType key={item.type.name }type={item.type.name} color={typeToColor(item.type.name)}/>)}
        </BottomTypes>

        <BottomAbout>
          <h3>About</h3>
          <BottomAboutItems>
            <BottomAboutItemsItem />
            <BottomAboutItemsItem />
            <BottomAboutItemsItem />
          </BottomAboutItems>
        </BottomAbout>
      </Bottom>
    </Container>
  )
}

export default PokemonId