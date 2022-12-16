import React from 'react'

const typesColors = {
    'rock': '#B69E31',
    'ghost': '#70559B',
    'steel': '#B7B9D0',
    'water': '#6493EB',
    'grass': '#74CB48',
    'psychic': '#FB5584',
    'ice': '#9AD6DF',
    'dark': '#75574C',
    'fairy': '#E69EAC',
    'normal': '#AAA67F',
    'fighting': '#C12239',
    'flying': '#A891EC',
    'poison': '#A43E9E',
    'ground': '#DEC16B',
    'bug': '#A7B723',
    'fire': '#F57D31',
    'electric': '#F9CF30',
    'dragon': '#7037FF',
}
    

 const useTypeColor =  () => {

   

    async function idToColor(id:string){

      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const response = await data.json()
      const type = response.types[0].type.name
      const color = typesColors[type as keyof typeof typesColors]
      
      
      return color
    }
    
   
   
  return {
     idToColor
  }
}

export default useTypeColor