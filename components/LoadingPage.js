import Typewriter from 'typewriter-effect'
import { motion as m } from 'framer-motion'
import { useContext } from 'react'
import { ContextLoadingApp } from '../hooks/ContextLoading'

function LoadingPage(){
    const { state, handleFunction } = useContext(ContextLoadingApp)

    const loadingAnimate = state.loading ? 
        { initial: { opacity: 0, scaleY: 0 },
            animate: { opacity: 1, scaleY: 1 } 
        } : { animate: { opacity: 0, scaleY: 0 } }

    return (
        <m.div
        initial={state.loading ? { display: 'none' } : { display: 'block' }}
        animate={state.loading ? { display: 'block'} : { 
            display: 'none',
            transition: {
                delay: .5
            }
        }}
        className="hidden">
            <m.div
            variants={loadingAnimate}
            initial="initial"
            animate="animate"
            className="opacity-0 scale-y-0 fixed inset-0 bg-gray-800 flex items-center justify-center z-50">
                <m.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .3 }}
                className="text-2xl text-white">
                    <Typewriter
                    options={{
                        loop: true,
                        delay: 100,
                    }}

                    onInit={(typewriter)=> {
                        typewriter
                        .typeString('Loading...')
                        .pauseFor(500)
                        .deleteAll()
                        .typeString('Wait a minutes!')
                        .pauseFor(1000)
                        .start();
                    }}
                    />
                </m.h2>
            </m.div>
        </m.div>
    )
}

export default LoadingPage