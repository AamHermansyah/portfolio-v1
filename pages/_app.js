import '../styles/globals.css'
import Head from 'next/head'
import meImage from '../public/banner-1.jpg'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Aam Hermansyah | Developer & Development</title>
                <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Express, Sanity" />
                <meta name="author" content="Aam Hermansyah" />
                <meta name="copyright" content="aamhermansyah" />
                <meta name="description" content="Welcome to my website, you can see my portfolio and hire me." key="desc" />
                <meta property="og:title" content="Aam Hermansyah | Developer & Development" />
                <meta property="og:description" content="Welcome to my website, you can see my portfolio and hire me." />
                <meta property="og:image" content="https://drive.google.com/uc?export=view&id=14kb7D-9SfWwYua6vyuU0amNeblOSZ00F"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
  }
  
  export default MyApp