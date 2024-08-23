import React from 'react'

// import { Container } from './styles';
import Container from './Container'
import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'
import Input from './Input'

const CommandPallet: React.FC = () => {
  const { isCommandPalletOpened } = useLayoutManager()
  return (
    <Container visible={isCommandPalletOpened}>
      <Input />
    </Container>
  )
}

export default CommandPallet
