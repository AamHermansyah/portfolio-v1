import Image from 'next/legacy/image'
import Link from 'next/link'
import React from 'react'
import { motion as m } from 'framer-motion'
import { socialMedia } from '../../data'
import { containerShow, itemShow, itemTranslate } from '../../animates'
import profileImage from '../../public/Profile.jpg'
import { SmoothTypingText } from '../CustomText'

function About() {
    return (
        <section className="p-6 sm:p-8 bg-gray-800" id="about">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">About Me</h1>
            <div className="flex flex-col md:flex-row gap-4 mt-3">
                <div className="flex-1 relative w-full aspect-square">
                    <Image src={profileImage} layout="fill" objectFit="cover" objectPosition="bottom center" priority />
                </div>
                <m.div 
                variants={containerShow}
                initial="initial"
                whileInView="animate"
                className="flex-1 text-white lg:px-8 md:px-4 flex items-center">
                    <div>
                        <m.h1 variants={itemShow(.3)} className="text-2xl md:text-3xl font-bold">Aam Hermansyah</m.h1>
                        <m.h3 variants={itemShow(.3)} className="text-primary text-xl">Developer & Designer</m.h3>
                        <SmoothTypingText stagger={0.03} textStyles="text-md mt-4">
                            Hii there, introducing my name is Aam Hermansyah. I am Javascript Developer and Designer. I live in Indonesia from Garut, West Java. I am 19 Years old and still a student at Siliwangi University, Tasikmalaya. I started coding at 17 years old and I have a lot of experience in development web application such as HTML, CSS, JS, Next Js, React Js, Web Animation and others. Besides that, I also have a hobby about designing especially in Vector and Pixel. So, here I can help you for build your web application and design your project.
                        </SmoothTypingText>
                        <div className="flex gap-2 mt-4">
                            {socialMedia.map(social => (
                                <m.div variants={itemTranslate({ x: "100%", y: 0}, { x: 0, y: 0 }, .3)} key={social.title}>
                                    <Link
                                    href={social.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center justify-center text-2xl w-10 h-10 rounded-full shadow-md bg-white text-gray-800 hover:bg-primary hover:text-white transition-all duration-200">
                                        {social.icon}
                                    </Link>
                                </m.div>
                            ))}
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    )
}

export default About