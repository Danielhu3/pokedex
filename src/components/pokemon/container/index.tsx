import React from 'react'
import { Container } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <Container>{children}</Container>
  )
}

export default index