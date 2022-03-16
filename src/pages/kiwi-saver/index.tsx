import type { NextPage } from 'next'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { KiwiSaverCalculator } from '../../components/kiwi-saver/kiwi-saver-calculator'
import { LandingPageKiwiSaver } from '../../components/kiwi-saver/landing-page'

const KiwiSaver: NextPage = () => (
    <>
        <Header />
        <LandingPageKiwiSaver />
        <KiwiSaverCalculator />
        <Footer />
    </>
)

export default KiwiSaver
