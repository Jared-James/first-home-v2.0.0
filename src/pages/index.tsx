import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Index.module.scss'
import Header from '../components/header/Header'
import LandingPage from '../components/landing-page/LandingPage'
import MortgageCalc from '../components/mortgage-calc/MortgageCalc'

const Home: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>First Home</title>
            <meta name="First Home" content="First Home" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <LandingPage />
        <MortgageCalc />
    </div>
)

export default Home
