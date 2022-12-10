import React, { useEffect, useState } from 'react'
import { AiFillWarning, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BsFileEarmarkCode, BsPencilSquare } from 'react-icons/bs'
import { db } from '../../firebase'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import useLoadingPageSettings from '../../hooks/useLoadingPageSettings'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { MdLibraryAddCheck } from 'react-icons/md'

const CodeDetail = () => {
    const [data, setData] = useState({})
    const [inputData, setInputData] = useState({title: 'Loading...', description: "Loading...", code: "Loading..."})
    const [mode, setMode] = useState("read")
    const [loading, setLoading] = useState(false)
    const [errorMessageField, setErrorMessageField] = useState(false)
    const [fetchEditMessage, setFetchEditMessage] = useState('idle')
    // copy handle state
    const [isErrorCopyTextStatus, setIsErrorCopyTextStatus] = useState(false)
    const [copyTextAlertDisplay, setCopyTextAlertDisplay] = useState(false)
    const [copying, setCopying] = useState(false)

    const router = useRouter()

    // query
    const { id } = router.query

    // loading page settings
    const { onEventClick } = useLoadingPageSettings()

    const copyText = (str) => (event) => {
        event.preventDefault()
        setCopying(prev => true)
        if(!copyTextAlertDisplay){
            navigator.clipboard
                .writeText(str)
                .then(() => setIsErrorCopyTextStatus(false))
                .catch(() => setIsErrorCopyTextStatus(true))
                .finally(() => {
                    setCopying(prev => false)
                    setCopyTextAlertDisplay(true)
                });
        }
    }

    const postData = () => {
        if(Cookies.get("user_token") === undefined && !data?.id) return

        const { title, description, code } = inputData

        if(title.length < 3) return setErrorMessageField('Title must be minimal 3 letters.');
        if(description.split(" ").length < 5) return setErrorMessageField('Description field must be minimal 5 words.');
        if(code.length < 10) return setErrorMessageField('Code must be minimal 10 characters.');

        setErrorMessageField("")

        if(!(data.title === inputData.title) || !(data.description === inputData.description) || !(data.code === inputData.code)){
            setLoading(true)

            const docRef = doc(db, "codes", data.id);

            updateDoc(docRef, inputData)
            .then(() => {
                setData(inputData)
                setMode("read")
                setFetchEditMessage("Data changed successfully.")
            })
            .catch((err) => {
                setFetchEditMessage(`${err.code}: ${err.message}`);
            })
            .finally(() => {
                setLoading(false)
                setTimeout(() => {
                    setFetchEditMessage('idle')
                }, 3000);
            })
        } else {
            setFetchEditMessage("No data changed")
            setTimeout(() => {
                setFetchEditMessage('idle')
            }, 3000);
        }
    }

    const handleTabInput = (e) => {
        if (e.key == "Tab") {
            e.preventDefault()

            const target = e.target;
            let start = target.selectionStart;
            let end = target.selectionEnd;

            target.value = target.value.substring(0, start) + "\t" + target.value.substring(end);
            target.selectionStart = target.selectionEnd = start + 1;
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCopyTextAlertDisplay(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        }
    }, [copyTextAlertDisplay]);

    useEffect(() => {
        async function getDocument (coll, id) {
            const snap = await getDoc(doc(db, coll, id))
            if (snap.exists())
                return snap.data()
            else {
                onEventClick()
                router.push('/mycodes')
            }
        }
          
        getDocument("codes", id)
            .then(res => {
                if(res){
                    setData({...res, id});
                    setInputData({...res, id})
                }
            })
            .catch(err => {
                onEventClick()
                router.push("/mycodes")
            })
    }, [id]);

    return (
        <section className="p-4 mt-14 md:mt-16">
            <div className="fixed bottom-0 left-0 flex flex-col gap-2 m-4 z-10">
                {fetchEditMessage !== "idle" && (
                    <div className="flex gap-2 items-center w-max py-2 px-4 bg-white text-gray-800 rounded-md shadow-md">
                        {fetchEditMessage}
                        <MdLibraryAddCheck fontSize={24} color="#43A047" />
                    </div>
                )}
                {copyTextAlertDisplay && !isErrorCopyTextStatus && (
                    <div className="flex gap-2 items-center w-max py-2 px-4 bg-white text-gray-800 rounded-md shadow-md">
                        Success copied
                        <MdLibraryAddCheck fontSize={24} color="#43A047" />
                    </div>
                )}
                {copyTextAlertDisplay && isErrorCopyTextStatus && (
                    <div className="flex gap-2 items-center w-max py-2 px-4 bg-white text-gray-800 rounded-md shadow-md">
                        Failed copied
                        <AiFillWarning fontSize={24} color="#F44336" />    
                    </div>
                )}
            </div>
            <div className="w-full flex flex-col gap-4 sm:p-4 my-4">
                <div className="flex justify-between gap-4 items-center">
                    <input
                    value={inputData.title}
                    onChange={e => setInputData(prev => ({ ...prev, title: e.target.value }))}
                    readOnly={mode === "read"}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="w-full bg-gray-100 border border-gray-200 rounded py-2 px-4 block focus:outline-none text-gray-700"
                    />
                    {Cookies.get("user_token") !== undefined && (
                        <button
                        type="button"
                        disabled={!data?.id}
                        onClick={e => {
                            e.target.previousElementSibling.focus()
                            setMode("edit")
                        }}
                        className="flex gap-1 w-max bg-primary py-2 px-4 rounded text-white">
                            Edit
                            <BsPencilSquare fontSize={24} className="ml-2" />
                        </button>
                    )}
                </div>
                <div className="relative w-full h-[1000px] flex text-[.8rem] border border-gray-200 font-firaCode rounded overflow-hidden">
                    {mode === "read" && (
                        <button
                        type="button"
                        disabled={!data?.id || copying}
                        onClick={copyText(data.code)}
                        className="p-1 aspect-square absolute top-2 right-5 rounded-md text-white bg-gray-800 dark:text-gray-800 dark:bg-white">
                            {copying ? 
                                <AiOutlineLoading3Quarters fontSize={24} className="animate-spin mx-auto" />
                                : <BsFileEarmarkCode fontSize={24} />
                            }
                        </button>
                    )}
                    <textarea
                    value={inputData.code}
                    onChange={e => setInputData(prev => ({ ...prev, code: e.target.value }))}
                    readOnly={mode === "read"}
                    spellCheck={false}
                    onKeyDown={handleTabInput}                    
                    type="text"
                    name="code"
                    id="code"
                    className="whitespace-pre-wrap w-full h-full bg-transparent resize-none focus:outline-none leading-4 p-3"
                    />
                </div>
                <textarea
                value={inputData.description}
                onChange={e => setInputData(prev => ({ ...prev, description: e.target.value }))}
                readOnly={mode === "read"}
                type="text"
                name="Description"
                id="Description"
                placeholder="Description"
                className="w-full h-[150px] sm:h-[200px] resize-none bg-gray-100 border border-gray-200 rounded py-2 px-4 block focus:outline-none text-gray-700"
                />
                { errorMessageField && <p className="font-thin text-red-500">{errorMessageField}</p>}
                { mode !== "read" && (
                    <div className="text-right">
                        <button 
                        type="button"
                        onClick={() => {
                            setInputData(data)
                            setMode("read")
                        }}
                        disabled={loading}
                        className="w-[160px] mx-auto py-2 px-4 rounded-md text-primary dark:text-white border-2 border-primary dark:border-white text-center disabled:cursor-not-allowed">
                            Cancel
                        </button>
                        <button 
                        onClick={postData}
                        disabled={loading}
                        className="w-[160px] mx-auto py-2 px-4 ml-4 rounded-md bg-primary border-2 border-primary text-white text-center disabled:cursor-not-allowed">
                            {loading ? <AiOutlineLoading3Quarters fontSize={24} color="#fff" className="animate-spin mx-auto" /> : 'Save'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default CodeDetail