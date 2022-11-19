import React, { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { AiOutlinePlus } from 'react-icons/ai'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'
import Cookies from 'js-cookie'
import CardSkeleton from '../CardSkeleton'
import Masonry from 'react-masonry-css'
import Card from './Card'

const breakpoints = {
    default: 4,
    3000: 5,
    2000: 4,
    1500: 3,
    1000: 2,
    750: 1
}

function Certifications() {
    const [certifications, setCertifications] = useState(null);

    useEffect(() => {
        const getData = async () => {
          const certificationData = await getDocs(collection(db, "certifications"));
          setCertifications(certificationData.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
    
        getData();
    }, []);

    return (
        <div>
            <div className="flex gap-4 justify-center items-center w-full mt-10 mb-4">
                <h1 className="text-xl sm:text-3xl font-bold text-white text-center">My Certifications</h1>
                {Cookies.get("user_token") && Cookies.get("user") && (
                    <Link href="/create/certificate" className="w-10 sm:w-12 h-10 sm:h-12 bg-primary text-white rounded-md flex items-center justify-center">
                        <AiOutlinePlus fontSize={24} />
                    </Link>
                )}
            </div>
            <m.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .5, delay: .5 }}>
                <Masonry className="flex gap-2 md:gap-4" breakpointCols={breakpoints}>
                    {certifications &&  certifications.map((certification, index) => (
                        <Card key={index} data={certification} />
                    ))}

                    {!certifications && <CardSkeleton />}
                    {!certifications && <CardSkeleton />}
                    {!certifications && <CardSkeleton />}
                </Masonry>
            </m.div>
        </div>
    )
}

export default Certifications