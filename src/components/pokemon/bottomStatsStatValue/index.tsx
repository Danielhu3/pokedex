import React from 'react'
import { BottomStatsStatValue } from './style'

type Props = {
    value: number;
}
const index = ({value}:Props) => {
  return (
    <BottomStatsStatValue>{('00' + value).slice(-3)}</BottomStatsStatValue>
  )
}

export default index