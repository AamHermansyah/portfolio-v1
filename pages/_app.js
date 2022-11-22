import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Aam Hermansyah | Javascript Developer & Designer</title>
                <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Express, Sanity" />
                <meta name="author" content="Aam Hermansyah" />
                <meta name="copyright" content="aamhermansyah" />
                <meta name="description" content="Welcome to my website, you can see my portfolio and hire me." key="desc" />
                <meta property="og:title" content="Aam Hermansyah | Developer & Development" />
                <meta property="og:description" content="Welcome to my website, you can see my portfolio and hire me." />
                <meta property="og:image" content="https://drive.google.com/uc?export=view&id=14kb7D-9SfWwYua6vyuU0amNeblOSZ00F"/>
                <meta property="og:image" itemprop="image" content="https://drive.google.com/uc?export=view&id=14kb7D-9SfWwYua6vyuU0amNeblOSZ00F" />
                <meta property="og:image:url" itemprop="image" content="https://drive.google.com/uc?export=view&id=14kb7D-9SfWwYua6vyuU0amNeblOSZ00F" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="200" />
            </Head>
            <Component {...pageProps} />
        </>
    )
  }
  
  export default MyApp
