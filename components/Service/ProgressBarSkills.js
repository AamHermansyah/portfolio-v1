import { SiTailwindcss } from "react-icons/si"

const ProgressBarSkills = ({ data }) => {
    return (
        <div className="w-full">
            {data.map((item, index) => (    
                <div 
                key={`${item.title}-${index}`}
                className="mb-4 flex gap-4 items-end w-full">
                    <div className="w-6 h-6 p-1 box-border bg-white rounded-full flex items-center justify-center mb-2 shadow">
                        {item.icon}
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between mb-1">
                            <span className="text-base font-medium">
                                {item.title}
                            </span>
                            <span className="text-sm font-medium text-blue-700">
                                {item.progress}%
                            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div className="h-2.5 rounded-full" style={{ 
                                width: `${item.progress}%`,
                                backgroundColor: item?.progressColor ? item.progressColor : "rgb(37,99,235)"
                            }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProgressBarSkills