import Output from './output/Output'
import MortgageInput from './inputs/MortgageInput'
import styles from './MortgageCalc.module.scss'

const MortgageCalc = () => {
    return (
        <div className={styles.mortgage__container} id="mortgage">
            <div>
                <h2 className={styles.mortgage__title}>Mortgage Repayment</h2>
            </div>
            <div className={styles.mortgage__instructions}>
                <p>
                    {`Enter the purchase price, your deposit, annual interest
                    rate, and loan term in the appropriate fields. You'll be
                    able to see how much you owe in repayments, as well as the
                    overall amount due.`}
                </p>
            </div>
            <div className={styles.mortgage__calculator}>
                <div className={styles.mortgage__calculator_input}>
                    <MortgageInput />
                </div>
                <div className={styles.mortgage__calculator_output}>
                    <Output />
                </div>
            </div>
            {/* <img className={styles.tree} alt="tree" src="/tree.svg" /> */}
        </div>
    )
}

export default MortgageCalc
