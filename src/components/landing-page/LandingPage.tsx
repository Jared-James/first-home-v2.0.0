import styles from './LandingPage.module.scss'

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__image}>
                <div className={styles.container__image_box}>
                    <div className={styles.container__image_item}>
                        <img src="/house.jfif" alt="house in the woods" />
                    </div>
                </div>
            </div>
            <div className={styles.container__steps}>
                <div className={styles.container__steps_item}>
                    <div className={styles.title}>
                        <h2 className={styles.title__text}>
                            Step one - Mortgage
                        </h2>
                    </div>
                    <div className={styles.body}>
                        <p className={styles.body__text}>
                            Using the first mortgage calculator, we will find
                            out what your mortgage repayments will be
                        </p>
                    </div>
                </div>
                <div className={styles.container__steps_item}>
                    <div className={styles.title}>
                        <h2 className={styles.title__text}>
                            Step Two - Savings
                        </h2>
                    </div>
                    <div className={styles.body}>
                        <p className={styles.body__text}>
                            We then look your spending habits and find out where
                            your money is going
                        </p>
                    </div>
                </div>
                <div className={styles.container__steps_item}>
                    <div className={styles.title}>
                        <h2 className={styles.title__text}>
                            Step Three - Results
                        </h2>
                    </div>
                    <div className={styles.body}>
                        <p className={styles.body__text}>
                            Taking everything into account we are able to find
                            out how long it will be before you reach your
                            deposit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
