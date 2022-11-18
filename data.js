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
        image_url: "https://source.unsplash.com/random/300x300/?jungle"
    }
]

export const certifications = [
    {
        from: "Progate",
        title: "Basic Javascript",
        image_url: "https://drive.google.com/uc?export=view&id=17JklFmydAi2WYR_T-ssLTMonj5R0aDVE"
    },
    {
        from: "Progate",
        title: "Basic Node Js",
        image_url: "https://drive.google.com/uc?export=view&id=17KA3mp18aBgKFtvBbajFJg_qXnVddBLL"
    },
    {
        from: "Freecodecamp",
        title: "Javascript - Algorithms & Data Structures",
        image_url: "https://drive.google.com/uc?export=view&id=17GxVR1Sxg_FPVa1m7_EIyUr__pZ6RpJx"
    },
    {
        from: "Sanbercode",
        title: "Next Js Bootcamp 30 Days",
        image_url: "https://drive.google.com/uc?export=view&id=17O09tBGaJ_f-6PuQPYrHTYFdmaGUOby8"
    }
]

export const portfolios = [
    {
        title: 'Night Landscape #1',
        image_url: 'https://drive.google.com/uc?export=view&id=16k_YSSqBPYmACOfPfD6K2mPUyIRtvURA',
        category: 'Vector (Affinity Designer)'
    },
    {
        title: 'She #1',
        image_url: 'https://drive.google.com/uc?export=view&id=16d20F1y8sNUr-UfKiAlLam7_pLzkEtQe',
        category: 'Vector (Infinity Design)'
    },
    {
        title: 'Skin In Free Fire',
        image_url: 'https://drive.google.com/uc?export=view&id=16rl3Sio0WkbghjYnTRHNoOPrST2fYA7T',
        category: 'Vector (Infinity Design)'
    },
    {
        title: 'She #2',
        image_url: 'https://drive.google.com/uc?export=view&id=16oBflUZ2FIMgTmfRLRLyVMjnUPt0KBfA',
        category: 'Vector (Infinity Design)'
    },
    {
        title: 'Me #1',
        image_url: 'https://drive.google.com/uc?export=view&id=16Znz77pDTrTj0zmUBNHAQSVV5u6HH1Hd',
        category: 'Vector (Infinity Design)'
    },
    {
        title: 'She #3',
        image_url: 'https://drive.google.com/uc?export=view&id=16XI5hbpSFFFK-QfsaDNu1iXUqz85PsEE',
        category: 'Vector (Infinity Design)'
    },
    {
        title: 'Me #2',
        image_url: 'https://drive.google.com/uc?export=view&id=16eiokatfwR-9PLkA382e62w0uPHYyLTe',
        category: 'Vector (Infinity Design)'
    },
    {
        title: 'She #4',
        image_url: 'https://drive.google.com/uc?export=view&id=16XJSsHWt8zWXvvgKetQ7GyovN8ILWeCD',
        category: 'Vector (Infinity Design)'
    },
    {
        title: 'Man #1',
        image_url: 'https://drive.google.com/uc?export=view&id=17fKv9-xCpaUPmtWx6R8N3ODSuPotx-M3',
        category: 'Pixel Art'
    },
    {
        title: 'Kraken #1',
        image_url: 'https://drive.google.com/uc?export=view&id=17hU0nG4hWdyURseYgyho14qUlIeH25Ew',
        category: 'Pixel Art'
    },
    {
        title: 'Landscape city #1',
        image_url: 'https://drive.google.com/uc?export=view&id=17zTaAzDDw1AuopEJjZC18eQZ3RP7mmg-',
        category: 'Pixel Art'
    },
    {
        title: 'Shark',
        image_url: 'https://drive.google.com/uc?export=view&id=17qGqDJe1TS3tc3BEoN4P1fQ2xNeEH78R',
        category: 'Pixel Art'
    },
    {
        title: 'Landscape night city #1',
        image_url: 'https://drive.google.com/uc?export=view&id=17zcVPUPWSPqK7a7rY_cRsy-sj_wTyfrP',
        category: 'Pixel Art'
    },
    {
        title: 'Bulldog',
        image_url: 'https://drive.google.com/uc?export=view&id=17zh3RLluuXEzwakZPZ_iMOB28hI-dYCU',
        category: 'Pixel Art'
    },
    {
        title: 'Driver',
        image_url: 'https://drive.google.com/uc?export=view&id=18-QHEih0pd7O8d_fczAObvqt3cz10kqp',
        category: 'Pixel Art'
    },
    {
        title: 'Arabic Man',
        image_url: 'https://drive.google.com/uc?export=view&id=18-ZvyTk_Z9APrzy_AgPNj4VMIyGy9woV',
        category: 'Pixel Art'
    },
    {
        title: 'Pilot',
        image_url: 'https://drive.google.com/uc?export=view&id=1809Ja5iqquVlmn3aD9skfu9rTY129Hpy',
        category: 'Pixel Art'
    },
    {
        title: 'Angry man',
        image_url: 'https://drive.google.com/uc?export=view&id=185IezhHN0NEu8i1D2HU8BerdxDq6627w',
        category: 'Pixel Art'
    },
    {
        title: 'Man with hat',
        image_url: 'https://drive.google.com/uc?export=view&id=18AXRZYZMQVuOKmap8ImMG2AIPbtyRSwM',
        category: 'Pixel Art'
    },
    {
        title: 'Cowboy',
        image_url: 'https://drive.google.com/uc?export=view&id=18AnydWi1BDYBcZBtCsbRuLmz6CrHwOHe',
        category: 'Pixel Art'
    },
    {
        title: 'Zombie Woman',
        image_url: 'https://drive.google.com/uc?export=view&id=18EpjW678FCRT-i5OmunKoicQKEZ32NeY',
        category: 'Pixel Art'
    },
    {
        title: 'Man #2',
        image_url: 'https://drive.google.com/uc?export=view&id=17gzAgPp9MnfIY6r3t3GI4oM8OZib3l10',
        category: 'Pixel Art'
    },
    {
        title: 'Me #3',
        image_url: 'https://drive.google.com/uc?export=view&id=18RiAH7ikb06xXJOskEFvlDHWxLssiiWh',
        category: 'Pixel Art'
    },
]