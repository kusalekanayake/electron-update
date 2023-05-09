import React from 'react'

type Props = {
  className?: string
}

const Title = ({ className }: Props): JSX.Element => (
  <div
    className={`flex w-full select-none items-center  pl-8 text-4xl font-bold text-gray-900 ${
      className ?? ''
    }`}
  >
    Fishing<p className="text-gray-500 "> Boat</p>
  </div>
)

export default Title
