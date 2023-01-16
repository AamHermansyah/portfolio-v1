import { useState } from "react"

const TabButtons = ({data, onChange, indexButtonActive, direction = "left"}) => {
    const [activeId, setActiveId] = useState(indexButtonActive ? indexButtonActive : data[0].id)

    const handleClick = (data) => {
        setActiveId(data.id)
        onChange(data)
    }

    return (
        <div className="max-w-[500px] w-full border-b border-gray-200 dark:border-gray-700 mb-4">
            <ul className={`${direction === "right" ? "justify-end" : ""} flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400`}>
                {data.map((item, index) => (
                    <li 
                    onClick={() => handleClick(item)}
                    className="mr-2" key={index}>
                        <button 
                        type="button" 
                        className={`${item.id === activeId ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500" : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} flex items-center gap-2 p-4 border-b-2 rounded-t-lg group`}>
                            {item?.icon ? item.icon : null}
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TabButtons