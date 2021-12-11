import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Index.module.scss'
import Counter from '../components/counter/Counter'
import Header from '../components/header/Header'
import LandingPage from '../components/landing-page/LandingPage'

const Home: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>First Home</title>
            <meta name="First Home" content="First Home" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <LandingPage />
        <div style={{ height: '100vh' }}>
            <Counter />
        </div>
    </div>
)

export default Home
