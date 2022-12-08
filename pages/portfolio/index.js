import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Portfolio from '../../components/Portfolio'
import { ContextLoadingApp } from '../../hooks/ContextLoading'

function ortfolioPage() {
    // loading context
    const { setLoading } = useContext(ContextLoadingApp)?.handleFunction

    useEffect(() => {
        const timeout = setTimeout(() => {
          setLoading(prev => false)
        }, 2000);
    
        return () => {
          clearTimeout(timeout)
          setLoading(prev => true)
        }
    }, [])

    return (
        <>
            <header className="fixed w-full top-0 flex items-center justify-between bg-white py-4 px-6 sm:px-8 z-10 shadow-md">
                <Link href="/" className="font-extrabold tracking-wider text-gray-800 text-2xl">ATwoM H</Link>
                <div className="flex items-center gap-4">
                    <h1 className="hidden sm:block text-xl font-bold text-gray-800">This is my works</h1>
                    {Cookies.get("user_token") && Cookies.get("user") && (
                        <Link href="/create/portfolio" className="w-10 sm:w-12 h-10 sm:h-12 bg-primary text-white rounded-md flex items-center justify-center">
                            <AiOutlinePlus fontSize={24} />
                        </Link>
                    )}
                </div>
            </header>
            <Portfolio isPage={true} key="portfolio-page" />
        </>
    )
}

export default portfolioPage
