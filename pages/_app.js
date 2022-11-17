import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { AnimatePresence } from 'framer-motion'
import SocialMediaFixed from '../components/SocialMediaFixed'

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <title>Aam Hermansyah | Developer & Development</title>
                <meta name="description" content="For explore my portfolio" />
                <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Express, Sanity" />
                <meta name="author" content="Aam Hermansyah" />
            </Head>
            <AnimatePresence mode='wait'>
                <SocialMediaFixed />
                <Navbar />
                <Component key={router.pathname} {...pageProps} />
            </AnimatePresence>
        </>
    )
  }
  
  export default MyApp