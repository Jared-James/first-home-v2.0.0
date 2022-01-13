import { Link as LinkS } from 'react-scroll'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.navigation}>
            <div className={styles.title}>
                <h1>First Home</h1>
            </div>
            <div className={styles.navigation__container}>
                <nav>
                    <ul className={styles.list}>
                        <LinkS to="mortgage" smooth duration={350} spy>
                            <li className={styles.list__item}>Mortgage</li>
                        </LinkS>
                        <LinkS to="expenses" smooth duration={500} spy>
                            <li className={styles.list__item}>
                                Income and Expenses
                            </li>
                        </LinkS>
                        <LinkS to="deposit" smooth duration={500} spy>
                            <li className={styles.list__item}>
                                Deposit Timeline
                            </li>
                        </LinkS>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
