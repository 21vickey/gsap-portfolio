import { useState } from 'react'
import Navbar from "./components/navbar";
import Home from "./pages/home"
import Projects from "./pages/projects"
import Footer from "./components/footer"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
