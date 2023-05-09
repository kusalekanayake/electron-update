import React, { useState } from 'react'
import NavItem from './NavItem'

type Props = {
  className?: string
}

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'Trip Procedures', href: '/trip' },
  { text: 'OP Manuals', href: '/ops' },
  { text: 'Docs and Forms', href: '/docs' },
]

const Nav = ({ className }: Props): JSX.Element => {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className={`flex h-full w-full items-end pr-4 ${className ?? ''}`}>
      {MENU_LIST.map((menu, idx) => (
        <NavItem
          key={idx}
          active={activeIdx === idx}
          name={menu.text}
          link={menu.href}
          onClick={() => {
            console.log(menu.href)
            setActiveIdx(idx)
          }}
        ></NavItem>
      ))}
    </div>
  )
}

export default Nav
