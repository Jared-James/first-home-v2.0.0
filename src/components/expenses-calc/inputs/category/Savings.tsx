import { useEffect, useState, ChangeEvent } from 'react'
import InputMuiSelect from '../../../utils/input-mui-select/InputMuiSelect'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import {
    calculateExpenses,
    getIncome,
    getTimeframe,
    calculateTimeframe,
} from '../../../../redux/features/expenses-calc'

const Savings = () => {
    const {
        emergencyFund,
        investments,
        kiwisaver,
        savings,
        savingsMiscellaneous,
    } = useAppSelector(getIncome)
    const alltimeFrames = useAppSelector(getTimeframe)
    const dispatch = useAppDispatch()

    const [inputs, setInputs] = useState({
        emergencyFund: emergencyFund || 0,
        investments: investments || 0,
        kiwisaver: kiwisaver || 0,
        savings: savings || 0,
        savingsMiscellaneous: savingsMiscellaneous || 0,
    })
    const [timeFrame, setTimeFrame] = useState({
        emergencyFund: alltimeFrames.emergencyFund || 'monthly',
        investments: alltimeFrames.investments || 'monthly',
        kiwisaver: alltimeFrames.kiwisaver || 'monthly',
        savings: alltimeFrames.savings || 'monthly',
        savingsMiscellaneous: alltimeFrames.savingsMiscellaneous || 'monthly',
        miscellaneous: alltimeFrames.miscellaneous || 'monthly',
    })

    useEffect(() => {
        dispatch(calculateExpenses(inputs))
        dispatch(calculateTimeframe(timeFrame))
    }, [dispatch, inputs, timeFrame])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.replaceAll(',', ''),
        }))
    }

    const handleTimeFrame = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target)
        setTimeFrame((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <InputMuiSelect
                name="emergencyFund"
                onChange={handleChange}
                currencySymbol="$"
                label="Emergency Fund"
                value={emergencyFund}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.emergencyFund}
            />
            <InputMuiSelect
                name="investments"
                onChange={handleChange}
                currencySymbol="$"
                label="Investments"
                value={investments}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.investments}
            />
            <InputMuiSelect
                name="kiwisaver"
                onChange={handleChange}
                currencySymbol="$"
                label="Kiwisaver"
                value={kiwisaver}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.kiwisaver}
            />
            <InputMuiSelect
                name="savings"
                onChange={handleChange}
                currencySymbol="$"
                label="Savings"
                value={savings}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.savings}
            />
            <InputMuiSelect
                name="savingsMiscellaneous"
                onChange={handleChange}
                currencySymbol="$"
                label="Savings Miscellaneous"
                value={savingsMiscellaneous}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.savingsMiscellaneous}
            />
        </>
    )
}

export default Savings
