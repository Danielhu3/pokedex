import React from 'react'
import { BottomTitle } from './style'

type Props ={
    text:string;
    color:string
}
const index = ({color, text}:Props) => {
  return (
    <BottomTitle color={color}>{text}</BottomTitle>
  )
}

export default index