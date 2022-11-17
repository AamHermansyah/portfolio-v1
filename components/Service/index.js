import { motion as m } from "framer-motion";
import { containerShow, itemShow } from "../../animates";
import { servicesDesign, servicesDevelopment } from "../../data";

export default function Service(){

    return (
        <section className="mt-32 px-8" id="service">
            <h1 className="text-4xl font-bold text-gray-700">What can I do?</h1>
            <div className="w-full mb-10 mt-4">
                <m.div
                variants={containerShow}
                initial="initial"
                whileInView="animate">
                    <h1 className="text-2xl font-bold mb-1 text-gray-700">Experiences in Development</h1>
                    <div className="flex flex-wrap gap-4">
                        {servicesDevelopment.map(service => (
                            <m.div
                            variants={itemShow(.3)}
                            key={service.title}
                            className="w-[150px] p-4 text-center flex flex-col items-center hover:bg-blue-200 bg-opacity-50 transition-colors duration-150 rounded-md cursor-pointer group">
                                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-primary to-[#1BFFFF] p-2">
                                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
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
                    <h1 className="text-2xl font-bold mb-1 text-gray-700 text-right">Experiences in Design</h1>
                    <div className="flex justify-end flex-wrap gap-4">
                        {servicesDesign.map(service => (
                            <m.div
                            variants={itemShow(.3)}
                            key={service.title}
                            className="w-[150px] p-4 text-center flex flex-col items-center hover:bg-blue-200 transition-colors duration-150 rounded-md cursor-pointer group">
                                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-primary to-[#1BFFFF] p-2">
                                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
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
