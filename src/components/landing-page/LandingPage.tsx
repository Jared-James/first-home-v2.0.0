import { Link as LinkS } from 'react-scroll'
import Button from '@mui/material/Button'
import styles from './LandingPage.module.scss'

const LandingPage = () => {
    return (
        <div className={styles.landingPage__container}>
            <div className={styles.landingPage__image}>
                <div className={styles.landingPage__image_item}>
                    <img src="/house.jfif" alt="house in the woods" />
                </div>
            </div>
            <div className={styles.landingPage__steps}>
                <div className={styles.landingPage__steps_item}>
                    <div className={styles.landingPage__title}>
                        <h2 className={styles.landingPage__title_text}>
                            Mortgage Repayment
                        </h2>
                    </div>
                    <div className={styles.landingPage__Body}>
                        <p className={styles.landingPage__Body_text}>
                            Using the mortgage calculator, we will take your
                            deposit, the interest rate and the length of the
                            loan to calculate your repayments.
                        </p>
                        <LinkS to="mortgage" smooth duration={350} spy>
                            <Button variant="outlined" type="submit">
                                Continue
                            </Button>
                        </LinkS>
                    </div>
                </div>
                <div className={styles.landingPage__steps_item}>
                    <div className={styles.title}>
                        <h2 className={styles.landingPage__title_text}>
                            Income and Expenses
                        </h2>
                    </div>
                    <div className={styles.landingPage__Body}>
                        <p className={styles.landingPage__Body_text}>
                            We then look your income to calculate how much money
                            you have remaining after expenses.
                        </p>
                        <LinkS to="expenses" smooth duration={500} spy>
                            <Button variant="outlined" type="submit">
                                Continue
                            </Button>
                        </LinkS>
                    </div>
                </div>
                <div className={styles.landingPage__steps_item}>
                    <div className={styles.title}>
                        <h2 className={styles.landingPage__title_text}>
                            Deposit Timeline
                        </h2>
                    </div>
                    <div className={styles.landingPage__Body}>
                        <p className={styles.landingPage__Body_text}>
                            Finally, based on a percentage of your savings and
                            income, we can work out how long it will take to
                            achieve your deposit.
                        </p>
                        <LinkS to="deposit" smooth duration={500} spy>
                            <Button variant="outlined" type="submit">
                                Continue
                            </Button>
                        </LinkS>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
