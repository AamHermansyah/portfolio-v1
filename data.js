import { SiAffinity, SiNextdotjs, SiRedux, SiSemanticuireact, SiTailwindcss } from "react-icons/si"
import { RiFacebookFill, RiHtml5Fill, RiInstagramFill, RiNpmjsLine, RiReactjsLine, RiWhatsappFill } from "react-icons/ri"
import { IoLogoCss3, IoLogoJavascript, IoMdBrush } from "react-icons/io"
import { TbSquaresFilled, TbVector } from "react-icons/tb"
import { BiGitBranch } from "react-icons/bi"
import { FaNode, FaTelegramPlane } from "react-icons/fa"
import { FiFramer } from "react-icons/fi"
import { AiFillGithub } from "react-icons/ai"
import { convertDateFromMomentJs } from "./utils/formatDate"

export const servicesDevelopment = [
    {
        title: 'Next Js',
        started_at: convertDateFromMomentJs("20220808"),
        icon: <SiNextdotjs color="black" fontSize={32} />
    },
    {
        title: 'React Js',
        started_at: convertDateFromMomentJs("20210614"),
        icon: <RiReactjsLine color="#61DAFB" fontSize={32} />
    },
    {
        title: 'Sanity',
        started_at: convertDateFromMomentJs("20220905"),
        icon: <SiSemanticuireact color="#F04939" fontSize={32} />
    },
    {
        title: 'HTML',
        started_at: convertDateFromMomentJs("20200619"),
        icon: <RiHtml5Fill color="#E34F26" fontSize={32} />
    },
    {
        title: 'CSS',
        started_at: convertDateFromMomentJs("20200713"),
        icon: <IoLogoCss3 color="#1B73BA" fontSize={32} />
    },
    {
        title: 'Tailwind CSS',
        started_at: convertDateFromMomentJs("20211206"),
        icon: <SiTailwindcss color="#06B6D4" fontSize={28} />
    },
    {
        title: 'Git',
        started_at: convertDateFromMomentJs("20211120"),
        icon: <BiGitBranch color="#DE4C36" fontSize={28} />
    },
    {
        title: 'Node js',
        started_at: convertDateFromMomentJs("20210506"),
        icon: <FaNode color="#4CAF50" fontSize={32} />
    },
    {
        title: 'NPM',
        started_at: convertDateFromMomentJs("20210614"),
        icon: <RiNpmjsLine color="#CC0000" fontSize={32} />
    },
    {
        title: 'Framer Motion',
        started_at: convertDateFromMomentJs("20220920"),
        icon: <FiFramer color="#BB4B96" fontSize={30} />
    },
    {
        title: 'Javascript',
        started_at: convertDateFromMomentJs("20201206"),
        icon: <IoLogoJavascript color="#F0DB4F" fontSize={28} />
    },
    {
        title: 'Redux Toolkit',
        started_at: convertDateFromMomentJs("20220407"),
        icon: <SiRedux color="#764ABC" fontSize={28} />
    }
]

export const servicesDesign = [
    {
        title: 'Vector Art',
        started_at: convertDateFromMomentJs("20210729"),
        icon: <TbVector color="#374151" fontSize={30} />
    },
    {
        title: 'Pixel Art',
        started_at: convertDateFromMomentJs("20220601"),
        icon: <TbSquaresFilled color="#374151" fontSize={32} />
    },
    {
        title: 'Affinity Designer',
        started_at: convertDateFromMomentJs("20220325"),
        icon: <SiAffinity color="#51C7EE" fontSize={30} />
    },
    {
        title: 'Infinity Design',
        started_at: convertDateFromMomentJs("20210729"),
        icon: <IoMdBrush color="#3790D7" fontSize={30} />
    },
]

export const navigations = [
    { title: 'Home', id: 'home', isPage: false },
    { title: 'Services', id: 'service', isPage: false },
    { title: 'Portfolio', id: 'portfolio', isPage: true, href: '/portfolio' },
    { title: 'Clients', id: 'client', isPage: false },
    { title: 'About', id: 'about', isPage: false },
    { title: 'Contact Me', id: 'contact', isPage: false },
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

export const options = [
    { label: 'HTML', value: 'HTML'},
    { label: 'CSS', value: 'CSS'},
    { label: 'React.js', value: 'React.js'},
    { label: 'Next.js', value: 'Next.js'},
    { label: 'Tailwind', value: 'Tailwind'},
    { label: 'Vite', value: 'Vite'},
    { label: 'Sanity', value: 'Sanity'},
    { label: 'Framer Motion', value: 'Framer Motion'},
    { label: 'Redux Toolkit', value: 'Redux Toolkit'},
    { label: 'Infinity Design', value: 'Infinity Design'},
    { label: 'Affinity Design', value: 'Affinity Design'},
    { label: 'Pixel Art App', value: 'Pixel Art App'},
]

export const categories = [
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'Fullstack', value: 'Fullstack' },
    { label: 'Pixel', value: 'Pixel' },
    { label: 'Vector', value: 'Vector' },
]
