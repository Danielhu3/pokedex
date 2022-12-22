import React from 'react'
import { BottomStatsStatName } from './style'

type Props = {
    name: string;
    color:string;
}
const index = ({name, color}:Props) => {

  function getStat(){
    if(name === 'attack'){
      return 'ATK'
    }
    if(name === 'defense'){
      return 'DEF'
    }
    if(name === 'special-attack'){
      return 'SP.ATK'
    }
    if(name === 'special-defense'){
      return 'SP.DEF'
    }
    if(name === 'speed'){
      return 'SPD'
    }
    return 'HP'
  }
  return (
    <BottomStatsStatName color={color}>{getStat()}</BottomStatsStatName>
  )
}

export default index