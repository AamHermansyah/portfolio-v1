import Image from "next/legacy/image"
import Link from "next/link"
import {motion as m} from "framer-motion"
import { containerTranslate, itemTranslate } from "../animates"
import { BsArrowRightShort } from "react-icons/bs"
import banner1 from "../public/banner-1.jpg"
import banner2 from "../public/banner-2.jpg"
import banner3 from "../public/banner-3.jpg"
import banner4 from "../public/banner-4.jpg"

export default function Home(){
    return (
        <m.section
        variants={containerTranslate({x: "100%"}, {x: 0}, .3)}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative h-screen overflow-hidden flex lg:flex-row flex-col items-center justify-center">
            <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="text-white h-screen px-6 flex lg:justify-center justify-start pt-28 lg:pt-0 flex-col lg:flex-1 w-full tracking-wider bg-[#1660E7]">
                <m.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: .3, delay: .2 }}
                className="font-rubik">
                    <h1 className="text-5xl md:text-7xl">Hii.. I am</h1>
                    <h2 className="text-3xl md:text-5xl mt-2">Aam Hermansyah <br/>Developer & Designer</h2>
                </m.div>
                <div className="mt-6 overflow-hidden z-[5]">
                    <p className="font-primary text-lg sm:text-xl">I can help you for build your web application. So, let&apos;s talk!</p>
                    <m.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: .3, delay: .3 }}
                    >
                        <Link href="/contact" className="flex gap-2 items-center mt-4 py-3 px-6 bg-white text-black font-bold font-primary w-max rounded-full">
                            Touch with me
                            <m.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                                <BsArrowRightShort fontSize={24} />
                            </m.div>
                        </Link>
                    </m.div>
                </div>
            </m.div>
            <div 
            className="absolute lg:static top-[50%] md:top-[45%]  lg:flex-[1.5] w-full max-w-[600px] lg:max-w-full lg:mt-0 grid grid-cols-2 p-4 self-end lg:self-center">
                <m.div 
                variants={itemTranslate({}, { x: '10%', y: '20%' }, .3)}
                className="relative aspect-video border-2 border-white z-[1]">
                    <Image src={banner1} layout="fill" objectFit="cover" alt="banner photo" priority />
                </m.div>
                <m.div 
                variants={itemTranslate({}, { x: '-15%', y: '-10%' }, .3)}
                className="relative aspect-video border-2 border-white">
                    <Image src={banner2} layout="fill" objectFit="cover"  alt="banner photo" priority />
                </m.div>
                <m.div 
                variants={itemTranslate({ x: '5%', y: '5%'}, {x: "0%", y: "0%"}, .3)}
                className="relative aspect-video border-2 border-white">
                    <Image src={banner3} layout="fill" objectFit="cover"  alt="banner photo" priority />
                </m.div>
                <m.div 
                variants={itemTranslate({}, { x: '0%', y: '-15%'}, .3)}
                className="relative -top-[20%] aspect-video border-2 border-white">
                    <Image src={banner4} layout="fill" objectFit="cover"  alt="banner photo" priority />
                </m.div>
            </div>
        </m.section>
    )
}
