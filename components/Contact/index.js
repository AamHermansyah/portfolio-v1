import React from 'react'
import { FcInvite, FcPhoneAndroid } from "react-icons/fc"

function Contact() {
  return (
    <section className="mt-10 w-full p-4 max-w-[800px] mx-auto pb-10" id="contact">
        <div className="mt-4">
            <h1 className="text-center text-2xl sm:text-3xl font-bold">Take A Coffee And Chat With Me😊</h1>
        </div>
        <div className="flex justify-center sm:justify-between flex-wrap mt-4 gap-4">
            <div className="flex gap-2 items-center py-3 px-4 bg-sky-100 rounded-md">
                <FcInvite fontSize={24} />
                amzhermanzyah@gmail.com
            </div>
            <div className="flex gap-2 items-center py-3 px-4 bg-red-100 rounded-md">
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
            <div class="inline-flex bg-gray-100 rounded border border-gray-200">
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