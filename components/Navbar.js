import Link from "next/link"
import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { itemShow, itemTranslate, navAnimation } from "../animates"
import { motion as m } from "framer-motion"
import { navigations } from "../data"
import DarkModeToggle from "./DarkModeToggle"
import useLoadingPageSettings from "../hooks/useLoadingPageSettings"

function Navbar() {
    const [navigation, setNavigation] = useState(false);

    // loading page settings
    const { onEventClick } = useLoadingPageSettings()

    return (
        <header className="fixed w-full top-0 flex items-center justify-between bg-white dark:bg-dark py-4 px-6 sm:px-8 z-10">
            <div className="flex gap-6 items-center">
                <Link href="/" className="font-extrabold tracking-wider text-gray-800 dark:text-primary text-2xl">ATwoM H</Link>
                <DarkModeToggle />
            </div>
            <nav className="hidden lg:flex gap-6 ml-6 font-sans font-semibold text-gray-800 dark:text-white">
                {navigations.map(list => (
                    <Link href={list?.href ? list.href : '/'} onClick={(e) => {
                        if(!list.isPage){
                            e.preventDefault()
                            document.getElementById(list.id).scrollIntoView({ behavior: "smooth" })
                        } else onEventClick()
                    }}
                    key={list.id} 
                    className={`${list.id === 'contact' ? 'bg-primary rounded-full text-white py-2 px-6' : 'p-2' } cursor-pointer`} >
                        { list.title }
                    </Link>
                ))}
            </nav>
            <div className="lg:hidden cursor-pointer" onClick={() => setNavigation(true)}>
                <FiMenu fontSize={26} />
            </div>
        
            <m.div
            variants={navAnimation}
            animate={navigation ? "animate" : "initial"}
            className="lg:hidden fixed inset-0 p-10 font-bold flex flex-col items-end justify-center gap-y-1 bg-white dark:bg-dark translate-x-[100%]">
                <m.div 
                variants={itemShow(.3)}
                className="absolute top-0 right-0 p-[22px] cursor-pointer" onClick={() => setNavigation(false)}>
                    <MdClose fontSize={28} />
                </m.div>
                {navigations.map(list => (
                    <div className="overflow-hidden" key={list.id}>
                        <m.div
                        className={`${list.id === 'contact' ? 'bg-primary rounded-full text-white py-2 px-6 mt-4' : 'p-2' } cursor-pointer`}
                        variants={itemTranslate({ y: "105%", x: 0 }, {y: "0%", x: 0}, .3)}>
                            <Link 
                            href={list?.href ? list.href : '/'} 
                            onClick={(e) => {
                                if(!list.isPage){
                                    e.preventDefault()
                                    document.getElementById(list.id).scrollIntoView({ behavior: "smooth" })
                                } else onEventClick()
                                setNavigation(false)
                            }}>
                                { list.title }
                            </Link>
                        </m.div>
                    </div>
                ))}
            </m.div>
        </header>
    )
}

export default Navbar
