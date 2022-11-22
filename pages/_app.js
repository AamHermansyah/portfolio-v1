import '../styles/globals.css'
import Head from 'next/head'
import meImage from '../public/banner-1.jpg'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* Settings */}
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Page Information */}
                <title>Aam Hermansyah | Developer & Development</title>
                <meta name="description" content="For explore my portfolio" />
                <meta name="keywords" content="HTML, CSS, JavaScript, React, Next, Express, Sanity" />
                <meta name="author" content="Aam Hermansyah" />
                <meta name="copyright" content="aamhermansyah" />

                {/* Schema.org Microdata */}
                <meta itemprop="name" content="Aam Hermansyah" />
                <meta itemprop="description" content="My Profile" />
                <meta itemProp="image" content={meImage} />
            </Head>
            <Component {...pageProps} />
        </>
    )
  }
  
  export default MyApp