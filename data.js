import { SiAffinity, SiNextdotjs, SiRedux, SiSemanticuireact, SiTailwindcss, SiTypescript, SiJquery } from "react-icons/si"
import { RiHtml5Fill, RiInstagramFill, RiNpmjsLine, RiReactjsLine, RiWhatsappFill } from "react-icons/ri"
import { IoLogoCss3, IoLogoJavascript, IoMdBrush } from "react-icons/io"
import { TbSquaresFilled, TbVector } from "react-icons/tb"
import { BiGitBranch } from "react-icons/bi"
import { FaNode } from "react-icons/fa"
import { TbBrandFiverr } from "react-icons/tb"
import { FiFramer } from "react-icons/fi"
import { AiFillGithub } from "react-icons/ai"
import { convertDateFromMomentJs } from "./utils/formatDate"
import { MdSchool } from "react-icons/md"
import { GiAutoRepair } from "react-icons/gi"

export const servicesDevelopment = [
    {
        title: 'Next Js',
        started_at: convertDateFromMomentJs("20220808"),
        icon: <SiNextdotjs color="black" fontSize={32} />,
        progress: 75
    },
    {
        title: 'React Js',
        started_at: convertDateFromMomentJs("20210614"),
        icon: <RiReactjsLine color="#61DAFB" fontSize={32} />,
        progress: 90,
        progressColor: "#61DAFB"
    },
    {
        title: 'Sanity',
        started_at: convertDateFromMomentJs("20220905"),
        icon: <SiSemanticuireact color="#F04939" fontSize={32} />,
        progress: 40,
        progressColor: "#F04939"
    },
    {
        title: 'HTML',
        started_at: convertDateFromMomentJs("20200619"),
        icon: <RiHtml5Fill color="#E34F26" fontSize={32} />,
        progress: 95,
        progressColor: "#E34F26"
    },
    {
        title: 'CSS',
        started_at: convertDateFromMomentJs("20200713"),
        icon: <IoLogoCss3 color="#1B73BA" fontSize={32} />,
        progress: 95,
        progressColor: "#1B73BA"
    },
    {
        title: 'Tailwind CSS',
        started_at: convertDateFromMomentJs("20211206"),
        icon: <SiTailwindcss color="#06B6D4" fontSize={28} />,
        progress: 90,
        progressColor: "#06B6D4"
    },
    {
        title: 'Git',
        started_at: convertDateFromMomentJs("20211120"),
        icon: <BiGitBranch color="#DE4C36" fontSize={28} />,
        progress: 80,
        progressColor: "#DE4C36"
    },
    {
        title: 'Node js',
        started_at: convertDateFromMomentJs("20210506"),
        icon: <FaNode color="#4CAF50" fontSize={32} />,
        progress: 80,
        progressColor: "#4CAF50"
    },
    {
        title: 'NPM',
        started_at: convertDateFromMomentJs("20210614"),
        icon: <RiNpmjsLine color="#CC0000" fontSize={32} />,
        progress: 80,
        progressColor: "#CC0000"
    },
    {
        title: 'Framer Motion',
        started_at: convertDateFromMomentJs("20220920"),
        icon: <FiFramer color="#BB4B96" fontSize={30} />,
        progress: 50,
        progressColor: "#BB4B96"
    },
    {
        title: 'Javascript',
        started_at: convertDateFromMomentJs("20201206"),
        icon: <IoLogoJavascript color="#F0DB4F" fontSize={28} />,
        progress: 90,
        progressColor: "#F0DB4F"
    },
    {
        title: 'Typescript',
        started_at: convertDateFromMomentJs("20230101"),
        icon: <SiTypescript color="#2F74C0" fontSize={28} />,
        progress: 60,
        progressColor: "#2F74C0"
    },
    {
        title: 'JQuery',
        started_at: convertDateFromMomentJs("20220701"),
        icon: <SiJquery color="#0769AD" fontSize={28} />,
        progress: 80,
        progressColor: "#0769AD"
    },
    {
        title: 'Redux Toolkit',
        started_at: convertDateFromMomentJs("20220407"),
        icon: <SiRedux color="#764ABC" fontSize={28} />,
        progress: 80,
        progressColor: "#764ABC"
    }
]

export const servicesDesign = [
    {
        title: 'Vector Art',
        started_at: convertDateFromMomentJs("20210729"),
        icon: <TbVector color="#374151" fontSize={30} />,
        progress: 70
    },
    {
        title: 'Pixel Art',
        started_at: convertDateFromMomentJs("20220601"),
        icon: <TbSquaresFilled color="#374151" fontSize={32} />,
        progress: 60
    },
    {
        title: 'Affinity Designer',
        started_at: convertDateFromMomentJs("20220325"),
        icon: <SiAffinity color="#51C7EE" fontSize={30} />,
        progress: 75,
        progressColor: "#51C7EE"
    },
    {
        title: 'Infinity Design',
        started_at: convertDateFromMomentJs("20210729"),
        icon: <IoMdBrush color="#3790D7" fontSize={30} />,
        progress: 90,
        progressColor: "#3790D7"
    },
]

export const navigations = [
    { title: 'Home', id: 'home', isPage: false },
    { title: 'Services', id: 'service', isPage: false },
    { title: 'Portfolio', id: 'portfolio', isPage: false },
    { title: 'Clients', id: 'client', isPage: false },
    { title: 'About', id: 'about', isPage: false },
    { title: 'Contact Me', id: 'contact', isPage: false },
]

export const socialMedia = [
    {
        title: 'Fiverr',
        link: 'https://www.fiverr.com/aam_hermansyah',
        icon: <TbBrandFiverr />
    },
    {
        title: 'Instagram',
        link: 'https://instagram.com/maahersyah',
        icon: <RiInstagramFill />
    },
    {
        title: 'Github',
        link: 'https://github.com/AamHermansyah',
        icon: <AiFillGithub />
    },
    {
        title: 'Whatsapp',
        link: 'https://wa.me/6283131193229',
        icon: <RiWhatsappFill />
    }
]

export const options = [
    { label: 'HTML', value: 'HTML' },
    { label: 'CSS', value: 'CSS' },
    { label: 'Javascript', value: 'Javascript' },
    { label: 'JQuery', value: 'JQuery' },
    { label: 'Typescript', value: 'Typescript' },
    { label: 'React.js', value: 'React.js' },
    { label: 'Next.js', value: 'Next.js' },
    { label: 'Tailwind', value: 'Tailwind' },
    { label: 'Vite', value: 'Vite' },
    { label: 'Sanity', value: 'Sanity' },
    { label: 'Framer Motion', value: 'Framer Motion' },
    { label: 'Daisy UI', value: 'Daisy UI' },
    { label: 'Redux Toolkit', value: 'Redux Toolkit' },
    { label: 'API', value: 'API' },
    { label: 'Infinity Design', value: 'Infinity Design' },
    { label: 'Affinity Design', value: 'Affinity Design' },
    { label: 'Pixel Art App', value: 'Pixel Art App' },
]

export const categories = [
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'Fullstack', value: 'Fullstack' },
    { label: 'Pixel', value: 'Pixel' },
    { label: 'Vector', value: 'Vector' },
]

export const tabDataAbout = {
    buttons: [
        {
            id: "tab-1",
            title: "Educations",
            icons: <MdSchool fontSize={24} />
        },
        {
            id: "tab-2",
            title: "Experiences",
            icons: <GiAutoRepair fontSize={24} />
        },
    ],
    educations: [
        {
            time: "2010 - 2016",
            title: "Elementary school of SDN 2 Sukamaju",
            description: "Student"
        },
        {
            time: "2016 - May 2019",
            title: "Junior high school of SMPN 1 Talegong KJ",
            description: "Student Council Secretary (2017 - 2018)"
        },
        {
            time: "Juny 2019 - May 2022",
            title: "High school of SMAN 21 Garut",
            description: "Head of the Student Council (November 2020 - January 2022)"
        },
        {
            time: "August 2022 - Now",
            title: "Univercity of Universitas Siliwangi",
            description: "Student"
        },
    ],
    experiences: [
        {
            time: "November 2020 - January 2022",
            title: "Head of the Student Council",
            description: "High school of SMAN 21 Garut"
        },
        {
            time: "02 February 2023 - 02 March 2023",
            title: "Gramedia Affiliate (Frontend)",
            description: "Dooha Team (Contract)"
        },
        {
            time: "11 Juny - 06 August",
            title: "Gramedia Affiliate (Frontend)",
            description: "Dooha Team (Contract)"
        },
        {
            time: "Now",
            title: "Fullstack Developer",
            description: "Fiverr Freelancer"
        },
    ]
}
