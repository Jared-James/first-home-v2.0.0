import React, { useState } from 'react'
import numeral from 'numeral'
import Input from '@material-ui/core/Input'
import styles from './depositCalculator.module.scss'
import { useAppSelector } from '../../redux/hooks'
import { getExpensesTotals } from '../../redux/features/expenses-calc'
import { selectAll } from '../../redux/features/mortgageCalculator'
import {
    WEEKLY,
    FORTNIGHTLY,
    MONTHLY,
    ANNUALLY,
    YEAR,
    YEARS,
    MONTH,
    MONTHS,
    DAY,
    DAYS,
} from '../../constants/time'

const DepositCalculator = () => {
    const { totalIncome, totalExpenses } = useAppSelector(getExpensesTotals)
    const { deposit } = useAppSelector(selectAll)
    const [percentageValue, setPercentageValue] = useState(35)
    const [time, setTime] = useState(MONTHLY)

    const calculateSavingPercentage = () => {
        const result = totalIncome - totalExpenses
        return percentageValue * 0.01 * result
    }

    const calculateTimeUntillDeposit = (
        initialDeposit: number,
        expenses: number
    ) => {
        const result = totalIncome - expenses
        const percentage = percentageValue * 0.01 * result
        let convertToDay = 0
        if (time === WEEKLY) convertToDay = Math.floor(percentage / 7)
        if (time === FORTNIGHTLY) convertToDay = Math.floor(percentage / 14)
        if (time === MONTHLY) convertToDay = Math.floor(percentage / 30.4167)
        if (time === ANNUALLY) convertToDay = Math.floor(percentage / 365)

        return initialDeposit / convertToDay
    }

    const getFormatedStringFromDays = (numberOfDays: number) => {
        let years = Math.floor(numberOfDays / 365)
        let months = Math.floor((numberOfDays % 365) / 30)
        let days = Math.floor((numberOfDays % 365) % 30)

        if (Number.isNaN(years)) years = 0
        if (Number.isNaN(months)) months = 0
        if (Number.isNaN(days)) days = 0

        const year = years === 1 ? YEAR : YEARS
        const month = months === 1 ? MONTH : MONTHS
        const day = days === 1 ? DAY : DAYS

        return `${years || ''} ${years ? year : ''} ${months || ''} ${
            months ? month : ''
        } ${days || ''} ${days ? day : ''}`
    }

    return (
        <div className={styles.deposit__container}>
            <div>
                <h2 className={styles.deposit__title}>Deposit Timeline</h2>
            </div>
            <div className={styles.deposit_instructions}>
                <p>
                    Taking everything into account we are able to find out how
                    long it will be before you reach your deposit.
                </p>
            </div>
            <div className={styles.deposit_output}>
                <div>
                    <div className={styles.deposit__output_item}>
                        <p>Deposit:</p> {numeral(deposit).format('$0,0')}
                    </div>
                    <div className={styles.deposit__output_item}>
                        <p>Total Income</p>
                        {numeral(totalIncome).format('$0,0')}
                    </div>
                    <div className={styles.deposit__output_item}>
                        <p>Total expesens:</p>
                        {numeral(totalExpenses).format('$0,0')}
                    </div>
                    <div className={styles.deposit__output_item}>
                        <p>After expenses</p>
                        {numeral(totalIncome - totalExpenses).format('$0,0')}
                    </div>
                </div>

                <div className={styles.deposit__savings}>
                    <p>
                        If i save{' '}
                        <Input
                            className={styles.deposit__input}
                            defaultValue={percentageValue}
                            inputProps={{ inputMode: 'numeric' }}
                            onChange={(e) =>
                                setPercentageValue(Number(e.target.value))
                            }
                            type="number"
                        />{' '}
                        % of{' '}
                        {numeral(totalIncome - totalExpenses).format('$0,0')} I
                        will save{' '}
                        {numeral(calculateSavingPercentage()).format('$0,0')}{' '}
                        per month
                    </p>
                </div>
            </div>
            <div className={styles.deposit__time_untill_deposit}>
                <h3>Time untill deposit:</h3>
                <div>
                    <h2>
                        {getFormatedStringFromDays(
                            calculateTimeUntillDeposit(deposit, totalExpenses)
                        )}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default DepositCalculator
