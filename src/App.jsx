import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/sections/HeroSection'
import Services from './components/sections/Services'
import Section3 from './components/sections/Section3'
import Tesimonials from './components/sections/Tesimonials'
import TeamSection from './components/sections/TeamSection'
import SubscribeSection from './components/sections/SubscribeSection'
import Footer from './components/sections/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Services/>
    <Section3/>
    <Tesimonials/>
    <TeamSection/>
    <SubscribeSection/>
    <Footer/>
    </>
  )
}

export default App