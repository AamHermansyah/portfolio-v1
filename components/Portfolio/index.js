import React, { useCallback, useRef, useState } from 'react'
import Masonry from 'react-masonry-css'
import Card from './Card'
import { motion as m } from 'framer-motion'
import CardSkeleton from '../CardSkeleton'
import { AiOutlinePlus } from 'react-icons/ai'
import Link from 'next/link'
import Cookies from 'js-cookie'
import useInfinitePagination from '../../hooks/useInfinitePagination'
import { map } from '@firebase/util'

const breakpoints = {
  default: 4,
  3000: 5,
  1700: 4,
  1000: 3,
  800: 2,
  500: 1
}

const LIMIT_PER_PAGE = 10;

function Portfolio({isPage}) {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isError, isLastData, loading } = useInfinitePagination("works", pageNumber, LIMIT_PER_PAGE);

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
    <m.section id="portfolio"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .3}}
    className="mt-14 p-4 sm:p-8">
      {isPage && <h1 className="block sm:hidden text-xl font-bold text-gray-800 mt-4">This is my works</h1>}
      <div className={`${isPage ? 'justify-end' : 'justify-between'} flex items-center mb-3`}>
        {!isPage && <h1 className="text-2xl sm:text-3xl text-gray-700 font-bold">My Works</h1>}
        {Cookies.get("user_token") && Cookies.get("user") && (
          <Link href="/create/portfolio" className="w-10 sm:w-12 h-10 sm:h-12 bg-primary text-white rounded-md flex items-center justify-center">
            <AiOutlinePlus fontSize={24} />
          </Link>
        )}
      </div>

      {!loading && !isError && !data && <h1 className="text-lg text-gray-800 text-center mb-2">Portfolio is empty{":("}</h1>}

      {isError && <h1 className="text-lg text-gray-800 text-center mb-2">Something is wrong... Error code: 500</h1>}

      <div>
        <Masonry className="flex gap-2 md:gap-4" breakpointCols={breakpoints}>
          {!loading && data && data
          .map((portfolio, index) => {
            if(data.length === index + 1 && !isLastData && isPage) return (
              <div ref={lastDataElementRef}>
                <Card key={index} data={portfolio} />
              </div>
            )
            return <Card key={index} data={portfolio} />
          })}

          {loading && <CardSkeleton />}
          {loading && <CardSkeleton />}
          {loading && <CardSkeleton />}
          {loading && <CardSkeleton />}
          {loading && <CardSkeleton />}
        </Masonry>
        {!isPage && (
          <Link 
          href="/portfolio"
          className="block w-max mx-auto mt-4 py-2 px-4 rounded-md text-primary border-2 border-primary text-center disabled:cursor-not-allowed">
              See more
          </Link>
        )}
      </div> 
    </m.section>
  )
}

export default Portfolio