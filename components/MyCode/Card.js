import Link from "next/link"
import { HiCode } from 'react-icons/hi'
import useLoadingPageSettings from "../../hooks/useLoadingPageSettings"

const Card = ({data}) => {
    const { onEventClick } = useLoadingPageSettings()

    return (
        <div className="w-full border hover:bg-gray-100 dark:hover:bg-gray-900 border-gray-300 rounded p-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">{data.title}</h1>
            <p className="text-slate-500 dark:text-slate-300 font-base text-lg">
                {`${data.description.slice(0, 100)}${data.description.length > 100 ? "..." : ""}`}
            </p>
            <div className="flex gap-[.5em] flex-1 flex-wrap py-2">
                {data?.tags.map((tag, index) => (
                    <div
                    key={index}
                    className="flex items-center gap-1 w-max text-sm bg-slate-200 dark:bg-dark border-[1px] border-slate-200 rounded px-1.5 py-0.5 text-gray-800 dark:text-white">
                        <span className="relative top-0.5">{tag}</span>
                    </div>
                ))}
            </div>
            <Link 
            onClick={onEventClick}
            href={`/mycodes/${data.id}`} 
            className="block w-max bg-primary mt-3 py-2 px-4 rounded text-white">
                <HiCode fontSize={24} />
            </Link>
        </div>
    )
}

export default Card