import '../styles/globals.css'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { ContextLoading } from '../hooks/ContextLoading'
import LoadingPage from '../components/LoadingPage'

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <title>Aam Hermansyah | Javascript Developer & Designer</title>
                <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Express, Sanity" />
                <meta name="author" content="Aam Hermansyah" />
                <meta name="copyright" content="aamhermansyah" />
                <meta name="description" content="Welcome to my website, you can see my portfolio and hire me." key="desc" />
                <meta property="og:title" content="Aam Hermansyah | Javascript Developer & Designer" />
                <meta property="og:description" content="Welcome to my website, you can see my portfolio and hire me." />
                <meta property="og:image" content="/meta-image.png"/>
                <meta property="og:image" itemProp="image" content="/meta-image.png" />
                <meta property="og:image:url" itemProp="image" content="/meta-image.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="200" />
            </Head>
            <AnimatePresence mode="wait">
                <ContextLoading>
                    <LoadingPage />
                    <Component {...pageProps} key={router.pathname} />
                </ContextLoading>
            </AnimatePresence>
        </>
    )
  }
  
  export default MyApp
