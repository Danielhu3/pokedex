import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from './style'
import  NavbarDiv  from '../navbarDiv/'
import  NavbarImageContainer  from '../navbarImageContainer/'

const index = () => {
  return (
    <Navbar>
        <NavbarDiv>
          <NavbarImageContainer>
            <Image 
            src='/images/icon-pokeball.svg'
            alt='pokeball'
            width={24}
            height={24}
            />
          </NavbarImageContainer>
          <Link href={'/'}>Pokédex </Link>
        </NavbarDiv>

        <NavbarDiv>
          <Link href={'/favorites'}>Favorites</Link>
          <NavbarImageContainer>
            <Image 
            src='/images/sort-number-desc.svg'
            alt='sort'
            width={20}
            height={32}
            />
          </NavbarImageContainer>
        </NavbarDiv>
        
    </Navbar>
  )
}

export default index