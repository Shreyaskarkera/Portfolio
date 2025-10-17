import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import MoreAbout from './Components/MoreAbout'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className='mx-9 md:mx-19 lg:mx-38 snap-x snap-mandatory'>
            <Home className="snap-center" />
            <About className="snap-center" />
          </div>
        } />
        <Route path="/more-about" element={
          <div className='mx-9 md:mx-19 lg:mx-38'>
            <MoreAbout />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
