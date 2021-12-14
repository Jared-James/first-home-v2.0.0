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

interface Inputs {
    rent: number
    powerWater: number
    homeContents: number
    tvInternet: number
    phone: number
    miscellaneous: number
}

interface TimeFrame {
    rent: string
    powerWater: string
    homeContents: string
    tvInternet: string
    phone: string
    miscellaneous: string
}

const Housing = () => {
    const { rent, powerWater, homeContents, tvInternet, phone, miscellaneous } =
        useAppSelector(getIncome)
    const alltimeFrames = useAppSelector(getTimeframe)
    const dispatch = useAppDispatch()

    const [inputs, setInputs] = useState<Inputs>({
        rent: rent || 0,
        powerWater: powerWater || 0,
        homeContents: homeContents || 0,
        tvInternet: tvInternet || 0,
        phone: phone || 0,
        miscellaneous: miscellaneous || 0,
    })

    const [timeFrame, setTimeFrame] = useState<TimeFrame>({
        rent: alltimeFrames.rent || MONTHLY,
        powerWater: alltimeFrames.powerWater || MONTHLY,
        homeContents: alltimeFrames.homeContents || MONTHLY,
        tvInternet: alltimeFrames.tvInternet || MONTHLY,
        phone: alltimeFrames.phone || MONTHLY,
        miscellaneous: alltimeFrames.miscellaneous || MONTHLY,
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
                label="Rent"
                value={rent}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.rent}
            />
            <InputMuiSelect
                name="powerWater"
                onChange={handleChange}
                label="Power | Water"
                value={powerWater}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.powerWater}
            />
            <InputMuiSelect
                name="homeContents"
                onChange={handleChange}
                label="Home | Content Insurance"
                value={homeContents}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.homeContents}
            />
            <InputMuiSelect
                name="tvInternet"
                onChange={handleChange}
                label="Tv | Internet"
                value={tvInternet}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.tvInternet}
            />
            <InputMuiSelect
                name="phone"
                onChange={handleChange}
                label="Phone"
                value={phone}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.phone}
            />
            <InputMuiSelect
                name="miscellaneous"
                onChange={handleChange}
                label="Miscellaneous"
                value={miscellaneous}
                handleTimeFrame={handleTimeFrame}
                timeFrameValue={timeFrame.miscellaneous}
            />
        </>
    )
}

export default Housing
