import React from 'react'
import { InfoRight } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <InfoRight>{children}</InfoRight>
  )
}

export default index