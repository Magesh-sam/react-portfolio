import { useState } from 'react'
import './App.css'
import Navigation from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navigation/>
    </div>
  )
}

export default App
