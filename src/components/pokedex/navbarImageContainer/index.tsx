import React from 'react'
import { NavbarImageContainer } from './style'

type Props = {
    children: JSX.Element
}
const index = ({children}:Props) => {
  return (
    <NavbarImageContainer>{children}</NavbarImageContainer>
  )
}

export default index