import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
// import Providers from "./Providers";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <html lang='en'>
      <body>
      <Head>
        <title>See</title>
        <meta name="description" content="See save your movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      </body>
      </html>
      );
}
