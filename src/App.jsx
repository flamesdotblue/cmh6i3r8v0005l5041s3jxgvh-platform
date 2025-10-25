import React from 'react'
import HeroCinematic from './components/HeroCinematic'
import AboutChapters from './components/AboutChapters'
import ProcessConnected from './components/ProcessConnected'
import ExperienceSuite from './components/ExperienceSuite'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-inter">
      <HeroCinematic />
      <AboutChapters />
      <ProcessConnected />
      <ExperienceSuite />
    </div>
  )
}
