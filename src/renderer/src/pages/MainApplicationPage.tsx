import React from 'react'
import Appbar from '../components/Appbar'
import FileExplorer from '../components/FileExplorer'
import Reader from '../components/Reader'
import StatusBar from '../components/StatusBar'
import { useLayoutManager } from '../contexts/LayoutManagerContext'
import FlashcardPreviewPanel from '../components/FlashcardPreviewPanel'
// import { Container } from './styles';

const MainApplicationPage: React.FC = () => {
  const { isFileExplorerPanelOpened, isFlashcardPanelOpened } = useLayoutManager()

  return (
    <div className="flex flex-col overflow-hidden">
      <Appbar />
      <div className="main-content-height flex ">
        {isFileExplorerPanelOpened ? <FileExplorer /> : null}
        <Reader />

        {isFlashcardPanelOpened ? <FlashcardPreviewPanel /> : null}
      </div>
      <StatusBar />
    </div>
  )
}

export default MainApplicationPage
