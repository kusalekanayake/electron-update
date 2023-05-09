import React from 'react'

type Props = {
  className?: string
  name: string
  link: string
  active?: boolean
  onClick?: React.MouseEventHandler
}

const NavItem = ({
  className,
  name,
  link,
  active,
  onClick,
}: Props): JSX.Element => (
  <div
    className={`p-2text-gray-900 flex h-12 w-full cursor-pointer select-none items-center rounded-t-md duration-100 hover:bg-gray-200 ${className} ${
      active ? 'border-b-4 border-blue-400' : 'pb-[4px]'
    }`}
    onClick={onClick}
  >
    <p className={'w-full text-center'}>{name}</p>
  </div>
)

export default NavItem
