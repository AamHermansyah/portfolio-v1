import React from 'react'
import Masonry from 'react-masonry-css'
import Card from './Card'
import { motion as m } from 'framer-motion'

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
      <Masonry className="flex animate-slide-fwd gap-2 md:gap-4" breakpointCols={breakpoints}>
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?jungle',
          title: 'Zetro Website',
          category: 'Frontend Web App'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?nature',
          title: 'Me in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?landscape',
          title: 'Beautiful of website',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?woman',
          title: 'My Girlfriend in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?woods',
          title: 'My Girlfriend in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?landscape',
          title: 'Beautiful of website',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?nature',
          title: 'Me in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?jungle',
          title: 'Zetro Website',
          category: 'Frontend Web App'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?technology',
          title: 'Zetro Website',
          category: 'Frontend Web App'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?nature',
          title: 'Me in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?landscape',
          title: 'Beautiful of website',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?woods',
          title: 'Zetro Website',
          category: 'Frontend Web App'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?nature',
          title: 'Me in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?jungle',
          title: 'Beautiful of website',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?tree',
          title: 'My Girlfriend in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?sand',
          title: 'My Girlfriend in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?tropic',
          title: 'Beautiful of website',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?nature',
          title: 'Me in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?technology',
          title: 'Zetro Website',
          category: 'Frontend Web App'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?mountain',
          title: 'Zetro Website',
          category: 'Frontend Web App'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?nature',
          title: 'Me in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?river',
          title: 'Beautiful of website',
          category: 'Vector Art'
        }} />
      </Masonry>
    </m.section>
  )
}

export default Portfolio