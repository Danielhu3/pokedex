import React from 'react'
import { BottomAboutItems } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}: Props) => {
  return (
    <BottomAboutItems>{children}</BottomAboutItems>
  )
}

export default index