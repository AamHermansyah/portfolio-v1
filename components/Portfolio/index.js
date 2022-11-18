import React from 'react'
import Masonry from 'react-masonry-css'
import Card from './Card'
import { motion as m } from 'framer-motion'
import { portfolios } from '../../data'

const breakpoints = {
  default: 4,
  3000: 6,
  1700: 5,
  1200: 4,
  1000: 3,
  700: 2,
  500: 1
}

function Portfolio() {

  return (
    <m.section id="portfolio"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .3}}
    className="mt-14 p-4 sm:p-8">
      <div>
        <h1 className="text-2xl sm:text-3xl mb-3 text-gray-700 font-bold">My Works</h1>
      </div>
      <Masonry className="flex gap-2 md:gap-4" breakpointCols={breakpoints}>
        {portfolios.map((portfolio, index) => (
          <Card data={portfolio} key={index} />
        ))}
      </Masonry>
    </m.section>
  )
}

export default Portfolio