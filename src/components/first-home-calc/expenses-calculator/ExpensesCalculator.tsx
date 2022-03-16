import styles from './ExpensesCalculator.module.scss'
import StepperComponent from './stepper-component/StepperComponent'
import InputComponent from './inputs/InputComponent'
import OutputComponent from './outputs/OutputComponent'

const ExpensesCalculator = () => {
    return (
        <div className={styles.expense__container} id="expenses">
            <div>
                <h2 className={styles.expense__title}>Income and Expenses</h2>
            </div>
            <div className={styles.expense__instructions}>
                <p>
                    {`
                    Enter your income and any recurring expenses in this section.
                    You will be able to see what savings you have remaning after deducting expenses. 
                    Toogle Show Expense Breakdown to see a breakdown of your expenses.`}
                </p>
            </div>
            <div className={styles.expense__calculator}>
                <div className={styles.calculator__slider}>
                    <StepperComponent />
                </div>
                <div className={styles.expense__container_input}>
                    <div>
                        <InputComponent />
                    </div>
                    <div className={styles.expense__output}>
                        <OutputComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpensesCalculator
