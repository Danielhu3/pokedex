import React from 'react'
import  Header  from '../header/'
import  Navbar  from '../navbar/'
import { Container } from './style'

type Props = {
    children: JSX.Element
}
const index = ({children}:Props) => {
  return (
    <Container>
        <Header />
        {children}
    </Container>
  )
}

export default index