import Image from 'next/legacy/image'
import React from 'react'

function CardClient({title, image_url}) {
    return (
        <div className="relative p-4 w-[250px] overflow-hidden rounded-md shadow-lg">
            <div className="absolute inset-0 bg-green-300 blur-xl">
                <div className="absolute w-[150px] h-[150px] -bottom-[50%] -right-[8%] bg-pink-300 rounded-full" />
                <div className="absolute w-[200px] h-[200px] -top-[50%] -right-[20%] bg-sky-300 rounded-full" />
                <div className="absolute w-[200px] h-[200px] -top-[70%] -left-[20%] bg-yellow-200 rounded-full" />
            </div>
            <div className="relative flex flex-col justify-center items-center">
                <div className="relative border-white border-[4px] w-20 h-20 rounded-full mb-4 bg-sky-300 overflow-hidden">
                    <Image src={image_url} layout="fill" objectFit="cover" />
                </div>
                <p className="text-lg">{title}</p>
            </div>
        </div>
    )
}

export default CardClient