import React, { HTMLAttributes } from 'react'

const WindowControlButton: React.FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props}
      className="p-2 hover:bg-[var(--palestar-175)] w-10 flex items-center justify-center appbar-component"
    ></button>
  )
}

export default WindowControlButton
