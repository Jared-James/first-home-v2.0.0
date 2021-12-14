import Output from './output/Output'
import MortgageInput from './inputs/MortgageInput'
import styles from './MortgageCalc.module.scss'

const MortgageCalc = () => {
    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.title}>Mortgage Repayment</h2>
            </div>
            <div className={styles.instructions}>
                <p>
                    {`Enter the purchase price, down payment, annual interest
                    rate, and loan term in the appropriate fields. You'll be
                    able to see how much you owe in repayments, as well as the
                    overall amount due`}
                </p>
            </div>
            <div className={styles.calculator}>
                <div className={styles.calculator__input}>
                    <MortgageInput />
                </div>
                <div className={styles.calculator__output}>
                    <Output />
                </div>
            </div>
            <img className={styles.tree} alt="tree" src="/tree.svg" />
        </div>
    )
}

export default MortgageCalc
