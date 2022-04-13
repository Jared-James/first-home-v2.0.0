import { Link as LinkS } from 'react-scroll'
import Button from '@mui/material/Button'
import styles from './LandingPage.module.scss'

const LandingPage = () => {
    return (
        <div className={styles.landingPage__container}>
            <div className={styles.landingPage__title}>
                <h2 className={styles.landingPage__title_left}>
                    Level Up Your <br /> Finance ...
                </h2>
                <div className={styles.landingPage__title_right}>
                    <p>1. Calculate your mortgage repayments. </p>
                    <p> 2. Calculate your expenses. </p>
                    <p> 3. Get a time frame for achieveing your deposit.</p>
                    <div className={styles.landingPage__button}>
                        <LinkS to="mortgage" smooth duration={500} spy>
                            <p className={styles.landingPage__button_text}>
                                Get started
                            </p>
                        </LinkS>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
