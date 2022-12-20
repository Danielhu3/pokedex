import React from 'react'
import { BottomAbout } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}: Props) => {
  return (
    <BottomAbout>{children}</BottomAbout>
  )
}

export default index