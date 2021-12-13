import { useAppSelector } from '../../../redux/hooks'
import { getStepper } from '../../../redux/features/expenses-calc'
import Income from './category/Income'
import Housing from './category/Housing'
import Everyday from './category/Everyday'
import Regular from './category/Regular'
import Personal from './category/Personal'
import Savings from './category/Savings'
import styles from './inputComponent.module.scss'

const InputComponent = () => {
    const stepCount = useAppSelector(getStepper)

    const renderInputsByStepperCount = (step: number) => {
        switch (step) {
            case 0:
                return <Income />
            case 1:
                return <Housing />
            case 2:
                return <Everyday />
            case 3:
                return <Regular />
            case 4:
                return <Personal />
            case 5:
                return <Savings />
            default:
                return 'No inputs'
        }
    }

    return (
        <div className={styles.container}>
            {renderInputsByStepperCount(stepCount)}
        </div>
    )
}

export default InputComponent
