import { motion as m } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import { containerShow, itemShow } from "../../animates";
import { servicesDesign, servicesDevelopment } from "../../data";

export default function Service(){

    return (
        <section>
            <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="text-white h-screen px-6 flex justify-center items-center flex-col lg:flex-1 w-full md:mb-28 mb-20 tracking-wider bg-[#38EF7D]">
                <div
                className="font-rubik">
                    <m.h1
                    initial={{ y: "-100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: .3, delay: .2 }}
                    className="text-5xl md:text-7xl">My Services</m.h1>
                </div>
                <div className="mt-6 overflow-hidden">
                    <m.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .3, delay: .4 }}
                    className="text-lg sm:text-xl text-center">
                        Let&apos;s see for my experience about skills and services.
                    </m.p>
                </div>
                <m.div onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                animate={{ y: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 1 }} 
                className="mt-20 cursor-pointer">
                    <BsArrowDown fontSize={30} />
                </m.div>
            </m.div>
            <h1 id="skills" className="text-4xl font-bold text-center text-gray-700 pt-4">What can I do?</h1>
            <div className="lg:flex-[2] w-full px-8 mb-10 mt-4">
                <m.div
                variants={containerShow}
                initial="initial"
                whileInView="animate">
                    <h1 className="text-2xl font-bold mb-1 text-center text-gray-700">Development</h1>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {servicesDevelopment.map(service => (
                            <m.div
                            variants={itemShow(.3)}
                            key={service.title}
                            className="w-[150px] p-4 text-center flex flex-col items-center hover:bg-green-200 bg-opacity-50 transition-colors duration-150 rounded-md cursor-pointer group">
                                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#02AABD] to-[#00CDAC] p-2">
                                    <div className="w-full h-full bg-white rounded-full text-[#02AABD] flex items-center justify-center text-4xl">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-md md:text-xl pt-3 font-bold text-gray-700">{service.title}</h3>
                                <p className="text-sm md:text-base text-gray-500 font-bold transition-colors duration-150 group-hover:text-gray-700">{service.description}</p>
                            </m.div>
                        ))}
                    </div>
                </m.div>
                <m.div
                variants={containerShow}
                initial="initial"
                whileInView="animate"
                className="mt-5">
                    <h1 className="text-2xl font-bold mb-1 text-center text-gray-700">Design</h1>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {servicesDesign.map(service => (
                            <m.div
                            variants={itemShow(.3)}
                            key={service.title}
                            className="w-[150px] p-4 text-center flex flex-col items-center hover:bg-green-300 transition-colors duration-150 rounded-md cursor-pointer group">
                                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-[#02AABD] to-[#00CDAC] p-2">
                                    <div className="w-full h-full bg-white rounded-full text-[#02AABD] flex items-center justify-center text-4xl">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-md md:text-xl pt-3 font-bold text-gray-700">{service.title}</h3>
                                <p className="text-sm md:text-base text-gray-500 font-bold transition-colors duration-150 group-hover:text-gray-700">{service.description}</p>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
    )
}
