import React from 'react'
import { Bottom } from './style'

type Props = {
  children: JSX.Element[]
}
const index = ({children}: Props) => {
  return (
    <Bottom>{children}</Bottom>
  )
}

export default index