export const containerShow = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delayChildren: .5,
            staggerChildren: .3,
            ease: 'linear'
        }
    },
    exit: {
        opacity: 0
    }
}

export const containerTranslate = (initial = {x: 0, y: 0}, animate = {x: 0, y: 0}, duration) => {
    return {
        initial,
        animate: {
            x: animate.x,
            y: animate.y,
            transition: {
                duration,
                delayChildren: .5,
                staggerChildren: .3
            }
        },
        exit: {
            opacity: 0
        }
    }
}

export const itemTranslate = (initial = {x: 0, y: 0}, animate = {x: 0, y: 0}, duration) => {
    return {
        initial: {
            x: initial.x,
            y: initial.y
        },
        animate: {
           x: animate.x, 
           y: animate.y,
            transition: {
                duration
            }
        }
    }
}

export const itemShow = (duration) => {
    return {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration
            }
        }
    }
}