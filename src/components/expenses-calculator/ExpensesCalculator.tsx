import styles from './ExpensesCalculator.module.scss'
import StepperComponent from './stepper-component/StepperComponent'
import InputComponent from './inputs/InputComponent'
import OutputComponent from './outputs/OutputComponent'

const ExpensesCalculator = () => {
    return (
        <div className={styles.expense__container}>
            <div>
                <h2 className={styles.expense__title}>Income and Expenses</h2>
            </div>
            <div className={styles.expense__instructions}>
                <p>
                    {`
                    Add your earnings and any recurring expenses in this section.
                    This will help determine how much you are saving and where you 
                    are spending the most money.`}
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
