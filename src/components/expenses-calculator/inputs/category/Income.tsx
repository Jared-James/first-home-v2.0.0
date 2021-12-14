import { useEffect, useState, ChangeEvent } from 'react'
import InputMuiSelect from '../../../utils/input-mui-select/InputMuiSelect'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import {
    calculateExpenses,
    getIncome,
    calculateTimeframe,
    getTimeframe,
} from '../../../../redux/features/expenses-calc'
import { MONTHLY } from '../../../../constants/time'

const Income = () => {
    const { income, otherIncome } = useAppSelector(getIncome)
    const alltimeFrames = useAppSelector(getTimeframe)
    const dispatch = useAppDispatch()

    type Inputs = {
        income: number
        otherIncome: number
    }

    type TimeFrames = {
        income: string
        otherIncome: string
    }

    const [inputs, setInputs] = useState<Inputs>({
        income: income || 0,
        otherIncome: otherIncome || 0,
    })
    const [timeFrame, setTimeFrame] = useState<TimeFrames>({
        income: alltimeFrames.income || MONTHLY,
        otherIncome: alltimeFrames.otherIncome || MONTHLY,
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
                name="income"
                onChange={handleChange}
                label="Income"
                value={income}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.income}
            />
            <InputMuiSelect
                name="otherIncome"
                onChange={handleChange}
                label="Other Income"
                value={otherIncome}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.otherIncome}
            />
        </>
    )
}

export default Income
