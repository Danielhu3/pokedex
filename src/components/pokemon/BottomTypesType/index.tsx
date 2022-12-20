import React from 'react'
import { BottomTypesType } from './style'

type Props = {
    type: string;
    color:string;
}
const index = ({type, color}:Props) => {
  return (
    <BottomTypesType color={color}>{type.charAt(0).toUpperCase() + type.slice(1)}</BottomTypesType>
  )
}

export default index