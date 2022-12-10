import Link from "next/link"
import { HiCode } from 'react-icons/hi'
import useLoadingPageSettings from "../../hooks/useLoadingPageSettings"

const Card = ({data}) => {
    const { onEventClick } = useLoadingPageSettings()

    return (
        <div className="w-full border hover:bg-gray-100 dark:hover:bg-gray-900 border-gray-300 rounded p-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">{data.title}</h1>
            <p className="text-slate-500 dark:text-slate-300 font-base text-lg">
                {`${data.description.slice(0, 150)}${data.description.length > 150 ? "..." : ""}`}
            </p>
            <Link 
            onClick={onEventClick}
            href={`/mycodes/${data.id}`} 
            className="block w-max mt-3 bg-primary py-2 px-4 rounded text-white">
                <HiCode fontSize={24} />
            </Link>
        </div>
    )
}

export default Card