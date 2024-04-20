import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Historic from './components/Historic'
import Dashboard from './components/Dashboard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Historic/>
      <Dashboard/>
    </>
  )
}

export default App
