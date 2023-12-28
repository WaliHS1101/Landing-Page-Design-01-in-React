import React from 'react'
import "./App.css"
import Navbar from "./Components/Navbar"
import Sustainability from './Components/Sustainability'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Sustainability />
      <About />
      <Contact />
    </>
  )
}

export default App