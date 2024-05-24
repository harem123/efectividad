import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Historic from './components/Historic'
import Dashboard from './components/Dashboard'
import Normalizaciones from './components/Normalizaciones'
import Recuperacion from './components/Recuperacion'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Historic/>
      <Dashboard/>
      <Recuperacion/>
    </>
  )
}

export default App
