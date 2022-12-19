import React from 'react'
import { InfoLeftName } from './style';

type Props = {
    name:string;
}
const index = ({name}:Props) => {
  return (
    <InfoLeftName>{name}</InfoLeftName>
  )
}

export default index