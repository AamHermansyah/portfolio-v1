import Image from 'next/legacy/image'
import React from 'react'
import { motion as m } from 'framer-motion'

function Card({image_url, title}) {
  return (
    <div className="w-full p-2 text-white">
        <m.div 
        whileHover={{ borderRadius: "20px" }}
        className="overflow-hidden rounded-md cursor-pointer">
          <m.div 
          whileHover={{ scale: 1.2 }}
          className="relative aspect-video w-full overflow-hidden">
              <Image src={image_url} layout="fill" objectFit="cover" />
          </m.div>
        </m.div>
        <p className="text-lg py-2">{title}</p>
    </div>
  )
}

export default Card