import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'
import React, { HTMLAttributes } from 'react'

// import { Container } from './styles';

export interface CommandPalletContainerProps extends HTMLAttributes<HTMLDivElement> {
  visible?: boolean
}

const Container: React.FC<CommandPalletContainerProps> = (props) => {
  const { CommandPalletHtmlRef } = useLayoutManager()

  return (
    <div
      ref={CommandPalletHtmlRef}
      {...props}
      style={{ left: '50%', top: '20%', translate: '-50% 50%' }}
      className="absolute flex max-h-[400px] overflow-hidden rounded border border-solid border-[var(--palestar-200)]  w-[400px] min-h-[40px] shadow-lg z-50 bg-[var(--palestar-150)]"
    />
  )
}

export default Container
