import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'
import { motion as m, useAnimationControls } from 'framer-motion'
import Link from 'next/link';
import { scaleAnimate } from '../../animates';

function Card({data}) {
    const [imageSize, setSmageSize] = useState({
        width: 1,
        height: 1
       });
    const [onHoverDisplay, setOnHoverDisplay] = useState(false);
    const controls = useAnimationControls();

    useEffect(() => {
        onHoverDisplay && controls.start("animate");
        !onHoverDisplay && controls.start("initial");
    }, [onHoverDisplay]);
    
    return (
        <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .5, delay: .5 }}
        className="w-full mb-4">
            <div 
            onMouseEnter={() => setOnHoverDisplay(true)}
            onMouseLeave={() => setOnHoverDisplay(false)}
            className="relative overflow-hidden rounded-lg group cursor-pointer">
                <m.div 
                variants={scaleAnimate}
                initial="initial"
                animate={controls}>
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
                    {data?.demo_url && (
                        <Link href={data.demo_url} target="_blank" rel="noreferrer" className="py-1 px-4 bg-white text-gray-800 rounded-full opacity-70 hover:opacity-100 transition-all duration-200">
                            Demo
                        </Link>
                    )}
                    {data?.code_url && (
                        <Link href={data?.code_url} target="_blank" rel="noreferrer" className="py-1 px-4 bg-gradient-to-tr from-blue-500 to-violet-500 text-white rounded-full opacity-70 hover:opacity-100 transition-all duration-200">
                            Code
                        </Link>
                    )}
                </div>
            </div>
            <div className="mt-2">
                <p className="text-primary sm:text-lg font-bold">{data.title}</p>
                <p className="text-gray-600 text-sm sm:text-base">{data.category}</p>
            </div>
        </m.div>
    )
}

export default Card