import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return (
      <RecoilRoot>
        <Head>
          <title>Portfolio</title>
          <link rel="icon" href="suitcase-lg.svg" type="image/png"/>
        </Head>
        <Component {...pageProps} />
      </RecoilRoot>
    )
}
