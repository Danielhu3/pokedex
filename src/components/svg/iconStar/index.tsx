import React from 'react'
import { IconStar } from './style';
import {useFavoritesContext} from '../../../contexts/favoritesContext'

type Props = {
  border?: boolean;
  pokemon: string;
}
const Index = ({border, pokemon}:Props) => {
  const {favorites, setFavorites} = useFavoritesContext()
   function editFavorite(){
    if(favorites){
      if(favorites.includes(pokemon)){
        const newFavorites = favorites.filter(function(value){
          return value !=pokemon
        })
        setFavorites(newFavorites)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
      }
      else{
          // it has to be spread instead of just do newFavorites = favorites, otherwise, it won't update css of star component in real time
          const newFavorites = [...favorites]
          newFavorites.push(pokemon)
          setFavorites(newFavorites)
          localStorage.setItem('favorites', JSON.stringify(newFavorites))
        
      }
  }
}
  return (
    <IconStar onClick={editFavorite}
        width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2378 1.92275L10 1.19098L9.76224 1.92275L8.02225 7.27786H2.39155H1.62213L2.2446 7.73012L6.79994 11.0398L5.05995 16.3949L4.82219 17.1266L5.44466 16.6744L10 13.3647L14.5553 16.6744L15.1778 17.1266L14.94 16.3949L13.2001 11.0398L17.7554 7.73012L18.3779 7.27786H17.6085H11.9777L10.2378 1.92275Z" 
        fill={`${favorites?.includes(pokemon) ? '#F9CF30' : 'white'}`}
        stroke={`${border ? '#F9CF30' : 'none'}`}
        strokeWidth="0.5"/>
    </IconStar>

  )
}

export default Index


/*

 function editFavorite(){
    if(favorites){
      if(favorites.includes(pokemon)){
        console.log('já tem')
        const newFavorites = favorites.filter(function(value){
          return value !=pokemon
        })
        localStorage.setItem('favorites', JSON.stringify(newFavorites))

      }
      else{
        console.log('nao tem')
        const newFavorites = favorites
        newFavorites.push(pokemon)
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
      }
    }
    
    else{
      console.log('tava vazio')
      localStorage.setItem('favorites', JSON.stringify([pokemon]))
    }
    
  }

*/