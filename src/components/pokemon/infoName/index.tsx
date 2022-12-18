import React from 'react'
import { InfoName } from './style';

type Props = {
    name:string;
}
const index = ({name}:Props) => {
  return (
    <InfoName>{name}</InfoName>
  )
}

export default index