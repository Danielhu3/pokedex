import React from 'react'
import { InfoNumber } from './style'

type Props = {
    number:number
}
const index = ({number}:Props) => {
  return (
    <InfoNumber>{number}</InfoNumber>
  )
}

export default index