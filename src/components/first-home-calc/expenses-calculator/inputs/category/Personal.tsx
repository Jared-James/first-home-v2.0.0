import { useEffect, useState, ChangeEvent } from 'react'
import InputMuiSelect from '../../../../utils/input-mui-select/InputMuiSelect'
import { useAppSelector, useAppDispatch } from '../../../../../redux/hooks'
import {
    calculateExpenses,
    getIncome,
    getTimeframe,
    calculateTimeframe,
} from '../../../../../redux/features/expenses-calc'
import { MONTHLY } from '../../../../../constants/time'

interface Inputs {
    entertainment: number
    hairBeauty: number
    beverages: number
    healthCare: number
    clothing: number
    personalMiscellaneous: number
}

interface TimeFrames {
    entertainment: string
    hairBeauty: string
    beverages: string
    healthCare: string
    clothing: string
    personalMiscellaneous: string
}

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

    const [inputs, setInputs] = useState<Inputs>({
        entertainment: entertainment || 0,
        hairBeauty: hairBeauty || 0,
        beverages: beverages || 0,
        healthCare: healthCare || 0,
        clothing: clothing || 0,
        personalMiscellaneous: personalMiscellaneous || 0,
    })
    const [timeFrame, setTimeFrame] = useState<TimeFrames>({
        entertainment: alltimeFrames.entertainment || MONTHLY,
        hairBeauty: alltimeFrames.hairBeauty || MONTHLY,
        beverages: alltimeFrames.beverages || MONTHLY,
        healthCare: alltimeFrames.healthCare || MONTHLY,
        clothing: alltimeFrames.clothing || MONTHLY,
        personalMiscellaneous: alltimeFrames.personalMiscellaneous || MONTHLY,
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
                label="Entertainment"
                value={entertainment}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.entertainment}
            />
            <InputMuiSelect
                name="hairBeauty"
                onChange={handleChange}
                label="Hair | Beauty"
                value={hairBeauty}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.hairBeauty}
            />
            <InputMuiSelect
                name="beverages"
                onChange={handleChange}
                label="Beverages"
                value={beverages}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.beverages}
            />
            <InputMuiSelect
                name="clothing"
                onChange={handleChange}
                label="Clothing"
                value={clothing}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.clothing}
            />
            <InputMuiSelect
                name="healthCare"
                onChange={handleChange}
                label="Healthcare"
                value={healthCare}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.healthCare}
            />
            <InputMuiSelect
                name="personalMiscellaneous"
                onChange={handleChange}
                label="personalMiscellaneous"
                value={personalMiscellaneous}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.personalMiscellaneous}
            />
        </>
    )
}

export default Personal
