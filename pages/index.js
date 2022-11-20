import { AnimatePresence } from 'framer-motion'
import React from 'react'
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

function HomePage() {
  return (
      <>
      <SocialMediaFixed />
        <AnimatePresence mode='wait'>
          <Navbar key={1} />
          <Home key={2} />
          <Service key={3} />
          <Portfolio key={4} />
          <Client key={5} />
          <Testimonials key={6} />
          <About key={7} />
          <Certifications key={8} />
        </AnimatePresence>
        <Contact />
        <Footer />
      </>
  )
}

export default HomePage