import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Home></Home>
      
    </>
  )
}

export default App
