import React from 'react'
import { InfoLeft } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <InfoLeft>{children}</InfoLeft>
  )
}

export default index