import React from 'react'
import { BottomStats } from './style'

type Props = {
    children: JSX.Element[] | JSX.Element | any;
}
const index = ({children}:Props) => {

  return (
    <BottomStats>{children}</BottomStats>
  )
}

export default index