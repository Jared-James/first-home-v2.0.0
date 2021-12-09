import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.title}>
                <h1>First Home</h1>
            </div>
            <div className={styles.navigation__container}>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.list__item}>About</li>
                        <li className={styles.list__item}>Mortage</li>
                        <li className={styles.list__item}>Savings</li>
                        <li className={styles.list__item}>Results</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
