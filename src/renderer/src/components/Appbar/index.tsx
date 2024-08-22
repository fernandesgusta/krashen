import AppbarContainer from './AppbarContainer'
import SimpleButton from '../SimpleButton'
import ClickableSpan from '../ClickableSpan'
import IconButton from '../IconButton'
import { Search } from 'lucide-react'
import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'

const Appbar: React.FC = () => {
  const { isCommandPalletOpened, toggleCommandPallet } = useLayoutManager()

  return (
    <AppbarContainer>
      <IconButton icon={Search} selected={isCommandPalletOpened} onClick={toggleCommandPallet} />
      <ClickableSpan selected={true}>reader</ClickableSpan>
      <ClickableSpan disabled>flashcards</ClickableSpan>
      <div className="flex-1"></div>
      <SimpleButton>entrar</SimpleButton>
    </AppbarContainer>
  )
}

export default Appbar
