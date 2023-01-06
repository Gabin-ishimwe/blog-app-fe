import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Cabin} from "@next/font/google"
// import "../styles/style.css"

const cabin = Cabin({subsets: ["latin"]})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={cabin.className}>
    <Component {...pageProps} />
  </main>
    )
}
