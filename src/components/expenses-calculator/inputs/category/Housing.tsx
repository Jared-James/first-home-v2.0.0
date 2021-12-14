import { useEffect, useState, ChangeEvent } from 'react'
import InputMuiSelect from '../../../utils/input-mui-select/InputMuiSelect'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import {
    calculateExpenses,
    getIncome,
    getTimeframe,
    calculateTimeframe,
} from '../../../../redux/features/expenses-calc'

const Housing = () => {
    const { rent, powerWater, homeContents, tvInternet, phone, miscellaneous } =
        useAppSelector(getIncome)
    const alltimeFrames = useAppSelector(getTimeframe)
    const dispatch = useAppDispatch()

    const [inputs, setInputs] = useState({
        rent: rent || 0,
        powerWater: powerWater || 0,
        homeContents: homeContents || 0,
        tvInternet: tvInternet || 0,
        phone: phone || 0,
        miscellaneous: miscellaneous || 0,
    })
    const [timeFrame, setTimeFrame] = useState({
        rent: alltimeFrames.rent || 'monthly',
        powerWater: alltimeFrames.powerWater || 'monthly',
        homeContents: alltimeFrames.homeContents || 'monthly',
        tvInternet: alltimeFrames.tvInternet || 'monthly',
        phone: alltimeFrames.phone || 'monthly',
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
                name="rent"
                onChange={handleChange}
                currencySymbol="$"
                label="Rent"
                value={rent}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.rent}
            />
            <InputMuiSelect
                name="powerWater"
                onChange={handleChange}
                currencySymbol="$"
                label="Power | Water"
                value={powerWater}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.powerWater}
            />
            <InputMuiSelect
                name="homeContents"
                onChange={handleChange}
                currencySymbol="$"
                label="Home | Content Insurance"
                value={homeContents}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.homeContents}
            />
            <InputMuiSelect
                name="tvInternet"
                onChange={handleChange}
                currencySymbol="$"
                label="Tv | Internet"
                value={tvInternet}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.tvInternet}
            />
            <InputMuiSelect
                name="phone"
                onChange={handleChange}
                currencySymbol="$"
                label="Phone"
                value={phone}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.phone}
            />
            <InputMuiSelect
                name="miscellaneous"
                onChange={handleChange}
                currencySymbol="$"
                label="Miscellaneous"
                value={miscellaneous}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.miscellaneous}
            />
        </>
    )
}

export default Housing
