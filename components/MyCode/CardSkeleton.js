const CardSkeleton = () => {
    return (
        <div className="flex flex-col gap-2 w-full border border-gray-300 rounded p-4 animate-pulse">
            <span className="block w-[40%] h-6 sm:h-8 bg-gray-300 rounded-md" />
            <span className="block w-full h-6 sm:h-8 bg-gray-300 rounded-md" />
            <span className="block w-[80%] h-6 sm:h-8 bg-gray-300 rounded-md" />
            <span className="block w-[60px] h-10 mt-2 bg-gray-300 rounded" />
        </div>
    )
}

export default CardSkeleton