import React from 'react'
import About from '../components/About'
import Client from '../components/Client'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Service from '../components/Service'

function HomePage() {
  return (
    <>
      <Home />
      <Service />
      <Portfolio />
      <Client />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage