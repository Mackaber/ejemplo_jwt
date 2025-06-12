import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <RoutesIndex />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
