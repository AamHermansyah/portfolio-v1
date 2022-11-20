import Image from 'next/legacy/image'
import React from 'react'

function CardClient({title, image_url}) {
    return (
        <div className="relative p-4 w-[250px] overflow-hidden rounded-md shadow-lg bg-gradient-to-br to-[#09203F] from-[#537895]">
            <div className="relative flex flex-col justify-center items-center">
                <div className="relative border-white border-[4px] w-20 h-20 rounded-full mb-4 bg-sky-200 overflow-hidden">
                    <Image src={`/api/imageproxy?url=${encodeURIComponent(image_url)}`} layout="fill" objectFit="cover" alt={`${title} client`} />
                </div>
                <p className="text-lg">{title}</p>
            </div>
        </div>
    )
}

export default CardClient