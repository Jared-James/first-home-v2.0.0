import { Link as LinkS } from 'react-scroll'
import Button from '@mui/material/Button'
import styles from './LandingPage.module.scss'

const LandingPage = () => {
    return (
        <div className={styles.landingPage__container}>
            {/* <div className={styles.landingPage__image}>
                <div className={styles.landingPage__image_item}>
                    <img src="/house.jfif" alt="house in the woods" />
                </div>
            </div> */}
            <div className={styles.landingPage__steps}>
                <div className={styles.landingPage__steps_item}>
                    <div className={styles.landingPage__title}>
                        <h2 className={styles.landingPage__title_text}>
                            Buying your first home
                        </h2>
                    </div>
                    <div className={styles.landingPage__Body}>
                        <p className={styles.landingPage__Body_text}>
                            Information is key when looking to purchase your
                            first home. We aim to provide you with the tools
                            that will make your life just that little bit easier
                        </p>
                        <p className={styles.landingPage__Body_text}>
                            First find out what your mortgage repayments will be
                            based on the house price and your deposit
                        </p>
                        <p className={styles.landingPage__Body_text}>
                            Then look at your income and expenses to determine
                            how much money you can put towards paying off your
                            mortgage
                        </p>
                        <p className={styles.landingPage__Body_text}>
                            Finally, we can look at how long based on all the
                            above it will take you to achieve your deposit
                        </p>
                        <LinkS to="mortgage" smooth duration={350} spy>
                            {/* <Button variant="outlined" type="submit">
                                Continue
                            </Button> */}
                        </LinkS>
                    </div>
                </div>
            </div>
        </div>
    )
}

// <LinkS to="expenses" smooth duration={500} spy>
// <Button variant="outlined" type="submit">
//     Continue
// </Button>
// </LinkS>

export default LandingPage
