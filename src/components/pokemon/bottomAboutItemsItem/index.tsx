import React from 'react'
import { BottomAboutItemsItem } from './style'

interface Props  {
  field:string;
  value?: number; 
  values?: Abilities[];
}

interface Abilities {
  ability:{
    name:string;
  }
}


const index = ({field, value, values}:Props) => {
  
    
    return <BottomAboutItemsItem field={field}>
      
      {values && values.map((item)=> 
      <span key={item.ability.name}>
        {item.ability.name.charAt(0).toUpperCase() + item.ability.name.slice(1)}
      </span>)}

      {value && <span>{value.toString()}{field === 'Weight' ? ' kg': ' m'}</span>}
      <p>{field}</p>
    </BottomAboutItemsItem>
}

export default index