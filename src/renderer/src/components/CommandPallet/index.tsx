import React, { useEffect, useState } from 'react'

// import { Container } from './styles';
import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'

import Container from './Container'
import Input from './Input'
import ReversoExampleCard from './Example'

export type ReversoContextSearchBundle = {
  examples: [string, string][]
  translations: string[]
  word_class: string[]
}

const CommandPallet: React.FC = () => {
  const { isCommandPalletOpened, commandPalletQuery } = useLayoutManager()

  const [reversoResponse, setReversoResponse] = useState<ReversoContextSearchBundle>({
    examples: []
  } as ReversoContextSearchBundle)

  const handleQueryReversoContext = async () => {
    if (commandPalletQuery.length > 0 && commandPalletQuery[0] != '>') return undefined

    const response = (await window.electron.ipcRenderer.invoke(
      'reverso-context',
      commandPalletQuery.slice(1)
    )) as ReversoContextSearchBundle

    setReversoResponse(response)
  }

  useEffect(() => {
    handleQueryReversoContext()
  }, [commandPalletQuery])

  return (
    <Container visible={isCommandPalletOpened}>
      <Input />

      {reversoResponse.examples.length > 0 && (
        <div className="h-[1px] w-full bg-[var(--palestar-200)]"></div>
      )}
      <div className="flex flex-col overflow-auto no-scroll-bar">
        {reversoResponse.examples.map((value, idx) => (
          <ReversoExampleCard example={value[0]} translation={value[1]} key={idx} />
        ))}
      </div>
    </Container>
  )
}

export default CommandPallet
