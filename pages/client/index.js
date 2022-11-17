import React from 'react'
import CardClient from '../../components/CardClient'
import { motion as m } from 'framer-motion'
import { containerShow } from '../../animates'

function Client() {
  return (
    <m.section 
    variants={containerShow}
    initial="initial"
    animate="animate"
    exit="exit"
    className="min-h-screen flex lg:flex-row flex-col text-white">
        <div className="lg:flex-1 h-screen flex items-center justify-center lg:justify-start bg-violet-700 px-4">
            <div className="overflow-hidden">
                <m.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: .5, delay: .5 }}
                className="font-rubik text-5xl sm:text-6xl text-center lg:text-left">
                    My Clients
                </m.h1>
            </div>
        </div>
        <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .5, delay: .5 }}
        className="lg:flex-[2.5] flex flex-wrap items-center justify-center p-4 sm:p-6 self-start mt-16 gap-4 sm:gap-6 pb-10">
            <CardClient title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?woods"/>
            <CardClient title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?woods"/>
            <CardClient title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?woods"/>
            <CardClient title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?woods"/>
            <CardClient title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?woods"/>
            <CardClient title="Untitled Blend" image_url="https://source.unsplash.com/random/300x300/?woods"/>
        </m.div>
    </m.section>
  )
}

export default Client