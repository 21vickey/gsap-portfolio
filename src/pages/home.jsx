import React from 'react'
import Hero from '../sections/hero'
import About from '../sections/about'
import Services from '../sections/services'
import Work from '../sections/work'
import Marquee from '../sections/marquee'
import Cta from '../components/cta'

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Services/>
        <Work/>
        <Marquee/>
        <Cta/>
    </>
  )
}

export default Home