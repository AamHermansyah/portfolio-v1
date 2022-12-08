import Image from "next/legacy/image"
import Typewriter from "typewriter-effect"
import { motion as m } from "framer-motion"
import Link from "next/link"
import { containerTranslate } from "../../animates"

import { BsArrowRightShort } from "react-icons/bs"

export default function Home(){
    return (
        <section id="home" className="overflow-hidden">
            <m.div 
            variants={containerTranslate({y: "100%"}, { y: 0 }, .5)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative h-screen max-h-[1000px] overflow-hidden flex lg:flex-row flex-col items-center justify-center">
                <m.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                className="text-white h-screen px-6 flex lg:justify-center justify-start pt-28 lg:pt-0 flex-col lg:flex-1 w-full tracking-wider bg-gray-800">
                    <m.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: .3, delay: .2 }}
                    className="font-extrabold">
                        <h1 className="text-5xl md:text-6xl">Hii.. I am</h1>
                        <h2 className="text-4xl md:text-5xl mt-2">Aam Hermansyah</h2>
                        <h2 className="text-3xl md:text-4xl mt-2 md:mt-4 text-primary">
                            <Typewriter 
                            options={{ loop: true }}
                            onInit={typewriter => {
                                typewriter
                                .pauseFor(2000)
                                .typeString('Javascript Developer')
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString('& Graphic Designer')
                                .pauseFor(1000)
                                .start()
                            }}/>
                        </h2>
                    </m.div>
                    <div className="mt-6 overflow-hidden z-[5]">
                        <p className="font-primary text-lg sm:text-xl">I can help you for build your web application <br className="lg:hidden" />and design your project. So, let&apos;s talk!</p>
                        <m.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: .3, delay: .3 }}
                        >
                            <Link href="https://drive.google.com/uc?export=view&id=1neDoNiIvIDs28XudPxK267cFb-4OSxUL" target="_blank" rel="noreferrer"
                            className="flex gap-2 items-center mt-4 py-3 px-6 bg-white text-black font-bold font-primary w-max rounded-full">
                                Download CV
                                <m.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                                    <BsArrowRightShort fontSize={24} />
                                </m.div>
                            </Link>
                        </m.div>
                    </div>
                </m.div>
                <div 
                className="relative hidden lg:flex-[1.5] w-full h-full lg:block">
                    <Image src="/hero.jpg" layout="fill" objectFit="cover"  alt="hero" priority />
                </div>
            </m.div>
        </section>
    )
}
