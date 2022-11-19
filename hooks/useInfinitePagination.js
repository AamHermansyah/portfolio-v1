import { useEffect, useState } from "react"
import { collection, query, startAfter, limit, getDocs } from 'firebase/firestore'
import { db } from "../firebase";

export default function useInfinitePagination(collectionName, pageNumber, maxLimit = 10){
    const [data, setData] = useState([]);
    const [lastVisible, setLastVisible] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLastData, setIsLastData] = useState(false);
    const [tempPageNumber, setTempPageNumber] = useState(null);

    useEffect(() => {
        if(!isLastData && !isError && tempPageNumber !== pageNumber){
            setLoading(true);

            const q = 
                pageNumber === 1 ? 
                query(collection(db, collectionName), limit(maxLimit)) :
                query(collection(db, collectionName), startAfter(lastVisible), limit(maxLimit));

            getDocs(q)
                .then(response => {
                    const resData = response.docs.map(doc => ({...doc.data(), id: doc.id}));
                    console.log(resData);
                    if(resData.length > 0 && resData.length === maxLimit){
                        setData([...data, ...resData]);
                        setLastVisible(response.docs[response.docs.length - 1]);
                    } else setIsLastData(true);
                    setTempPageNumber(pageNumber);
                })
                .catch(err => {
                    console.log(err);
                    setIsError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [pageNumber]);

    return { data, isError, loading, isLastData }
}