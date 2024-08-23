import React from 'react'

import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'

const Input: React.FC = () => {
  const { CommandPalletInputRef } = useLayoutManager()

  return (
    <input
      ref={CommandPalletInputRef}
      type="text"
      autoFocus
      className="w-full h-10 font-medium text-[var(--palestart-text-primary)] text-sm p-2 bg-[var(--palestar-150)] outline-none"
      placeholder="Search for some documen, defintion, translation, etc..."
    />
  )
}

export default Input
