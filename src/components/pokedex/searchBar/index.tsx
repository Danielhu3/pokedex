import React from 'react'
import { SearchBar } from './style'

const Index = () => {
  const [value, setValue] = React.useState('')


  return (
   
    <SearchBar placeholder='Search' value={value} onChange={(e)=> setValue(e.target.value)}></SearchBar>
    
  )
}

export default Index