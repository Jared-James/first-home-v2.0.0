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

interface InputState {
    groceries: number
    fuel: number
    publicTransport: number
    eatingOut: number
    takeaways: number
    EverdayMiscellaneous: number
}

interface TimeFrameState {
    groceries: string
    fuel: string
    publicTransport: string
    eatingOut: string
    takeaways: string
    EverdayMiscellaneous: string
}

const Everyday = () => {
    const {
        groceries,
        fuel,
        publicTransport,
        eatingOut,
        takeaways,
        EverdayMiscellaneous,
    } = useAppSelector(getIncome)
    const alltimeFrames = useAppSelector(getTimeframe)
    const dispatch = useAppDispatch()

    const [inputs, setInputs] = useState<InputState>({
        groceries: groceries || 0,
        fuel: fuel || 0,
        publicTransport: publicTransport || 0,
        eatingOut: eatingOut || 0,
        takeaways: takeaways || 0,
        EverdayMiscellaneous: EverdayMiscellaneous || 0,
    })
    const [timeFrame, setTimeFrame] = useState<TimeFrameState>({
        groceries: alltimeFrames.groceries || MONTHLY,
        fuel: alltimeFrames.fuel || MONTHLY,
        publicTransport: alltimeFrames.publicTransport || MONTHLY,
        eatingOut: alltimeFrames.eatingOut || MONTHLY,
        takeaways: alltimeFrames.takeaways || MONTHLY,
        EverdayMiscellaneous: alltimeFrames.EverdayMiscellaneous || MONTHLY,
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
                name="groceries"
                onChange={handleChange}
                label="Groceries"
                value={groceries}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.groceries}
            />
            <InputMuiSelect
                name="fuel"
                onChange={handleChange}
                label="Fuel"
                value={fuel}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.fuel}
            />
            <InputMuiSelect
                name="publicTransport"
                onChange={handleChange}
                label="Public Transport"
                value={publicTransport}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.publicTransport}
            />
            <InputMuiSelect
                name="eatingOut"
                onChange={handleChange}
                label="Eating out"
                value={eatingOut}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.eatingOut}
            />
            <InputMuiSelect
                name="takeaways"
                onChange={handleChange}
                label="Takeaways"
                value={takeaways}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.takeaways}
            />
            <InputMuiSelect
                name="EverdayMiscellaneous"
                onChange={handleChange}
                label="Miscellaneous"
                value={EverdayMiscellaneous}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.EverdayMiscellaneous}
            />
        </>
    )
}

export default Everyday
