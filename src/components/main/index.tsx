import React from 'react'
import { Main } from './style'

type Props = {
    children: JSX.Element
}
const index = ({children}:Props) => {
  return (
    <Main>{children}</Main>
  )
}

export default index