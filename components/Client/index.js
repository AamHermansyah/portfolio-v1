import React from 'react'
import Card from './Card'
import { motion as m } from 'framer-motion'
import { containerShow } from '../../animates'
import { clients } from '../../data'

function Client() {
  return (
    <m.section id='client'
    variants={containerShow}
    initial="initial"
    animate="animate"
    exit="exit"
    className="px-4 sm:px-6 pt-10 pb-10">
        <h1 className="text-2xl sm:text-3xl text-gray-800 dark:text-white font-bold text-center">Clients</h1>
        <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: .5, delay: .5 }}
        className="w-full flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 text-white">
          {clients.map((client, index) => (
            <Card key={index} title={client.title} image_url={client.image_url} />
          ))}
        </m.div>
    </m.section>
  )
}

export default Client