import React from 'react'
import Navbar from '../navbar'

type Props = {
    children:JSX.Element[] | JSX.Element;
}

const index = ({children}:Props) => {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default index