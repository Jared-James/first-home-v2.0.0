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
                            Step one
                        </h2>
                    </div>
                    <div className={styles.landingPage__Body}>
                        <p className={styles.landingPage__Body_text}>
                            Using the first mortgage calculator, we will find
                            out what your mortgage repayments will be
                        </p>
                        <Button variant="outlined" type="submit">
                            Continue
                        </Button>
                    </div>
                </div>
                <div className={styles.landingPage__steps_item}>
                    <div className={styles.title}>
                        <h2 className={styles.landingPage__title_text}>
                            Step Two
                        </h2>
                    </div>
                    <div className={styles.landingPage__Body}>
                        <p className={styles.landingPage__Body_text}>
                            We then look your spending habits and find out where
                            your money is going
                        </p>
                        <Button variant="outlined" type="submit">
                            Continue
                        </Button>
                    </div>
                </div>
                <div className={styles.landingPage__steps_item}>
                    <div className={styles.title}>
                        <h2 className={styles.landingPage__title_text}>
                            Step Three
                        </h2>
                    </div>
                    <div className={styles.landingPage__Body}>
                        <p className={styles.landingPage__Body_text}>
                            Taking everything into account we are able to find
                            out how long it will be before you reach your
                            deposit
                        </p>
                        <Button variant="outlined" type="submit">
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
