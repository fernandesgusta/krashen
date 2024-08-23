import {
  createContext,
  Dispatch,
  FC,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

export interface LayoutManagerContextProps {
  isFileExplorerPanelOpened: boolean
  isFlashcardPanelOpened: boolean
  isCommandPalletOpened: boolean

  toggleFileExplorerPanel: () => void
  toggleFlashcardsPanel: () => void
  toggleCommandPallet: () => void
  isContextualTranslationMenuOpened: boolean
  contextualTranslationMenuHtmlRef: RefObject<HTMLDivElement>
  readerHtmlRef: RefObject<HTMLDivElement>
  setIsMousePressedOnReader: Dispatch<React.SetStateAction<boolean>>

  CommandPalletHtmlRef: RefObject<HTMLDivElement>
  commandPalletQuery: string
  setCommandPalletQuery: Dispatch<React.SetStateAction<string>>
  CommandPalletInputRef: RefObject<HTMLInputElement>
}

const LayoutManagerContext = createContext<LayoutManagerContextProps>(
  {} as LayoutManagerContextProps
)

const LayoutManagerContextProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [isFileExplorerPanelOpened, setIsFileExplorerPanelOpened] = useState(true)
  const [isFlashcardPanelOpened, setIsFlashcardPanelOpened] = useState(true)
  const [isCommandPalletOpened, setIsCommandPalletOpened] = useState(false)

  const [isContextualTranslationMenuOpened, setIsContextualTranslationMenuOpened] = useState(false)
  const [isMousePressedOnReader, setIsMousePressedOnReader] = useState(false)

  const contextualTranslationMenuHtmlRef = useRef<HTMLDivElement>(null)
  const readerHtmlRef = useRef<HTMLDivElement>(null)

  const CommandPalletHtmlRef = useRef<HTMLDivElement>(null)
  const CommandPalletInputRef = useRef<HTMLInputElement>(null)
  const [commandPalletQuery, setCommandPalletQuery] = useState<string>('')

  const handleTextSelectionChange = useCallback(() => {
    setIsContextualTranslationMenuOpened(false)
    // gives a small delay of 1 second before showing the context menu on the screen
    setTimeout(() => {
      const selection = document.getSelection()

      if (isMousePressedOnReader) {
        console.log('Mouse Pressed')
        return undefined
      }

      console.log(readerHtmlRef)

      if (
        !isMousePressedOnReader &&
        // selection must exist
        selection &&
        selection.anchorNode &&
        selection.anchorNode.parentElement &&
        selection.focusNode &&
        selection.focusNode.parentElement &&
        // the menu must be mounted to the screen
        contextualTranslationMenuHtmlRef.current !== null &&
        // the reader must be mounted
        readerHtmlRef.current !== null
      ) {
        // verify if the selection isn't empty if that's the case then close it
        if (selection.toString() === '' || selection.toString() === ' ') {
          setIsContextualTranslationMenuOpened(false)
          return undefined
        }

        const rangeRect = selection.getRangeAt(0).getBoundingClientRect()
        const readerBounds = readerHtmlRef.current.getBoundingClientRect()

        // here you need to open the menu and then position it correctly

        contextualTranslationMenuHtmlRef.current.style.top = `${rangeRect.y - readerBounds.y + rangeRect.height + 4 + readerHtmlRef.current.scrollTop}px`
        contextualTranslationMenuHtmlRef.current.style.left = `${rangeRect.left - contextualTranslationMenuHtmlRef.current.offsetWidth / 2 - readerBounds.x + rangeRect.width / 2}px`

        setIsContextualTranslationMenuOpened(true)
      }
    }, 1000)
  }, [])

  const handleKeyBindings = useCallback((evt: KeyboardEvent) => {
    switch (evt.key) {
      case 'b':
        if (evt.ctrlKey) setIsFileExplorerPanelOpened((prev) => !prev)
        break
      case 'p':
        // if (!CommandPalletHtmlRef.current || !CommandPalletInputRef.current) return undefined

        if (evt.ctrlKey) {
          setIsCommandPalletOpened((prev) => !prev)
          // CommandPalletInputRef.current.dispatchEvent(new Event('invoked-command-pallet'))
        }

        break
      case 'f':
        if (evt.ctrlKey) setIsFlashcardPanelOpened((prev) => !prev)
        break
      case 'ArrowRight':
        break
      case 'ArrowLeft':
        break
      case 'ArrowDown':
        break
      case 'ArrowUp':
        break
    }
  }, [])

  function toggleFileExplorerPanel(): void {
    setIsFileExplorerPanelOpened((prev) => !prev)
  }
  function toggleFlashcardsPanel(): void {
    setIsFlashcardPanelOpened((prev) => !prev)
  }
  function toggleCommandPallet(): void {
    setIsCommandPalletOpened((prev) => !prev)
  }

  // effect to manage keybinds
  useEffect(() => {
    window.addEventListener('keydown', handleKeyBindings)

    return (): void => window.removeEventListener('keydown', handleKeyBindings)
  }, [handleKeyBindings])

  // effect to manage changes in the text selection
  useEffect(() => {
    document.addEventListener('selectionchange', handleTextSelectionChange)
    return (): void => document.removeEventListener('selectionchange', handleTextSelectionChange)
  }, [handleTextSelectionChange])

  return (
    <LayoutManagerContext.Provider
      value={{
        isFileExplorerPanelOpened,
        isFlashcardPanelOpened,
        isCommandPalletOpened,
        toggleCommandPallet,
        toggleFileExplorerPanel,
        toggleFlashcardsPanel,
        isContextualTranslationMenuOpened,
        contextualTranslationMenuHtmlRef,
        setIsMousePressedOnReader,
        readerHtmlRef,
        commandPalletQuery,
        CommandPalletHtmlRef,
        setCommandPalletQuery,
        CommandPalletInputRef
      }}
    >
      {children}
    </LayoutManagerContext.Provider>
  )
}

export function useLayoutManager(): LayoutManagerContextProps {
  return useContext(LayoutManagerContext)
}

export default LayoutManagerContextProvider
