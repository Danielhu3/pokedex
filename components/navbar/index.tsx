import React from 'react'
import Link from 'next/link'
const index = () => {
  return (
    <nav>
        <Link href={'/pokedex'}>Pokedex </Link>
        <Link href={'/'}>Voltar </Link>
    </nav>
  )
}

export default index