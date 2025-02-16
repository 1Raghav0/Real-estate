import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PropertyTypes from './components/PropertyTypes'
import RecentProperty from './components/RecentProperty'
import Awards from './components/Awards'
import ExploreLocation from './components/ExploreLocation'
import Agents from './components/Agents'
import Packages from './components/Packages'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <About />
      <PropertyTypes />
      <RecentProperty />
      <Awards />
      <ExploreLocation />
      <Agents />
      <Packages />
      <Footer />
    </div>
  )
}

export default App

