import { useEffect, useState, ChangeEvent } from 'react'
import InputMuiSelect from '../../../utils/input-mui-select/InputMuiSelect'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import {
    calculateExpenses,
    getIncome,
    getTimeframe,
    calculateTimeframe,
} from '../../../../redux/features/expenses-calc'
import { MONTHLY } from '../../../../constants/time'

const Regular = () => {
    const {
        subscriptionFees,
        memberships,
        personalInsurance,
        personalDebt,
        regularMiscellaneous,
    } = useAppSelector(getIncome)
    const alltimeFrames = useAppSelector(getTimeframe)
    const dispatch = useAppDispatch()

    type Inputs = {
        subscriptionFees: number
        memberships: number
        personalInsurance: number
        personalDebt: number
        regularMiscellaneous: number
    }

    type TimeFrames = {
        subscriptionFees: string
        memberships: string
        personalInsurance: string
        personalDebt: string
        regularMiscellaneous: string
    }

    const [inputs, setInputs] = useState<Inputs>({
        subscriptionFees: subscriptionFees || 0,
        memberships: memberships || 0,
        personalInsurance: personalInsurance || 0,
        personalDebt: personalDebt || 0,
        regularMiscellaneous: regularMiscellaneous || 0,
    })
    const [timeFrame, setTimeFrame] = useState<TimeFrames>({
        subscriptionFees: alltimeFrames.subscriptionFees || MONTHLY,
        memberships: alltimeFrames.memberships || MONTHLY,
        personalInsurance: alltimeFrames.personalInsurance || MONTHLY,
        personalDebt: alltimeFrames.personalDebt || MONTHLY,
        regularMiscellaneous: alltimeFrames.regularMiscellaneous || MONTHLY,
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
                name="subscriptionFees"
                onChange={handleChange}
                label="Subscription Fees"
                value={subscriptionFees}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.subscriptionFees}
            />
            <InputMuiSelect
                name="memberships"
                onChange={handleChange}
                label="Memberships"
                value={memberships}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.memberships}
            />
            <InputMuiSelect
                name="personalInsurance"
                onChange={handleChange}
                label="PersonalInsurance"
                value={personalInsurance}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.personalInsurance}
            />
            <InputMuiSelect
                name="personalDebt"
                onChange={handleChange}
                label="PersonalDebt"
                value={personalDebt}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.personalDebt}
            />
            <InputMuiSelect
                name="regularMiscellaneous"
                onChange={handleChange}
                label="Regular Miscellaneous"
                value={regularMiscellaneous}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.regularMiscellaneous}
            />
        </>
    )
}

export default Regular
