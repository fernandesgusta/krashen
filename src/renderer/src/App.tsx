import ApplicationContextProvider from './contexts/ApplicationContext'
import LayoutManagerContextProvider from './contexts/LayoutManagerContext'
import ReaderContextProvider from './contexts/ReaderContext'
import MainApplicationPage from './pages/MainApplicationPage'

function App(): JSX.Element {
  return (
    <LayoutManagerContextProvider>
      <ApplicationContextProvider>
        <ReaderContextProvider>
          <MainApplicationPage />
        </ReaderContextProvider>
      </ApplicationContextProvider>
    </LayoutManagerContextProvider>
  )
}

export default App
