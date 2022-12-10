import Cookies from "js-cookie"
import Link from "next/link"
import { AiOutlinePlus } from "react-icons/ai"
import DarkModeToggle from "../../components/DarkModeToggle"
import Footer from "../../components/Footer"
import ListCode from "../../components/MyCode/ListCodes"
import useLoadingPageSettings from "../../hooks/useLoadingPageSettings"

const MyCodesPage = () => {
    // loading page settings
    const { loading, onEventClick } = useLoadingPageSettings()

    if(loading) return null

    return (
        <>
            <header className="fixed w-full top-0 flex items-center justify-between bg-white dark:bg-dark py-4 px-6 sm:px-8 z-10 shadow-md">
                <div className="flex items-center gap-4">
                    <Link onClick={onEventClick} href="/" className="font-extrabold tracking-wider text-gray-800 dark:text-primary text-2xl">ATwoM H</Link>
                    <DarkModeToggle />
                </div>
                <div className="flex items-center gap-4 text-gray-800 dark:text-white">
                    {Cookies.get("user_token") && Cookies.get("user") && (
                        <Link href="/create/code" className="w-10 sm:w-12 h-10 sm:h-12 bg-primary text-white rounded-md flex items-center justify-center">
                            <AiOutlinePlus fontSize={24} />
                        </Link>
                    )}
                </div>
            </header>
            <ListCode />
            <Footer />
        </>
    )
}

export default MyCodesPage