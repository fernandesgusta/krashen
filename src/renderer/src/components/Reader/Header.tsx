import { useReaderContext } from '@renderer/contexts/ReaderContext'
import React, { HTMLAttributes } from 'react'

// import { Container } from './styles';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = (props) => {
  const { isFocusMode } = useReaderContext()

  return (
    <div
      data-focus={isFocusMode}
      {...props}
      className="p-2 data-[focus='true']:opacity-0 transition-all data-[focus='true']:hover:opacity-100 flex border-x-0 gap-2 border-b shadow-sm border-[var(--palestar-200)] border-solid border-t-0"
    />
  )
}

export default Header
