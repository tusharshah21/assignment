import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from "./components/Landing"
import Assignment1 from "./components/Social"
import Assignment3 from "./components/Assignment3"
import Assignment2 from "./components/Assignment2"
import Assignment4 from "./components/Assignment4"
import Assignment5 from "./components/Assignment5"
import Assignment6 from "./components/Assignment6"
import Assignment7 from "./components/Assignment7"

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
        <Route path="/assign4" element={<Assignment4 />} />
        <Route path="/assign5" element={<Assignment5 />} />
        <Route path="/assign6" element={<Assignment6 />} />
        <Route path="/assign7" element={<Assignment7 />} />
      </Routes>
    </>
  )
}

export default App
