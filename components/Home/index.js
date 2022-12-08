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
            className="flex lg:flex-row flex-col items-center justify-center">
                <m.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
                className="text-white lg:min-h-screen lg:max-h-[900px] h-max w-full px-6 flex lg:justify-center justify-start pt-28 lg:pt-0 flex-col lg:flex-1 tracking-wider">
                    <m.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: .3, delay: .2 }}
                    className="font-extrabold text-gray-800 dark:text-white">
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
                    <div className="my-6 overflow-hidden z-[5]">
                        <p className="font-primary text-lg sm:text-xl text-gray-800 dark:text-white">I can help you for build your web application <br className="lg:hidden" />and design your project. So, let&apos;s talk!</p>
                        <m.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: .3, delay: .3 }}
                        className="mt-10"
                        >
                            <Link href="https://drive.google.com/uc?export=view&id=1neDoNiIvIDs28XudPxK267cFb-4OSxUL" target="_blank" rel="noreferrer"
                            className="flex gap-2 items-center mt-4 py-3 px-6 bg-primary text-white font-bold font-primary w-max rounded-full">
                                Download CV
                                <m.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                                    <BsArrowRightShort fontSize={24} />
                                </m.div>
                            </Link>
                        </m.div>
                    </div>
                </m.div>
                <div className="lg:flex-[1.5] flex-1 w-full flex items-center justify-center p-6 pt-14">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                        <Image src="/hero.jpg" layout="fill" objectFit="cover"  alt="hero" priority />
                    </div>
                </div>
            </m.div>
        </section>
    )
}
