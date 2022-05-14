import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import { Welcome1 } from './views/Welcome1'
import { Welcome2 } from './views/Welcome2'
import { Welcome3 } from './views/Welcome3'
import { Welcome4 } from './views/Welcome4'
import { StartPage } from './views/StartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Welcome1 />} />
        <Route path="/welcome/2" element={<Welcome2 />} />
        <Route path="/welcome/3" element={<Welcome3 />} />
        <Route path="/welcome/4" element={<Welcome4 />} />
        <Route path="/start" element={<StartPage />} />
      </Routes>
    </div>
  )
}

export default App
