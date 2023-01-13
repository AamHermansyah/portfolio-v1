import { motion as m } from "framer-motion";
import { containerShow, itemShow } from "../../animates";
import { servicesDesign, servicesDevelopment } from "../../data";

export default function Service(){

    return (
        <section className="mt-14 px-8" id="service">
            <h1 className="mx-auto w-max text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#CB00FF] to-[#fafe06]">What can I do?</h1>
            <div className="w-full flex justify-between flex-col md:flex-row gap-y-10 mb-10 mt-4">
                <m.div
                variants={containerShow}
                initial="initial"
                whileInView="animate"
                className="flex-1">
                    <h1 className="text-2xl font-bold mb-6">Experiences in Development</h1>
                    <div className="flex flex-wrap gap-4 sm:gap-6 max-w-[500px]">
                        {servicesDevelopment.map(service => (
                            <m.div
                            variants={itemShow(.3)}
                            key={service.title}
                            className="flex flex-col items-center justify-center relative cursor-pointer group">
                                <span className="hidden group-hover:inline w-max absolute -bottom-[45px] p-2 bg-slate-400 text-white text-sm rounded z-[1]">
                                    {service.title}
                                </span>
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 shadow">
                                    {service.icon}
                                </div>
                                <p className="text-sm md:text-base text-gray-700 dark:text-slate-100 transition-colors duration-150">{service.started_at}</p>
                            </m.div>
                        ))}
                    </div>
                </m.div>
                <m.div
                variants={containerShow}
                initial="initial"
                whileInView="animate"
                className="flex-1 flex flex-col items-end">
                    <h1 className="text-right text-2xl font-bold mb-6">Experiences in Design</h1>
                    <div className="flex flex-wrap justify-end gap-4 sm:gap-6 max-w-[500px]">
                        {servicesDesign.map(service => (
                            <m.div
                            variants={itemShow(.3)}
                            key={service.title}
                            className="flex flex-col items-center justify-center relative cursor-pointer group">
                                <span className="hidden group-hover:inline w-max absolute -bottom-[45px] p-2 bg-slate-400 text-white text-sm rounded z-[1]">
                                    {service.title}
                                </span>
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 shadow">
                                    {service.icon}
                                </div>
                                <p className="text-sm md:text-base text-gray-700 dark:text-slate-100 transition-colors duration-150">{service.started_at}</p>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
    )
}
