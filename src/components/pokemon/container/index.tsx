import React from 'react'
import { Container } from './style'

type Props = {
    children: JSX.Element[];
    color: string;

}
const index = ({children,color}:Props) => {
  return (
    <Container color={color}>{children}</Container>
  )
}

export default index