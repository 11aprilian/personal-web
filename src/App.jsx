import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {

  return (
    <div className='bg-dark'>
      <Navbar/>
      <div className='pt-4 pb-5'>jk</div>
      <Hero/>
      <Resume/>
      <Contact/>
    </div>
  )
}

export default App
