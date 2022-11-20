import { SiAffinity, SiNextdotjs, SiRedux, SiSemanticuireact, SiTailwindcss } from "react-icons/si"
import { RiFacebookFill, RiHtml5Fill, RiInstagramFill, RiNpmjsLine, RiReactjsLine, RiWhatsappFill } from "react-icons/ri"
import { IoLogoCss3, IoLogoJavascript, IoMdBrush } from "react-icons/io"
import { TbSquaresFilled, TbVector } from "react-icons/tb"
import { BiGitBranch } from "react-icons/bi"
import { FaNode, FaTelegramPlane } from "react-icons/fa"
import { FiFramer } from "react-icons/fi"
import { AiFillGithub } from "react-icons/ai"

export const servicesDevelopment = [
    { 
        title: 'Next Js',
        description: '3 Months',
        icon: <SiNextdotjs color="black" fontSize={32} />
    },
    { 
        title: 'React Js',
        description: '1.5 Years',
        icon: <RiReactjsLine color="#61DAFB" fontSize={32} />
    },
    { 
        title: 'Sanity',
        description: '3 Months',
        icon: <SiSemanticuireact color="#F04939" fontSize={32} />
    },
    { 
        title: 'HTML',
        description: '2.5 Years',
        icon: <RiHtml5Fill color="#E34F26" fontSize={32} />
    },
    { 
        title: 'CSS',
        description: '2.5 Years',
        icon: <IoLogoCss3 color="#1B73BA" fontSize={32} />
    },
    { 
        title: 'Tailwind CSS',
        description: '1 Years',
        icon: <SiTailwindcss color="#06B6D4" fontSize={28} />
    },
    { 
        title: 'Git',
        description: '1 Years',
        icon: <BiGitBranch color="#DE4C36" fontSize={28} />
    },
    { 
        title: 'Node js',
        description: '1.5 Years',
        icon: <FaNode color="#4CAF50" fontSize={32} />
    },
    { 
        title: 'NPM',
        description: '1.5 Years',
        icon: <RiNpmjsLine color="#CC0000" fontSize={32} />
    },
    { 
        title: 'Framer Motion',
        description: '3 Months',
        icon: <FiFramer color="#BB4B96" fontSize={30} />
    },
    { 
        title: 'Javascript',
        description: '2 Years',
        icon: <IoLogoJavascript color="#F0DB4F" fontSize={28} />
    },
    { 
        title: 'Redux Toolkit',
        description: '6 Months',
        icon: <SiRedux color="#764ABC" fontSize={28} />
    }
]

export const servicesDesign = [
    { 
        title: 'Vector Art',
        description: '1 Years',
        icon: <TbVector color="#374151" fontSize={30} />
    },
    {
        title: 'Pixel Art',
        description: '6 Months',
        icon: <TbSquaresFilled color="#374151" fontSize={32} />
    },
    {
        title: 'Affinity Designer',
        description: '6 Months',
        icon: <SiAffinity color="#51C7EE" fontSize={30} />
    },
    {
        title: 'Infinity Design',
        description: '1 Years',
        icon: <IoMdBrush color="#3790D7" fontSize={30} />
    },
]

export const navigations = [
    { title: 'Home', id: 'home' },
    { title: 'Services', id: 'service' },
    { title: 'Portfolio', id: 'portfolio' },
    { title: 'Clients', id: 'client' },
    { title: 'About', id: 'about' },
    { title: 'Contact Me', id: 'contact' },
]

export const socialMedia = [
    {
        title: 'Facebook',
        link: 'https://facebook.com/aam.hermansyah.79',
        icon: <RiFacebookFill />
    },
    {
        title: 'Instagram',
        link: 'https://instagram.com/aamhrmnsyah',
        icon: <RiInstagramFill />
    },
    {
        title: 'Github',
        link: 'https://github.com/AamHermansyah',
        icon: <AiFillGithub />
    },
    {
        title: 'Telegram',
        link: 'https://t.me/AamHermansyah',
        icon: <FaTelegramPlane />
    },
    {
        title: 'Whatsapp',
        link: 'https://wa.me/6282316126449',
        icon: <RiWhatsappFill />
    }
]

export const clients = [
    {
        title: "untitled.blend",
        image_url: "https://drive.google.com/uc?export=view&id=19VJmJBUfLgRLjJwWpQMVEnNWzv76mQ8O"
    }
]
