import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import numeral from 'numeral'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import {
    getIncome,
    getTimeframe,
    calculateExpensesTotals,
    expenseTotalMonthly,
} from '../../../../redux/features/expenses-calc'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import styles from './outputComponent.module.scss'
import {
    WEEKLY,
    FORTNIGHTLY,
    MONTHLY,
    ANNUALLY,
} from '../../../../constants/time'

interface ExpenseCalculator {
    totalIncome: number
    totalExpenses: number
    timeFrame: string
}

const OutputComponent = () => {
    const [expenseCalculateTotals, setExpenseCalculateTotals] =
        useState<ExpenseCalculator>({
            totalIncome: 0,
            totalExpenses: 0,
            timeFrame: MONTHLY,
        })
    const [selectTimeFrame, setSelectTimeFrame] = useState(MONTHLY)

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
    const dispatch = useAppDispatch()

    const formattedTotal = (time: any, value: number) => {
        if (time === WEEKLY) return Number(value * 4.345)
        if (time === FORTNIGHTLY) return Number(value * 2.173)
        if (time === MONTHLY) return Number(value)
        if (time === ANNUALLY) return Number(value / 12)
    }

    /* --- INCOME --- */
    const incometotal = formattedTotal(timeFrame.income, income)
    const otherIncometotal = formattedTotal(timeFrame.otherIncome, otherIncome)

    const totalIncome = (
        Number(incometotal) + Number(otherIncometotal)
    ).toFixed(0)

    /* --- HOUSING EXPENSES --- */
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

    /* --- EVERDAY EXPENSES --- */
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

    /* --- REGULAR EXPENSES --- */
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

    /* --- PERSONAL EXPENSES --- */
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

    // /* --- SAVINGS  --- */
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

    /* ALL EXPENSES TOTALLED UP  */
    const totalExpense =
        Number(totalHomeExpenses) +
        Number(totalEverydayExpenses) +
        Number(regularExpensesTotal) +
        Number(personalExpensesTotal)

    const calcTotalTimeFrame = (time: string, value: number) => {
        if (time === WEEKLY) return Number(value / 4.345)
        if (time === FORTNIGHTLY) return Number(value / 2.173)
        if (time === MONTHLY) return Number(value)
        if (time === ANNUALLY) return Number(value * 12)
        return value
    }

    /* All totals calculated for SELECTED timeframe [weekly, fornightly, monthly]  */

    const totalIncomeWithTimeFrames = calcTotalTimeFrame(
        selectTimeFrame,
        Number(totalIncome)
    ).toFixed(0)

    const totalHomeExpensesWithTimeFrames = calcTotalTimeFrame(
        selectTimeFrame,
        Number(totalHomeExpenses)
    ).toFixed(0)

    const totalEverydayExpensesWithTimeFrames = calcTotalTimeFrame(
        selectTimeFrame,
        Number(totalEverydayExpenses)
    ).toFixed(0)

    const regularExpensesTotalWithTimeFrames = calcTotalTimeFrame(
        selectTimeFrame,
        Number(regularExpensesTotal)
    ).toFixed(0)

    const personalExpensesTotalWithTimeFrames = calcTotalTimeFrame(
        selectTimeFrame,
        Number(personalExpensesTotal)
    ).toFixed(0)

    const savingsExpensesTotalWithTimeFrames = calcTotalTimeFrame(
        selectTimeFrame,
        Number(savingsExpensesTotal)
    ).toFixed(0)

    const totalExpenseWithTimeFrame = calcTotalTimeFrame(
        selectTimeFrame,
        totalExpense
    ).toFixed(0)

    const handleChange = (target: string) => {
        if (target === WEEKLY) setSelectTimeFrame(target)
        if (target === FORTNIGHTLY) setSelectTimeFrame(target)
        if (target === MONTHLY) setSelectTimeFrame(target)
        setSelectTimeFrame(target)
    }

    useEffect(() => {
        setExpenseCalculateTotals({
            totalIncome: Number(totalIncomeWithTimeFrames),
            totalExpenses: Number(totalExpenseWithTimeFrame),
            timeFrame: String(selectTimeFrame),
        })
    }, [
        dispatch,
        selectTimeFrame,
        totalExpenseWithTimeFrame,
        totalIncomeWithTimeFrames,
    ])

    useEffect(() => {
        dispatch(calculateExpensesTotals(expenseCalculateTotals))

        dispatch(
            expenseTotalMonthly({
                totalExpenseDays: totalExpense,
                totalIncomeDays: totalIncome,
            })
        )
    }, [
        dispatch,
        expenseCalculateTotals,
        totalExpense,
        totalIncome,
        totalIncomeWithTimeFrames,
    ])

    /* config for hightcharts */

    const config = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
        },
        title: {
            text: 'Expenses Breakdown',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        },
        credits: {
            enabled: false,
        },
        accessibility: {
            point: {
                valueSuffix: '%',
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
            },
        },

        series: [
            {
                name: 'Totals',
                colorByPoint: true,
                data: [
                    {
                        name: 'Housing Expenses',
                        y: Number(totalHomeExpensesWithTimeFrames),
                        sliced: true,
                        selected: true,
                        color: '#3498DB',
                    },
                    {
                        name: 'Everyday Expenses',
                        y: Number(totalEverydayExpensesWithTimeFrames),
                        color: '#27AE60',
                    },
                    {
                        name: 'Regular Expenses',
                        y: Number(regularExpensesTotalWithTimeFrames),
                        color: '#CB4335',
                    },
                    {
                        name: 'Personal Expenses',
                        y: Number(personalExpensesTotalWithTimeFrames),
                        color: '#8E44AD',
                    },
                ],
            },
        ],
    }

    const [showChart, setShowChart] = useState(false)

    const toogleChart = () => {
        setShowChart((prev) => !prev)
    }

    return (
        <div className={styles.container}>
            <Button variant="outlined" onClick={toogleChart}>
                {showChart ? 'Show Totals' : 'Show Expense Breakdown'}
            </Button>
            {showChart ? (
                <div className={styles.container__chart}>
                    <HighchartsReact highcharts={Highcharts} options={config} />
                </div>
            ) : (
                <>
                    {' '}
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
                            {numeral(totalIncomeWithTimeFrames).format('$0,0')}
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
                            Housing Expenses:
                        </p>
                        <p className={styles.output}>
                            {numeral(totalHomeExpensesWithTimeFrames).format(
                                '$0,0'
                            )}
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
                            {numeral(
                                totalEverydayExpensesWithTimeFrames
                            ).format('$0,0')}
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
                            Regular Expenses:
                        </p>
                        <p className={styles.output}>
                            {numeral(regularExpensesTotalWithTimeFrames).format(
                                '$0,0'
                            )}
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
                            {numeral(
                                personalExpensesTotalWithTimeFrames
                            ).format('$0,0')}
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
                            {numeral(savingsExpensesTotalWithTimeFrames).format(
                                '$0,0'
                            )}
                        </p>
                    </div>
                    <div className={styles.selectInput}>
                        <Select
                            name="time"
                            value={selectTimeFrame}
                            onChange={(e: any) => handleChange(e.target.value)}
                            style={{
                                marginLeft: '0.7rem',
                                marginRight: '0.5rem',
                                minWidth: '125.06px',
                                fontSize: '16px',
                                transform: 'translateY(0.1rem)',
                                height: '25%',
                            }}
                            variant="standard"
                            MenuProps={{
                                disableScrollLock: true,
                            }}
                        >
                            <MenuItem value={WEEKLY}>weekly</MenuItem>
                            <MenuItem value={FORTNIGHTLY}>fortnightly</MenuItem>
                            <MenuItem value={MONTHLY}>monthly</MenuItem>
                            <MenuItem value={ANNUALLY}>Annually</MenuItem>
                        </Select>
                    </div>
                </>
            )}
        </div>
    )
}

export default OutputComponent
