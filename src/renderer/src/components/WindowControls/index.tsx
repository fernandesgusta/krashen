import React, { useState } from 'react'
import { Minus, Copy, X } from 'lucide-react'

import WindowControlButton from './WindowControlButton'

const WindowControls: React.FC = () => {
  const [isWindowMaximized, setIsWindowMaximized] = useState(false)

  function handleToggleMaximize(): void {
    if (isWindowMaximized) {
      window.electron.ipcRenderer.invoke('unmaximize')
      setIsWindowMaximized(false)
    } else {
      window.electron.ipcRenderer.invoke('maximize')
      setIsWindowMaximized(true)
    }
  }

  function handleMinimize(): void {
    window.electron.ipcRenderer.invoke('minimize')
  }

  function handleCloseWindow(): void {
    window.electron.ipcRenderer.invoke('close-window')
  }

  return (
    <div className="h-full flex items-center">
      <WindowControlButton onClick={handleMinimize}>
        <Minus strokeWidth={1.5} size={16} />
      </WindowControlButton>
      <WindowControlButton onClick={handleToggleMaximize}>
        <Copy strokeWidth={1.5} size={16} />
      </WindowControlButton>
      <WindowControlButton onClick={handleCloseWindow}>
        <X strokeWidth={1.5} size={16} />
      </WindowControlButton>
    </div>
  )
}

export default WindowControls
