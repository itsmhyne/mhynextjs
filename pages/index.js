import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'

function HomePage() {
  return (
    <Layout title="Home Page">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-bold text-7xl">Itsmhyne Web with Next Js</h1>
        <h1 className="mt-10 font-semibold text-3xl">
          Belajar Next Js dengan Tailwind CSS
        </h1>
      </div>
    </Layout>
  )
}

export default HomePage;
