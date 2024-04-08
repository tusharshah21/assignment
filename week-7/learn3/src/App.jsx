import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from "./components/Landing"
import Assignment1 from "./components/Social"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/assign1" element={<Assignment1 />} />



      </Routes>
    </>
  )
}

export default App
