import React from 'react'
import  Navbar  from '../navbar/'
import  SearchBar  from '../searchBar/'
import { Header } from './style'

const index = () => {
  return (
    <Header>
        <Navbar />
        <SearchBar />
    </Header>
  )
}

export default index