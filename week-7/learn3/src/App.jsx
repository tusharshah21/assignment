import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from "./components/Landing"
import Assignment1 from "./components/Social"
import Assignment3 from "./components/Assignment3"
import Assignment2 from "./components/Assignment2"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/assign1" element={<Assignment1 />} />
        <Route path="/assign2" element={<Assignment2 />} />
        <Route path="/assign3" element={<Assignment3 />} />
      </Routes>
    </>
  )
}

export default App
