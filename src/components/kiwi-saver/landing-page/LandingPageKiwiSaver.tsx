import styles from './landingPageKiwiSaver.module.scss'

export const LandingPageKiwiSaver = () => {
    return (
        <div className={styles.landingPage__container}>
            <div className={styles.landingPage__title}>
                <h2 className={styles.landingPage__title_text}>Kiwi Saver</h2>
            </div>
            <div>
                <p className={styles.landing__text}>
                    Information is key when looking to save money, We aim to
                    provide you with the tools that will make your life just
                    that little bit easier.
                </p>
            </div>
        </div>
    )
}
