import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>First Home</title>
            <meta name="First Home" content="First Home" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    </div>
)

export default Home
