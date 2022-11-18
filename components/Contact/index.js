import React, { useEffect, useState } from 'react'
import { FcInvite, FcPhoneAndroid } from "react-icons/fc"
import { MdLibraryAddCheck } from "react-icons/md"
import { AiFillWarning } from "react-icons/ai"

function Contact() {
    const [isErrorCopyTextStatus, setIsErrorCopyTextStatus] = useState(false);
    const [copyTextAlertDisplay, setCopyTextAlertDisplay] = useState(false);

    const copyText = (str) => (event) => {
        event.preventDefault();
        if(!copyTextAlertDisplay){
            navigator.clipboard
                .writeText(str)
                .then(() => setIsErrorCopyTextStatus(false))
                .catch(() => setIsErrorCopyTextStatus(true))
                .finally(() => setCopyTextAlertDisplay(true));
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

    return (
        <section className="mt-10 w-full p-4 max-w-[800px] mx-auto pb-10" id="contact">
            {copyTextAlertDisplay && (
                <div className="fixed bottom-0 left-0 flex items-center gap-2 py-2 px-4 m-4 bg-white rounded-md shadow-md">
                    {!isErrorCopyTextStatus ? (
                        <>
                            Success copied
                            <MdLibraryAddCheck fontSize={24} color="#43A047" />
                        </>
                    ) : (
                        <>
                            Failed copied
                            <AiFillWarning fontSize={24} color="#F44336" />    
                        </>
                    )}
                </div>
            )}
            <div className="mt-4">
                <h1 className="text-center text-2xl sm:text-3xl font-bold">Take A Coffee And Chat With Me😊</h1>
            </div>
            <div className="flex justify-center sm:justify-between flex-wrap mt-4 gap-4">
                <div 
                onClick={copyText('amzhermanzyah@gmail.com')}
                className="flex gap-2 items-center py-3 px-4 bg-sky-100 rounded-md cursor-pointer">
                    <FcInvite fontSize={24} />
                    amzhermanzyah@gmail.com
                </div>
                <div 
                onClick={copyText('+6282316126449')}
                className="flex gap-2 items-center py-3 px-4 bg-red-100 rounded-md cursor-pointer">
                    <FcPhoneAndroid fontSize={24} />
                    +62 - (82) 316 - 126 - 449
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
                <div>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Enter your name" 
                    className="w-full bg-gray-100 border border-gray-200 rounded py-2 px-4 block focus:outline-none text-gray-700"
                    />
                </div>
                <div className="inline-flex bg-gray-100 rounded border border-gray-200">
                    <div className="inline bg-gray-200 py-2 px-4 text-gray-600">@</div>
                    <input
                    name="email"
                    id="email"
                    type="text"
                    placeholder="(Ex. amzhermanzyah@gmail.com)"
                    className="w-full bg-transparent border-transparent py-1 text-gray-600 px-4 focus:outline-none"
                    />
                </div>
                <div>
                    <textarea
                    type="text" 
                    name="message" 
                    id="message" 
                    placeholder="Enter your message" 
                    className="w-full h-[250px] sm:h-[300px] bg-gray-100 border border-gray-200 rounded py-2 px-4 block focus:outline-none text-gray-700 resize-none"
                    />
                </div>
                <button className="w-max mx-auto py-2 px-4 rounded-md bg-primary text-white mt-4">Send a message</button>
            </div>
        </section>
    )
}

export default Contact