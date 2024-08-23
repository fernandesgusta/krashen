import { createContext, useEffect, useState, useContext } from 'react'
import { useApplicationContext } from './ApplicationContext'
// import { ipcRenderer } from 'electron'

export interface ReaderContextProps {
  isParagraphMode: boolean
  setIsParagraphMode: React.Dispatch<React.SetStateAction<boolean>>
  isFocusMode: boolean
  setIsFocusMode: React.Dispatch<React.SetStateAction<boolean>>
  isFullScreenMode: boolean
  setIsFullScreenMode: React.Dispatch<React.SetStateAction<boolean>>
  selectedDocument: Article | null
  selectedParagraph: number

  setSelectedParagraph: React.Dispatch<React.SetStateAction<number>>
  setSelectedDocument: React.Dispatch<React.SetStateAction<Article | null>>
  handleSelectDocument: (article: Article) => void

  selectedPhrase: number
  setSelectedPhrase: React.Dispatch<React.SetStateAction<number>>
}

export type Article = {
  preview: string
  title: string
  paragraphs: string[]
  id: number
}

const ReaderContext = createContext<ReaderContextProps>({} as ReaderContextProps)

const ReaderContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { documents } = useApplicationContext()

  const [isParagraphMode, setIsParagraphMode] = useState(false)
  const [isFocusMode, setIsFocusMode] = useState(false)
  const [isFullScreenMode, setIsFullScreenMode] = useState(false)

  const [selectedDocument, setSelectedDocument] = useState<Article | null>(null)
  const [selectedParagraph, setSelectedParagraph] = useState<number>(0)
  const [selectedPhrase, setSelectedPhrase] = useState<number>(0)

  useEffect(() => {
    if (documents.length > 0) setSelectedDocument(documents[0])
  }, [])

  useEffect(() => {
    window.electron.ipcRenderer.invoke('hide-window-overlay')
  }, [isFocusMode])

  function handleSelectDocument(article: Article): void {
    setSelectedDocument(article)
    setSelectedParagraph(0)
  }

  // function handleSelectPhrase(phrase_id: number): void {}

  return (
    <ReaderContext.Provider
      value={{
        isParagraphMode,
        setIsFocusMode,
        isFocusMode,
        isFullScreenMode,
        setIsFullScreenMode,
        setIsParagraphMode,
        setSelectedDocument,
        selectedDocument,
        selectedParagraph,
        setSelectedParagraph,
        handleSelectDocument,
        selectedPhrase,
        setSelectedPhrase
      }}
    >
      {children}
    </ReaderContext.Provider>
  )
}

export function useReaderContext(): ReaderContextProps {
  return useContext(ReaderContext)
}

export default ReaderContextProvider
