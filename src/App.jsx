import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-dark'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
