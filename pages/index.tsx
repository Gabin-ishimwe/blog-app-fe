import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Gabin's Blog App in Next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Blog App in next js</h1>
        <h1 className="text-3xl font-bold underline text-red-700">
      Hello world!
    </h1>
    <div className='text-3xl text-green-600 p-2'>
      Hello Geeks!
    </div>
      </main>
    </>
  )
}
