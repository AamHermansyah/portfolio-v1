import Image from 'next/legacy/image'
import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import Link from 'next/link';

function Card({data}) {
    const [imageSize, setSmageSize] = useState({
        width: 1,
        height: 1
       });
    return (
        <div className="w-full mb-4">
            <div className="relative overflow-hidden rounded-lg group cursor-pointer">
                <m.div 
                initial={{ opacity: 0 }}
                transition={{ duration: .5 }}
                whileInView={{ opacity: 1 }}
                whileHover={{
                    scale: 1.2
                }}>
                    <Image
                    src={data.image_url}
                    layout="responsive"
                    objectFit="contain"
                    alt={data.title}
                    onLoadingComplete={target => {
                        setSmageSize({
                            width: target.naturalWidth,
                            height: target.naturalHeight
                        });
                    }}
                    width={imageSize.width}
                    height={imageSize.height}
                    className="w-full"/>
                </m.div>
                <div className="hidden group-hover:flex absolute bottom-0 p-2 justify-between w-full text-sm">
                    <Link href="" className="py-1 px-4 bg-white text-gray-800 rounded-full opacity-70 hover:opacity-100 transition-all duration-200">
                        Demo
                    </Link>
                    <Link href="" className="py-1 px-4 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white rounded-full opacity-70 hover:opacity-100 transition-all duration-200">
                        Code
                    </Link>
                </div>
            </div>
            <div className="mt-2">
                <p className="text-primary sm:text-lg font-bold">{data.title}</p>
                <p className="text-gray-600 text-sm sm:text-base">{data.category}</p>
            </div>
        </div>
    )
}

export default Card