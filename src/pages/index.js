import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>See</title>
        <meta name="description" content="See save your movies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        
      </Header>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>See is coming</code>
            <a>Check back soon!</a>
            </p>
          <div>
        </div>
        </div>
      </main>
    </>
  )
}
