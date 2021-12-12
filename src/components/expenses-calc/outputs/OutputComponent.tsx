import React from 'react'
import numeral from 'numeral'
import { getIncome, getTimeframe } from '../../../redux/features/expenses-calc'
import { useAppSelector } from '../../../redux/hooks'

const OutputComponent = () => {
    const {
        income,
        otherIncome,
        rent,
        powerWater,
        homeContents,
        tvInternet,
        phone,
        miscellaneous,
    } = useAppSelector(getIncome)

    const timeFrame = useAppSelector(getTimeframe)

    const formattedTotal = (time: any, value: number) => {
        if (time === 'weekly') return Number(value * 4.345)
        if (time === 'fortnightly') return Number(value * 2.173)
        if (time === 'monthly') return Number(value)
        if (time === 'annually') return Number(value / 12)
    }

    /* --- INCOME --- */
    // calculated by the timeframe
    const incometotal = formattedTotal(timeFrame.income, income)
    const otherIncometotal = formattedTotal(timeFrame.otherIncome, otherIncome)

    // calculates all the income expenses
    const totalIncome = (
        Number(incometotal) + Number(otherIncometotal)
    ).toFixed(0)

    /* --- HOUSING --- */
    // calculated by the time frame
    const rentTotal = formattedTotal(timeFrame.rent, rent)
    const powerWaterTotal = formattedTotal(timeFrame.powerWater, powerWater)
    const homeContentsTotal = formattedTotal(
        timeFrame.homeContents,
        homeContents
    )
    const tvInternetTotal = formattedTotal(timeFrame.tvInternet, tvInternet)
    const phoneTotal = formattedTotal(timeFrame.phone, phone)
    const HomeMiscellaneousTotal = formattedTotal(
        timeFrame.miscellaneous,
        miscellaneous
    )

    // calculates all the housing expenses
    const totalHomeExpenses = (
        Number(rentTotal) +
        Number(powerWaterTotal) +
        Number(homeContentsTotal) +
        Number(tvInternetTotal) +
        Number(phoneTotal) +
        Number(HomeMiscellaneousTotal)
    ).toFixed(0)

    /* --- EVERDAY --- */
    // everyday expenses

    /* --- REGULAR --- */
    // regular expenses

    /* --- PERSONAL --- */
    // personal expenses

    /* --- SAVINGS --- */
    // savings expenses

    console.log('total income formatted', incometotal)

    return (
        <div>
            <p>output monthly</p>
            <p>
                Income + other income
                {numeral(totalIncome).format('$0,0')}
            </p>
            <p>
                Housing expenses
                {numeral(totalHomeExpenses).format('$0,0')}
            </p>
        </div>
    )
}

export default OutputComponent
