import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../src/components/Header'
import TopArticle from '../src/components/TopArticle'
import ArticleSection from '../src/components/ArticleSection'
import MiddleSection from '../src/components/MiddleSection/Index'
import ArticleSection2 from '../src/components/ArticleSection2'
import RecentArticles from '../src/components/RecentArticle'
import Footer from '../src/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My Mind UnWrapping....</title>
        <meta name="description" content="Gabin's Blog App in Next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <TopArticle/>
        <ArticleSection/>
        <MiddleSection/>
        <ArticleSection2/>
        <RecentArticles/>
        <Footer/>
      </main>
    </>
  )
}
