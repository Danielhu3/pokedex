import React from 'react'
import { BottomStatsStatBar } from './style'

type Props = {
  value: number;
  color: string;
}
const index = ({value,color}:Props) => {
  //console.log(value)
  return (
    <BottomStatsStatBar color={color} value={(100 * value) / 250}></BottomStatsStatBar>
  )
}

export default index