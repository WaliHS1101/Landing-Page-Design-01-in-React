import React from 'react'
import "./App.css"
import Navbar from "./Components/Navbar"
import Sustainability from './Components/Sustainability'
import About from './Components/About'
import Contact from './Components/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='sustainability' element={<Sustainability />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App