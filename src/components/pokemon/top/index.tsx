import React from 'react'
import { Top } from './style'

type Props ={
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <Top>{children}</Top>
  )
}

export default index