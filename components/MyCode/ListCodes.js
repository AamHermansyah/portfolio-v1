import { useCallback, useRef, useState } from 'react';
import useInfinitePagination from '../../hooks/useInfinitePagination';
import CardSkeleton from './CardSkeleton';
import Card from './Card';

const LIMIT_PER_PAGE = 10;

const ListCode = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { data, isError, isLastData, loading } = useInfinitePagination("codes", pageNumber, LIMIT_PER_PAGE);

    // observer ref
    const observer = useRef();
    const lastDataElementRef = useCallback(node => {
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && !isLastData){
                setPageNumber(previousPage => previousPage + 1);
            }
        })
        if(node) observer.current.observe(node);
    }, [loading, isLastData]);

    return (
        <section className="p-4 mt-14 md:mt-16">
            <h1 className="my-4 text-2xl font-bold">My Library Codes</h1>
            <div className="grid place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {!isError && data
            .map((code, index) => {
                if(data.length === index + 1 && !isLastData) return (
                <div ref={lastDataElementRef}>
                    <Card key={index} data={code} />
                </div>
                )
                return <Card key={index} data={code} />
            })}

            {loading && <CardSkeleton key='loading-1' />}
            {loading && <CardSkeleton key='loading-2' />}
            {loading && <CardSkeleton key='loading-3' />}
            {loading && <CardSkeleton key='loading-4' />}
            {loading && <CardSkeleton key='loading-5' />}
            </div>

            {(!loading && !isError && data.length === 0) && <h1 className="text-lg text-gray-800 dark:text-white text-center mb-2">Library Codes is empty{":("}</h1>}
            {isError && <h1 className="text-lg text-gray-800 dark:text-white text-center mb-2">Something is wrong... Error code: 500</h1>}
        </section>
    )
}

export default ListCode