import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Process from './components/Process'
import Showcase from './components/Showcase'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-inter">
      <Hero />
      <About />
      <Process />
      <Showcase />
    </div>
  )
}
