import React from 'react'
import Button from '@mui/material/Button'
import numeral from 'numeral'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import CardContent from '@material-ui/core/CardContent'
import { getIncome, getTimeframe } from '../../../redux/features/expenses-calc'
import { useAppSelector } from '../../../redux/hooks'
import styles from './outputComponent.module.scss'

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

        groceries,
        fuel,
        publicTransport,
        eatingOut,
        takeaways,
        EverdayMiscellaneous,

        subscriptionFees,
        memberships,
        personalInsurance,
        personalDebt,
        regularMiscellaneous,

        entertainment,
        hairBeauty,
        beverages,
        clothing,
        healthCare,
        personalMiscellaneous,

        emergencyFund,
        investments,
        kiwisaver,
        savings,
        savingsMiscellaneous,
    } = useAppSelector(getIncome)

    const timeFrame = useAppSelector(getTimeframe)

    const formattedTotal = (time: any, value: number) => {
        if (time === 'weekly') return Number(value * 4.345)
        if (time === 'fortnightly') return Number(value * 2.173)
        if (time === 'monthly') return Number(value)
        if (time === 'annually') return Number(value / 12)
    }

    /* --- INCOME --- */
    const incometotal = formattedTotal(timeFrame.income, income)
    const otherIncometotal = formattedTotal(timeFrame.otherIncome, otherIncome)

    const totalIncome = (
        Number(incometotal) + Number(otherIncometotal)
    ).toFixed(0)

    /* --- HOUSING --- */
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

    const totalHomeExpenses = (
        Number(rentTotal) +
        Number(powerWaterTotal) +
        Number(homeContentsTotal) +
        Number(tvInternetTotal) +
        Number(phoneTotal) +
        Number(HomeMiscellaneousTotal)
    ).toFixed(0)

    /* --- EVERDAY --- */
    const groceriesTotal = formattedTotal(timeFrame.groceries, groceries)
    const fuelTotal = formattedTotal(timeFrame.fuel, fuel)
    const publicTransportTotal = formattedTotal(
        timeFrame.publicTransport,
        publicTransport
    )
    const eatingOutTotal = formattedTotal(timeFrame.eatingOut, eatingOut)
    const takeawaysTotal = formattedTotal(timeFrame.takeaways, takeaways)
    const EverdayMiscellaneousTotal = formattedTotal(
        timeFrame.EverdayMiscellaneous,
        EverdayMiscellaneous
    )

    const totalEverydayExpenses = (
        Number(groceriesTotal) +
        Number(fuelTotal) +
        Number(publicTransportTotal) +
        Number(eatingOutTotal) +
        Number(takeawaysTotal) +
        Number(EverdayMiscellaneousTotal)
    ).toFixed(0)

    /* --- REGULAR --- */
    const subscriptionFeeTotal = formattedTotal(
        timeFrame.subscriptionFees,
        subscriptionFees
    )
    const membershipsTotal = formattedTotal(timeFrame.memberships, memberships)
    const personalInsuranceTotal = formattedTotal(
        timeFrame.personalInsurance,
        personalInsurance
    )
    const personalDebtTotal = formattedTotal(
        timeFrame.personalDebt,
        personalDebt
    )
    const regularMiscellaneousTotal = formattedTotal(
        timeFrame.regularMiscellaneous,
        regularMiscellaneous
    )

    const regularExpensesTotal = (
        Number(subscriptionFeeTotal) +
        Number(membershipsTotal) +
        Number(personalInsuranceTotal) +
        Number(personalDebtTotal) +
        Number(regularMiscellaneousTotal)
    ).toFixed(0)

    /* --- PERSONAL --- */
    const entertainmentTotal = formattedTotal(
        timeFrame.entertainment,
        entertainment
    )
    const hairBeautyTotal = formattedTotal(timeFrame.hairBeauty, hairBeauty)
    const beveragesTotal = formattedTotal(timeFrame.beverages, beverages)
    const clothingTotal = formattedTotal(timeFrame.clothing, clothing)
    const healthCareTotal = formattedTotal(timeFrame.healthCare, healthCare)
    const personalMiscellaneousTotal = formattedTotal(
        timeFrame.personalMiscellaneous,
        personalMiscellaneous
    )

    const personalExpensesTotal = (
        Number(entertainmentTotal) +
        Number(hairBeautyTotal) +
        Number(beveragesTotal) +
        Number(clothingTotal) +
        Number(healthCareTotal) +
        Number(personalMiscellaneousTotal)
    ).toFixed(0)

    // /* --- SAVINGS --- */
    const emergencyFundTotal = formattedTotal(
        timeFrame.emergencyFund,
        emergencyFund
    )
    const investmentsTotal = formattedTotal(timeFrame.investments, investments)
    const kiwisaverTotal = formattedTotal(timeFrame.kiwisaver, kiwisaver)
    const savingsTotal = formattedTotal(timeFrame.savings, savings)
    const savingsMiscellaneousTotal = formattedTotal(
        timeFrame.savingsMiscellaneous,
        savingsMiscellaneous
    )

    const savingsExpensesTotal = (
        Number(emergencyFundTotal) +
        Number(investmentsTotal) +
        Number(kiwisaverTotal) +
        Number(savingsTotal) +
        Number(savingsMiscellaneousTotal)
    ).toFixed(0)

    return (
        <div className={styles.container}>
            <Button variant="outlined">Show Expense Breakdown</Button>
            <div className={styles.container__output}>
                <p className={styles.title}>
                    <KeyboardArrowRightIcon
                        style={{
                            color: '#3498DB',
                            marginRight: '5px',
                        }}
                    />
                    Total Income:
                </p>
                <p className={styles.output}>
                    {numeral(totalIncome).format('$0,0')}
                </p>
            </div>
            <div className={styles.container__output}>
                <p className={styles.title}>
                    <KeyboardArrowRightIcon
                        style={{
                            color: '#27AE60',
                            marginRight: '5px',
                        }}
                    />
                    Housing expenses:
                </p>
                <p className={styles.output}>
                    {numeral(totalHomeExpenses).format('$0,0')}
                </p>
            </div>
            <div className={styles.container__output}>
                <p className={styles.title}>
                    <KeyboardArrowRightIcon
                        style={{
                            color: '#CB4335',
                            marginRight: '5px',
                        }}
                    />
                    Everyday Expenses:
                </p>
                <p className={styles.output}>
                    {numeral(totalEverydayExpenses).format('$0,0')}
                </p>
            </div>
            <div className={styles.container__output}>
                <p className={styles.title}>
                    <KeyboardArrowRightIcon
                        style={{
                            color: '#8E44AD',
                            marginRight: '5px',
                        }}
                    />
                    regular Expenses:
                </p>
                <p className={styles.output}>
                    {numeral(regularExpensesTotal).format('$0,0')}
                </p>
            </div>
            <div className={styles.container__output}>
                <p className={styles.title}>
                    {' '}
                    <KeyboardArrowRightIcon
                        style={{
                            color: '#ff4da6',
                            marginRight: '5px',
                        }}
                    />
                    Personal Expenses:
                </p>
                <p className={styles.output}>
                    {numeral(personalExpensesTotal).format('$0,0')}
                </p>
            </div>
            <div className={styles.container__output}>
                <p className={styles.title}>
                    {' '}
                    <KeyboardArrowRightIcon
                        style={{
                            color: '#ff6600',
                            marginRight: '5px',
                        }}
                    />
                    Total Savings:
                </p>
                <p className={styles.output}>
                    {numeral(savingsExpensesTotal).format('$0,0')}
                </p>
            </div>
        </div>
    )
}

export default OutputComponent
