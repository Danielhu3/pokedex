import React from 'react'
import { BottomStatsStat } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <BottomStatsStat>{children}</BottomStatsStat>
  )
}

export default index