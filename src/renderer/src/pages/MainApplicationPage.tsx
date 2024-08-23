import React from 'react'
import Appbar from '../components/Appbar'
import FileExplorer from '../components/FileExplorer'
import Reader from '../components/Reader'
import StatusBar from '../components/StatusBar'
import { useLayoutManager } from '../contexts/LayoutManagerContext'
import FlashcardPreviewPanel from '../components/FlashcardPreviewPanel'
import CommandPallet from '@renderer/components/CommandPallet'
import { useReaderContext } from '@renderer/contexts/ReaderContext'
// import { Container } from './styles';

const MainApplicationPage: React.FC = () => {
  const { isFileExplorerPanelOpened, isFlashcardPanelOpened, isCommandPalletOpened } =
    useLayoutManager()

  const { isFocusMode } = useReaderContext()

  return (
    <>
      {isCommandPalletOpened ? <CommandPallet /> : null}
      <div className="flex h-full flex-col overflow-hidden">
        <Appbar />
        <div className="main-content-height flex ">
          {isFileExplorerPanelOpened && !isFocusMode ? <FileExplorer /> : null}
          <Reader />

          {isFlashcardPanelOpened && !isFocusMode ? <FlashcardPreviewPanel /> : null}
        </div>
        <StatusBar />
      </div>
    </>
  )
}

export default MainApplicationPage
