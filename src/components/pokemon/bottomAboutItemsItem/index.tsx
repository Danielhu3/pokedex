import React from 'react'
import { BottomAboutItemsItem } from './style'

type Props = {
  field:string;
  values: number | object;
}


const index = ({field, values}:Props) => {
  console.log(field)
  if(field === 'Abilities'){
    
    return <BottomAboutItemsItem field={field}>{values.map((item:object)=> 
      <span key={item.ability.name}>
        {item.ability.name.charAt(0).toUpperCase() + item.ability.name.slice(1)}
      </span>)}
      <p>{field}</p>
    </BottomAboutItemsItem>
  }
  else{
    return (
      <BottomAboutItemsItem field={field}>
        <span>{values.toString()}{field === 'Weight' ? ' kg': ' m'}</span>
        <p>{field}</p>
      </BottomAboutItemsItem>
    )
  }
  
}

export default index