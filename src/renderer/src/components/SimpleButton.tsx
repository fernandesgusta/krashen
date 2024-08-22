import React, { ButtonHTMLAttributes } from 'react'

interface SimpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  return (
    <button
      {...props}
      className="p-1 text-xs rounded appbar-component hover:bg-[var(--palestar-200)] border border-solid border-[var(--palestar-200)] transition-colors"
    ></button>
  )
}

export default SimpleButton
