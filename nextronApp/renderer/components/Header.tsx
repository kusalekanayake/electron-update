import React from 'react'
import Title from './Title'
import Nav from './Nav'

type Props = {
  className?: string
}

const Header = ({ className }: Props): JSX.Element => (
  <div className={`flex h-28 w-screen bg-white shadow-xl ${className}`}>
    <Title />
    <Nav />
  </div>
)

export default Header
