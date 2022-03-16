import React, { useState } from 'react'
import numeral from 'numeral'
import Input from '@material-ui/core/Input'
import styles from './depositCalculator.module.scss'
import { useAppSelector } from '../../../redux/hooks'
import {
    getExpensesTotals,
    getExpenseTotalMonthly,
} from '../../../redux/features/expenses-calc'
import { selectAll } from '../../../redux/features/mortgageCalculator'
import { YEAR, YEARS, MONTH, MONTHS, DAY, DAYS } from '../../../constants/time'

const DepositCalculator = () => {
    const { totalIncome, totalExpenses, timeFrame } =
        useAppSelector(getExpensesTotals)
    const { deposit } = useAppSelector(selectAll)
    const { totalExpenseDays, totalIncomeDays } = useAppSelector(
        getExpenseTotalMonthly
    )
    const [percentageValue, setPercentageValue] = useState<number>(35)

    const calculateSavingPercentage = () => {
        const result = totalIncome - totalExpenses
        return percentageValue * 0.01 * result
    }

    const calculateTimeUntillDeposit = (
        initialDeposit: number,
        expenses: number
    ) => {
        const result = totalIncomeDays - expenses
        const percentage = percentageValue * 0.01 * result
        const convertToDay = Math.floor(percentage / 30.4167)

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
        <div className={styles.deposit__container} id="deposit">
            <div>
                <h2 className={styles.deposit__title}>Deposit Timeline</h2>
            </div>
            <div className={styles.deposit_instructions}>
                <p>
                    {`based on your savings, you can increase or decrease the
                    amount you would like to you use towards your deposit. Then
                    you'll be able to see how long it will take you to
                    save for your deposit amount.`}
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
                        <p>Total Expesens:</p>
                        {numeral(totalExpenses).format('$0,0')}
                    </div>
                    <div className={styles.deposit__output_item}>
                        <p>After Expenses</p>
                        {numeral(totalIncome - totalExpenses).format('$0,0')}
                    </div>
                </div>

                <div className={styles.deposit__savings}>
                    <p>
                        If I save{' '}
                        <Input
                            className={styles.deposit__input}
                            defaultValue={percentageValue}
                            inputProps={{ inputMode: 'numeric' }}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setPercentageValue(Number(e.target.value))}
                            type="number"
                        />{' '}
                        % of{' '}
                        {numeral(totalIncome - totalExpenses).format('$0,0')} I
                        will save{' '}
                        {numeral(calculateSavingPercentage()).format('$0,0')}{' '}
                        {timeFrame}
                    </p>
                </div>
            </div>
            <div className={styles.deposit__time_untill_deposit}>
                <h3>Time untill Deposit:</h3>
                <div>
                    <h2>
                        {getFormatedStringFromDays(
                            calculateTimeUntillDeposit(
                                deposit,
                                totalExpenseDays
                            )
                        )}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default DepositCalculator
