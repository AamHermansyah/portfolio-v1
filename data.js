import { SiAffinity, SiNextdotjs, SiSemanticuireact, SiTailwindcss } from "react-icons/si"
import { RiHtml5Fill, RiNpmjsLine, RiReactjsLine } from "react-icons/ri"
import { IoLogoCss3, IoMdBrush } from "react-icons/io"
import { TbSquaresFilled, TbVector } from "react-icons/tb"
import { BiGitBranch } from "react-icons/bi"
import { FaNode } from "react-icons/fa"

export const servicesDevelopment = [
    { 
        title: 'Next Js',
        description: '3 Months',
        icon: <SiNextdotjs />
    },
    { 
        title: 'React Js',
        description: '1.5 Years',
        icon: <RiReactjsLine />
    },
    { 
        title: 'Sanity',
        description: '3 Months',
        icon: <SiSemanticuireact />
    },
    { 
        title: 'HTML',
        description: '2.5 Years',
        icon: <RiHtml5Fill />
    },
    { 
        title: 'CSS',
        description: '2.5 Years',
        icon: <IoLogoCss3 />
    },
    { 
        title: 'Tailwind CSS',
        description: '1 Years',
        icon: <SiTailwindcss />
    },
    { 
        title: 'Git',
        description: '1 Years',
        icon: <BiGitBranch />
    },
    { 
        title: 'Node js',
        description: '1.5 Years',
        icon: <FaNode />
    },
    { 
        title: 'NPM',
        description: '1.5 Years',
        icon: <RiNpmjsLine />
    }
]

export const servicesDesign = [
    { 
        title: 'Vector Art',
        description: '1 Years',
        icon: <TbVector />
    },
    {
        title: 'Pixel Art',
        description: '6 Months',
        icon: <TbSquaresFilled />
    },
    {
        title: 'Affinity Designer',
        description: '6 Months',
        icon: <SiAffinity />
    },
    {
        title: 'Infinity Design',
        description: '1 Years',
        icon: <IoMdBrush />
    },
]

export const navigations = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/service' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Tastymonials', href: '/testimonial' },
    { title: 'About', href: '/about' },
    { title: 'Contact Me', href: '/contact' },

]