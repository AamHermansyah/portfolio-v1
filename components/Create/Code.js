import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../firebase'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import useLoadingPageSettings from '../../hooks/useLoadingPageSettings'

const CreateMyCode = () => {
    const [loading, setLoading] = useState(false);
    const [errorMessageField, setErrorMessageField] = useState(false);
    const router = useRouter()

    // loading page settings
    const { onEventClick } = useLoadingPageSettings()

    useEffect(() => {
        if(Cookies.get("user_token") === undefined){ 
            onEventClick()
            router.push('/')
        }
    }, []);

    // ref
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const codeRef = useRef(null);

    const postData = () => {
        const title = titleRef.current.value.trim();
        const description = descriptionRef.current.value.trim();
        const code = codeRef.current.value.trim();

        if(title.length < 3){
            return setErrorMessageField('Title must be minimal 3 letters.');
        }

        if(description.split(" ").length < 5){
            return setErrorMessageField('Description field must be minimal 5 words.');
        }

        if(code.length < 10){
            return setErrorMessageField('Code must be minimal 10 characters.');
        }

        setErrorMessageField("")
        setLoading(true)

        const doc = {
            title,
            description,
            code
        }

        addDoc(collection(db, "codes"), doc)
            .then(() => {
                onEventClick()
                router.push('/mycodes')
            })
            .catch((err) => {
                setErrorMessageField(`${err.code}: ${err.message}`);
            })
            .finally(() => {
                setLoading(false);
            })
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

    return (
        <div className="px-2 py-6 min-h-screen mx-auto">
            <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-white">Create New Code</h1>
            <div className="w-full flex flex-col gap-4 sm:p-4 my-4">
                <input
                ref={titleRef}
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="w-full md:w-1/2 bg-gray-100 border border-gray-200 rounded py-2 px-4 block focus:outline-none text-gray-700"
                />
                <div className="w-full h-[1000px] flex text-[.8rem] border border-gray-200 font-firaCode rounded overflow-hidden">
                    <textarea
                    spellCheck={false}
                    onKeyDown={handleTabInput}
                    ref={codeRef}
                    type="text"
                    name="code"
                    id="code"
                    className="whitespace-pre-wrap w-full h-full bg-transparent resize-none focus:outline-none leading-4 p-3"
                    />
                </div>
                <textarea
                ref={descriptionRef}
                type="text"
                name="Description"
                id="Description"
                placeholder="Description"
                className="w-full h-[150px] sm:h-[200px] resize-none bg-gray-100 border border-gray-200 rounded py-2 px-4 block focus:outline-none text-gray-700"
                />
                { errorMessageField && <p className="font-thin text-red-500">{errorMessageField}</p>}
                <div className="text-right">
                    <button 
                    type="button"
                    onClick={() => {
                        onEventClick()
                        router.back()
                    }}
                    disabled={loading}
                    className="w-[160px] mx-auto py-2 px-4 rounded-md text-primary dark:text-white border-2 border-primary dark:border-white text-center disabled:cursor-not-allowed">
                        Back
                    </button>
                    <button 
                    onClick={postData}
                    disabled={loading}
                    className="w-[160px] mx-auto py-2 px-4 ml-4 rounded-md bg-primary border-2 border-primary text-white text-center disabled:cursor-not-allowed">
                        {loading ? <AiOutlineLoading3Quarters fontSize={24} color="#fff" className="animate-spin mx-auto" /> : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateMyCode