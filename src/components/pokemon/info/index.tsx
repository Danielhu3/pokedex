import React from 'react'
import { Info } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <Info>{children}</Info>
  )
}

export default index