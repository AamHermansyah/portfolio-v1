import React from 'react'
import Masonry from 'react-masonry-css'
import Card from '../../components/Card'
import { motion as m } from 'framer-motion'

const breakpoints = {
  default: 4,
  3000: 6,
  1700: 5,
  1200: 4,
  1000: 3,
  700: 2
}

function Portfolio() {

  return (
    <m.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .3}}
    className="min-h-screen mt-14 p-4 sm:p-8">
      <Masonry className="flex animate-slide-fwd gap-2 md:gap-4" breakpointCols={breakpoints}>
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
          image_url: 'https://source.unsplash.com/random/?woman',
          title: 'My Girlfriend in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?woman',
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
          image_url: 'https://source.unsplash.com/random/?technology',
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
          image_url: 'https://source.unsplash.com/random/?woman',
          title: 'My Girlfriend in vector',
          category: 'Vector Art'
        }} />
        <Card data={{
          image_url: 'https://source.unsplash.com/random/?woman',
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
          image_url: 'https://source.unsplash.com/random/?technology',
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
      </Masonry>
    </m.section>
  )
}

export default Portfolio