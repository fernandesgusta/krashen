import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Article } from './ReaderContext'

export interface ApplicationContextProps {
  fetchUserSavedArticles: () => Promise<Article[]>

  documents: Article[]
  setDocuments: React.Dispatch<React.SetStateAction<Article[]>>
}

const ApplicationContext = createContext({} as ApplicationContextProps)

const ApplicationContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [documents, setDocuments] = useState<Article[]>([])

  const CommandPalletRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    updateGlobalArticlesState()
  }, [])

  async function updateGlobalArticlesState() {
    const documents = await fetchUserSavedArticles()
    setDocuments(documents)
  }

  async function fetchUserSavedArticles(): Promise<Article[]> {
    const articles = await window.electron.fetch_user_articles()
    return articles as Article[]
  }

  return (
    <ApplicationContext.Provider
      value={{
        documents,
        setDocuments,
        fetchUserSavedArticles,

        CommandPalletRef
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

export function useApplicationContext(): ApplicationContextProps {
  return useContext(ApplicationContext)
}

export default ApplicationContextProvider
