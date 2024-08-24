import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stripes from './components/Stripes'
import Lists from './components/Lists'
import Marquees from './components/Marquees'
import Boxes from './components/Boxes'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();
 
  return (
    
    <div className='h-[100%] w-full bg-[#18181B] text-white'>
      <Nav />
      <Hero />
      <Stripes />
      <Lists />
      <Marquees />
      <Boxes />
      <Footer />
    </div>
  )
}


export default App
