import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Index.module.scss'
import DepositCalculator from '../components/deposit-calculator/DepositCalculator'
import ExpensesCalculator from '../components/expenses-calculator/ExpensesCalculator'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import LandingPage from '../components/landing-page/LandingPage'
import MortgageCalc from '../components/mortgage-calculator/MortgageCalc'

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
        <DepositCalculator />
        <Footer />
    </div>
)

export default Home
