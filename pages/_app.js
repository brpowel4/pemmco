import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Akshar:wght@500&family=Archivo+Narrow&family=Goldman&family=Open+Sans&family=Rajdhani:wght@700&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css" />
    </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
