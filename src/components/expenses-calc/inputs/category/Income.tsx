import { useEffect, useState, ChangeEvent } from 'react'
import InputMuiSelect from '../../../utils/input-mui-select/InputMuiSelect'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import {
    calculateExpenses,
    getIncome,
} from '../../../../redux/features/expenses-calc'

const Income = () => {
    const { income, otherIncome } = useAppSelector(getIncome)
    const dispatch = useAppDispatch()

    const [inputs, setInputs] = useState({
        income: income || 0,
        otherIncome: otherIncome || 0,
    })
    const [timeFrame, setTimeFrame] = useState({
        income: 'monthly',
        otherIncome: 'monthly',
    })

    useEffect(() => {
        dispatch(calculateExpenses(inputs))
    }, [dispatch, inputs])

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
                name="income"
                onChange={handleChange}
                currencySymbol="$"
                label="Income"
                value={income}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.income}
            />
            <InputMuiSelect
                name="otherIncome"
                onChange={handleChange}
                currencySymbol="$"
                label="Other Income"
                value={otherIncome}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.otherIncome}
            />
        </>
    )
}

export default Income
