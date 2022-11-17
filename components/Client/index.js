import React from 'react'
import Card from './Card'
import { motion as m } from 'framer-motion'
import { containerShow } from '../../animates'

function Client() {
  return (
    <m.section id='client'
    variants={containerShow}
    initial="initial"
    animate="animate"
    exit="exit"
    className="px-4 sm:px-6 mt-20 pb-10">
        <h1 className="text-2xl sm:text-3xl text-gray-700 font-bold">Clients</h1>
        <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .5, delay: .5 }}
        className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-white">
            <Card title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?jungle"/>
            <Card title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?jungle"/>
            <Card title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?jungle"/>
            <Card title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?jungle"/>
            <Card title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?jungle"/>
            <Card title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?jungle"/>
        </m.div>
    </m.section>
  )
}

export default Client