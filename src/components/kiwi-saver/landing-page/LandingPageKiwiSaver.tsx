import styles from './landingPageKiwiSaver.module.scss'

export const LandingPageKiwiSaver = () => {
    return (
        <div className={styles.landingPage__container}>
            <div className={styles.landingPage__title}>
                <h2>Kiwi Saver</h2>
            </div>
            <div>
                <p>
                    Information is key when looking to save money. We aim to
                    provide you with the tools that will make your life just
                    that little bit easier
                </p>
            </div>
        </div>
    )
}
