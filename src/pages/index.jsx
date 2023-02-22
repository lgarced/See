import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Providers from "./Providers";
import SearchBox from '@/components/SearchBar'
import Navbar from '@/components/NavBar'
import "./styles/globals.css";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <div>
      <div>
        <Providers>
          <Head>
            <title>See</title>
            <meta name="description" content="See save your movies" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <Navbar/>
          <SearchBox/>
          {children}
        </Providers>
      </div>
    </div>
  );
}
