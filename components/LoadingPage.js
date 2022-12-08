import Typewriter from 'typewriter-effect'
import { motion as m } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { ContextApp } from '../hooks/context'

function LoadingPage(){
    const { state, handleFunction } = useContext(ContextApp)
    const { setLoading } = handleFunction

    const loadingAnimate = state.loading ? 
        { initial: { opacity: 0, scaleY: 0 },
            animate: { opacity: 1, scaleY: 1 } 
        } : { animate: { opacity: 0, scaleY: 0 } }

    useEffect(() => {
        const timeout = setTimeout(() => {
          setLoading(prev => false)
        }, 2000);
    
        return () => {
          clearTimeout(timeout)
          setLoading(prev => true)
        }
    }, [])

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
            className="fixed bg-white dark:bg-dark inset-0 flex items-center justify-center z-50">
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