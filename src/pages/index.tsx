import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Index.module.scss'
import Header from '../components/header/Header'

const Home: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>First Home</title>
            <meta name="First Home" content="First Home" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
    </div>
)

export default Home
