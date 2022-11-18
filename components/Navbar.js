import Link from "next/link"
import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { itemShow, itemTranslate } from "../animates"
import { motion as m } from "framer-motion"
import { navigations } from "../data"

const navAnimation = {
    initial: {
        opacity: 0,
        x: "100%"
    },
    animate: {
        opacity: 1,
        x: "0%",
        transition: {
            when: "beforeChildren",
            staggerChildren: .2
        }
    }
}

function Navbar() {
    const [navigation, setNavigation] = useState(false);

    return (
        <header className="fixed w-full top-0 flex items-center justify-between bg-white py-4 px-6 sm:px-8 z-10">
            <Link href="/" className="font-rubik tracking-wider text-gray-800 text-2xl">ATwoM H</Link>
            <nav className="hidden lg:flex gap-6 ml-6 font-sans font-semibold">
                {navigations.map(list => (
                    <div onClick={() => document.getElementById(list.id).scrollIntoView({ behavior: "smooth" })}
                    key={list.id} 
                    className={`${list.id === 'contact' ? 'bg-primary rounded-full text-white py-2 px-6' : 'p-2' } cursor-pointer`} >
                        { list.title }
                    </div>
                ))}
            </nav>
            <div className="lg:hidden cursor-pointer" onClick={() => setNavigation(true)}>
                <FiMenu fontSize={26} />
            </div>
        
            <m.div
            variants={navAnimation}
            animate={navigation ? "animate" : "initial"}
            className="lg:hidden fixed inset-0 p-10 font-bold flex flex-col items-end justify-center gap-y-1 bg-white">
                <m.div 
                variants={itemShow(.3)}
                className="absolute top-0 right-0 p-[22px] cursor-pointer" onClick={() => setNavigation(false)}>
                    <MdClose fontSize={28} />
                </m.div>
                {navigations.map(list => (
                    <div className="overflow-hidden" key={list.id}>
                        <m.div onClick={() => {
                            setNavigation(false);
                            document.getElementById(list.id).scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`${list.id === 'contact' ? 'bg-primary rounded-full text-white py-2 px-6 mt-4' : 'p-2' } cursor-pointer`}
                        variants={itemTranslate({ y: "105%", x: 0 }, {y: "0%", x: 0}, .3)}>
                            { list.title }
                        </m.div>
                    </div>
                ))}
            </m.div>
        </header>
    )
}

export default Navbar