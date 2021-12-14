import { useEffect, useState, ChangeEvent } from 'react'
import InputMuiSelect from '../../../utils/input-mui-select/InputMuiSelect'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import {
    calculateExpenses,
    getIncome,
    getTimeframe,
    calculateTimeframe,
} from '../../../../redux/features/expenses-calc'

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

    const [inputs, setInputs] = useState({
        groceries: groceries || 0,
        fuel: fuel || 0,
        publicTransport: publicTransport || 0,
        eatingOut: eatingOut || 0,
        takeaways: takeaways || 0,
        EverdayMiscellaneous: EverdayMiscellaneous || 0,
    })
    const [timeFrame, setTimeFrame] = useState({
        groceries: alltimeFrames.groceries || 'monthly',
        fuel: alltimeFrames.fuel || 'monthly',
        publicTransport: alltimeFrames.publicTransport || 'monthly',
        eatingOut: alltimeFrames.eatingOut || 'monthly',
        takeaways: alltimeFrames.takeaways || 'monthly',
        EverdayMiscellaneous: alltimeFrames.EverdayMiscellaneous || 'monthly',
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
                currencySymbol="$"
                label="Groceries"
                value={groceries}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.groceries}
            />
            <InputMuiSelect
                name="fuel"
                onChange={handleChange}
                currencySymbol="$"
                label="Fuel"
                value={fuel}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.fuel}
            />
            <InputMuiSelect
                name="publicTransport"
                onChange={handleChange}
                currencySymbol="$"
                label="Public Transport"
                value={publicTransport}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.publicTransport}
            />
            <InputMuiSelect
                name="eatingOut"
                onChange={handleChange}
                currencySymbol="$"
                label="Eating out"
                value={eatingOut}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.eatingOut}
            />
            <InputMuiSelect
                name="takeaways"
                onChange={handleChange}
                currencySymbol="$"
                label="Takeaways"
                value={takeaways}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.takeaways}
            />
            <InputMuiSelect
                name="EverdayMiscellaneous"
                onChange={handleChange}
                currencySymbol="$"
                label="Miscellaneous"
                value={EverdayMiscellaneous}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.EverdayMiscellaneous}
            />
        </>
    )
}

export default Everyday
