import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Index.module.scss'
import ExpensesCalculator from '../components/expenses-calc/ExpensesCalculator'
import Header from '../components/header/Header'
import LandingPage from '../components/landing-page/LandingPage'
import MortgageCalc from '../components/mortgage-calc/MortgageCalc'

const Home: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>First Home</title>
            <meta name="First Home" content="First Home" />
        </Head>
        <Header />
        <LandingPage />
        <MortgageCalc />
        <ExpensesCalculator />
        <MortgageCalc />
    </div>
)

export default Home
