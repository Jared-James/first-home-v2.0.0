import styles from './ExpensesCalculator.module.scss'
import StepperComponent from './stepper-component/StepperComponent'
import InputComponent from './inputs/InputComponent'
import OutputComponent from './outputs/OutputComponent'

const ExpensesCalculator = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Income and Expenses</h2>
            </div>
            <div className={styles.instructions}>
                <p>
                    {`
                    Add your earnings and any recurring expenses in this section.
                    This will help determine how much you are saving and where you 
                    are spending the most money.`}
                </p>
            </div>
            <div className={styles.calculator}>
                <div className={styles.calculator__slider}>
                    <StepperComponent />
                </div>
                <div className={styles.calculaotr__container}>
                    <div className={styles.calculator__input}>
                        <InputComponent />
                    </div>
                    <div className={styles.calculator__output}>
                        <div className={styles.calculator__output_top}>
                            <OutputComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpensesCalculator
