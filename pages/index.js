import React, { useContext, useEffect } from 'react'
import About from '../components/About'
import Certifications from '../components/Certifications'
import Client from '../components/Client'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Service from '../components/Service'
import SocialMediaFixed from '../components/SocialMediaFixed'
import Testimonials from '../components/Testimonials.js'
import { ContextLoadingApp } from '../hooks/ContextLoading'

function HomePage() {
  // loading context
  const { setLoading } = useContext(ContextLoadingApp)?.handleFunction

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(prev => false)
    }, 2000);

    return () => {
      clearTimeout(timeout)
      setLoading(prev => true)
    }
  }, [])

  return (
      <>
        <SocialMediaFixed />
        <Navbar />
        <Home />
        <Service />
        {/* <Portfolio /> */}
        <Client />
        {/* <Testimonials /> */}
        <About />
        {/* <Certifications /> */}
        <Contact />
        <Footer />
      </>
  )
}

export default HomePage