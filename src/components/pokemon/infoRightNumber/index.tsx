import React from 'react'
import { InfoRightNumber } from './style'

type Props = {
    number:number
}
const index = ({number}:Props) => {
  return (
    <InfoRightNumber>#{('00' +number).slice(-3)}</InfoRightNumber>
  )
}

export default index