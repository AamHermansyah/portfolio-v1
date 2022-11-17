import React from 'react'
import Client from '../components/Client'
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
    </>
  )
}

export default HomePage