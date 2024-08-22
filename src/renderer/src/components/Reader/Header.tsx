import React, { HTMLAttributes } from 'react'

// import { Container } from './styles';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div
      {...props}
      className="p-2 flex border-x-0 gap-2 border-b border-[var(--palestar-200)] border-solid border-t-0"
    />
  )
}

export default Header
