import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Siva</title>
        <meta name="description" content="Siva" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

      </Head>

      <main>
        <h1 className="text-2xl flex justify-center text-amber-300">
          Welcome to Siva Test Pwa App 
        </h1>
      </main>
    </div>
  )
}
