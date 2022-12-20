import React from 'react'
import { BottomTypes } from './style'

type Props = {
    children: JSX.Element[] | JSX.Element
}
const index = ({children}:Props) => {
  return (
    <BottomTypes>{children}</BottomTypes>
  )
}

export default index