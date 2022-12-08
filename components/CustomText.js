import { motion as m } from 'framer-motion'
import { letterAnimate, staggerContainer } from '../animates'

export const SmoothTypingText = ({stagger = 0.1, children, textStyles}) => {
    return (
        <m.p
        variants={staggerContainer(stagger)}
        initial="initial"
        whileInView="animate"
        className={`${textStyles}`}>
            {children.split("").map((letter, index) => (
                <m.span
                key={`${letter}-${index}`}
                variants={letterAnimate()}
                >
                    {letter}
                </m.span>
            ))}
        </m.p>
    )
}