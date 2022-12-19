import React from 'react'
import { Pokemon } from './style'

type Props = {
    children: JSX.Element[] | JSX.Element 
}
const index = ({children}:Props) => {
  return (
    <Pokemon>{children}</Pokemon>
  )
}

export default index