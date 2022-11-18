import Image from 'next/legacy/image'
import React from 'react'

function CardClient({title, image_url}) {
    return (
        <div className="relative p-4 w-[250px] overflow-hidden rounded-md shadow-lg bg-gradient-to-br from-[#09203F] to-[#537895]">
            <div className="relative flex flex-col justify-center items-center">
                <div className="relative border-white border-[4px] w-20 h-20 rounded-full mb-4 bg-sky-300 overflow-hidden">
                    <Image src={`/api/imageproxy?url=${encodeURIComponent(image_url)}`} layout="fill" objectFit="cover" />
                </div>
                <p className="text-lg">{title}</p>
            </div>
        </div>
    )
}

export default CardClient