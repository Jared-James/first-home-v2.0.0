import { useEffect, useState, ChangeEvent } from 'react'
import InputMuiSelect from '../../../utils/input-mui-select/InputMuiSelect'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import {
    calculateExpenses,
    getIncome,
    getTimeframe,
    calculateTimeframe,
} from '../../../../redux/features/expenses-calc'

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

    const [inputs, setInputs] = useState({
        subscriptionFees: subscriptionFees || 0,
        memberships: memberships || 0,
        personalInsurance: personalInsurance || 0,
        personalDebt: personalDebt || 0,
        regularMiscellaneous: regularMiscellaneous || 0,
    })
    const [timeFrame, setTimeFrame] = useState({
        subscriptionFees: alltimeFrames.subscriptionFees || 'monthly',
        memberships: alltimeFrames.memberships || 'monthly',
        personalInsurance: alltimeFrames.personalInsurance || 'monthly',
        personalDebt: alltimeFrames.personalDebt || 'monthly',
        regularMiscellaneous: alltimeFrames.regularMiscellaneous || 'monthly',
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
                currencySymbol="$"
                label="Subscription Fees"
                value={subscriptionFees}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.subscriptionFees}
            />
            <InputMuiSelect
                name="memberships"
                onChange={handleChange}
                currencySymbol="$"
                label="Memberships"
                value={memberships}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.memberships}
            />
            <InputMuiSelect
                name="personalInsurance"
                onChange={handleChange}
                currencySymbol="$"
                label="PersonalInsurance"
                value={personalInsurance}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.personalInsurance}
            />
            <InputMuiSelect
                name="personalDebt"
                onChange={handleChange}
                currencySymbol="$"
                label="PersonalDebt"
                value={personalDebt}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.personalDebt}
            />
            <InputMuiSelect
                name="regularMiscellaneous"
                onChange={handleChange}
                currencySymbol="$"
                label="Regular Miscellaneous"
                value={regularMiscellaneous}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.regularMiscellaneous}
            />
        </>
    )
}

export default Regular
