import React from 'react'

import { Cloud, FolderTree, Github, PanelRight } from 'lucide-react'

import StatusBarContainer from './StatusBarContainer'
import IconButton from '../IconButton'
import ClickableSpan from '../ClickableSpan'
import Statistics from '../Statistics'
import { useLayoutManager } from '@renderer/contexts/LayoutManagerContext'

const StatusBar: React.FC = () => {
  const {
    isFileExplorerPanelOpened,
    isFlashcardPanelOpened,
    toggleFileExplorerPanel,
    toggleFlashcardsPanel
  } = useLayoutManager()

  return (
    <StatusBarContainer>
      <IconButton
        selected={isFileExplorerPanelOpened}
        onClick={toggleFileExplorerPanel}
        icon={FolderTree}
      ></IconButton>

      <IconButton icon={Github}></IconButton>
      <IconButton disabled={true} icon={Cloud}></IconButton>

      {/* Spacer */}
      <div className="flex-1"></div>

      <ClickableSpan selected>français</ClickableSpan>
      <Statistics label="words" numericData={1457} />
      <Statistics label="flashcards" numericData={427} />
      <Statistics label="documents" numericData={30} />
      <span className="font-mono font-bold text-xs">70%</span>
      <IconButton
        icon={PanelRight}
        selected={isFlashcardPanelOpened}
        onClick={toggleFlashcardsPanel}
      />
    </StatusBarContainer>
  )
}

export default StatusBar
