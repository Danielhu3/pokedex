import React from 'react'
import { NavbarDiv } from './style'

type Props ={
    children: JSX.Element[] | JSX.Element
}
const index = ({children}:Props) => {
  return (
    <NavbarDiv>{children}</NavbarDiv>
  )
}

export default index