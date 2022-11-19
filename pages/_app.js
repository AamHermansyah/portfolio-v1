import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Aam Hermansyah | Developer & Development</title>
                <meta name="description" content="For explore my portfolio" />
                <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Express, Sanity" />
                <meta name="author" content="Aam Hermansyah" />
            </Head>
            <Component key={2} {...pageProps} />
        </>
    )
  }
  
  export default MyApp