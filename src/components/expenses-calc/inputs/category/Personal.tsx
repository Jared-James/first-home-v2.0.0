import { useEffect, useState, ChangeEvent } from 'react'
import InputMuiSelect from '../../../utils/input-mui-select/InputMuiSelect'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import {
    calculateExpenses,
    getIncome,
    getTimeframe,
    calculateTimeframe,
} from '../../../../redux/features/expenses-calc'

const Personal = () => {
    const {
        entertainment,
        hairBeauty,
        beverages,
        clothing,
        healthCare,
        personalMiscellaneous,
    } = useAppSelector(getIncome)
    const alltimeFrames = useAppSelector(getTimeframe)
    const dispatch = useAppDispatch()

    const [inputs, setInputs] = useState({
        entertainment: entertainment || 0,
        hairBeauty: hairBeauty || 0,
        beverages: beverages || 0,
        healthCare: healthCare || 0,
        clothing: clothing || 0,
        personalMiscellaneous: personalMiscellaneous || 0,
    })
    const [timeFrame, setTimeFrame] = useState({
        entertainment: alltimeFrames.entertainment || 'monthly',
        hairBeauty: alltimeFrames.hairBeauty || 'monthly',
        beverages: alltimeFrames.beverages || 'monthly',
        healthCare: alltimeFrames.healthCare || 'monthly',
        clothing: alltimeFrames.clothing || 'monthly',
        personalMiscellaneous: alltimeFrames.personalMiscellaneous || 'monthly',
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
                name="entertainment"
                onChange={handleChange}
                currencySymbol="$"
                label="Entertainment"
                value={entertainment}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.entertainment}
            />
            <InputMuiSelect
                name="hairBeauty"
                onChange={handleChange}
                currencySymbol="$"
                label="Hair | Beauty"
                value={hairBeauty}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.hairBeauty}
            />
            <InputMuiSelect
                name="beverages"
                onChange={handleChange}
                currencySymbol="$"
                label="Beverages"
                value={beverages}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.beverages}
            />
            <InputMuiSelect
                name="clothing"
                onChange={handleChange}
                currencySymbol="$"
                label="Clothing"
                value={clothing}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.clothing}
            />
            <InputMuiSelect
                name="healthCare"
                onChange={handleChange}
                currencySymbol="$"
                label="Healthcare"
                value={healthCare}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.healthCare}
            />
            <InputMuiSelect
                name="personalMiscellaneous"
                onChange={handleChange}
                currencySymbol="$"
                label="personalMiscellaneous"
                value={personalMiscellaneous}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.personalMiscellaneous}
            />
        </>
    )
}

export default Personal
