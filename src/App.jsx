import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'
import Services from './components/sections/Services'
import Section3 from './components/sections/Section3'
import Tesimonials from './components/sections/Tesimonials'
import TeamSection from './components/sections/TeamSection'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <Section3/>
    <Tesimonials/>
    <TeamSection/>
    </>
  )
}

export default App