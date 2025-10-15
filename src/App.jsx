import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='mx-38'>
        <Home />
        <About />
      </div >
    </>
  )
}

export default App
