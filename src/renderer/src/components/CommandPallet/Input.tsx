import React from 'react'

import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'

const Input: React.FC = () => {
  const { CommandPalletInputRef, setCommandPalletQuery, commandPalletQuery } = useLayoutManager()

  return (
    <input
      ref={CommandPalletInputRef}
      type="text"
      value={commandPalletQuery}
      autoFocus
      onChange={(evt) => setCommandPalletQuery(evt.target.value)}
      className="w-full font-medium text-[var(--palestart-text-primary)]  p-2 bg-[var(--palestar-150)] outline-none"
      placeholder="Search for some documen, defintion, translation, etc..."
    />
  )
}

export default Input
