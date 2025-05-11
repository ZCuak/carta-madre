import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carta from './components/carta/Carta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Carta />
    </div>
  )
}

export default App
