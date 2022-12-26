import React from 'react'
import { IconStar } from './style';

type Props = {
  border?: boolean;
}
const index = ({border}:Props) => {
  return (
    <IconStar width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2378 1.92275L10 1.19098L9.76224 1.92275L8.02225 7.27786H2.39155H1.62213L2.2446 7.73012L6.79994 11.0398L5.05995 16.3949L4.82219 17.1266L5.44466 16.6744L10 13.3647L14.5553 16.6744L15.1778 17.1266L14.94 16.3949L13.2001 11.0398L17.7554 7.73012L18.3779 7.27786H17.6085H11.9777L10.2378 1.92275Z" 
        fill="white"
        stroke={`${border ? '#F9CF30' : 'none'}`}
        stroke-width="0.5"/>
    </IconStar>

  )
}

export default index

