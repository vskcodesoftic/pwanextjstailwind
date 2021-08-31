import Head from 'next/head'
import Image from 'next/image'
import { useEffect , useState} from 'react'
import axios from 'axios'

export default function Home({posts}) {
  const [Data, setData] = useState([])

 let data = posts.articles;
  useEffect(() => {
       
  }, [])


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
          Welcome to News Test Pwa App 
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 grid-rows  p-2">
           {/* card start  */}
         {data.map((d , indx) => {
           return (
            <div key={indx} className="min-h-screen flex items-center justify-center p-2">
            <div className="w-80 bg-white rounded-lg py-2 shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
              <div className="flex items-center mb-2 space-x-4">
                <div>
                  <h1 className="mb-1 text-xl font-bold text-gray-700">{d.title}</h1>
                  <p className="text-sm font-normal text-gray-600 mr-14 hover:underline">#{d.author}</p>
                </div>
  
              </div>
              {/* <img src={d.urlToImage}  /> */}
              <div className="flex justify-between px-10 py-6 ">
                <span
                  ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"  /></svg
                ></span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </span>
                <span
                  ><a href={d.url}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"  /></svg></a>
                </span>
              </div>
            
            </div>
          </div>
                          
           )
         })}
     {/* card end  */}


        </div>
      </main>
    </div>
  )
}


export async function getStaticProps(context) {
  
  const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-07-31&sortBy=publishedAt&apiKey=f316c5cf371c469094638c235303c841`)
  const posts = await res.json()
  console.log(posts)
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }

}