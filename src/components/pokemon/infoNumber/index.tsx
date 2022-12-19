import React from 'react'
import { InfoNumber } from './style'

type Props = {
    number:number
}
const index = ({number}:Props) => {
  return (
    <InfoNumber>#{('00' +number).slice(-3)}</InfoNumber>
  )
}

export default index