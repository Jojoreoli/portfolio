import './App.css'
import { Home } from './pages/Home'
import { ThemeProvider } from './ThemeProvider'

function App() {

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
