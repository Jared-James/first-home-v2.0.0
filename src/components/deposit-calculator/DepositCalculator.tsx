import React, { useState } from 'react'
import numeral from 'numeral'
import Input from '@material-ui/core/Input'
import styles from './depositCalculator.module.scss'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { getExpensesTotals } from '../../redux/features/expenses-calc'
import { selectAll } from '../../redux/features/mortgageCalculator'

const DepositCalculator = () => {
    const { totalIncome, totalExpenses } = useAppSelector(getExpensesTotals)
    const { deposit } = useAppSelector(selectAll)
    const [percentageValue, setPercentageValue] = useState(35)

    let time = 'monthly'

    const calcPercentageOfLeftOver = () => {
        const result = totalIncome - totalExpenses
        return percentageValue * 0.01 * result
    }

    const calcTimeLeft = (initialDeposit, totalExpenses) => {
        const result = totalIncome - totalExpenses
        const percentage = percentageValue * 0.01 * result
        let convertToDay

        if (time === 'weekly') convertToDay = Math.floor(percentage / 7)
        if (time === 'monthly') convertToDay = Math.floor(percentage / 30.4167)
        if (time === 'fortnightly') convertToDay = Math.floor(percentage / 14)
        if (time === 'annually') convertToDay = Math.floor(percentage / 365)

        return initialDeposit / convertToDay
    }

    const getFormatedStringFromDays = (numberOfDays) => {
        let years = Math.floor(numberOfDays / 365)
        let months = Math.floor((numberOfDays % 365) / 30)
        let days = Math.floor((numberOfDays % 365) % 30)

        if (Number.isNaN(years)) years = 0
        if (Number.isNaN(months)) months = 0
        if (Number.isNaN(days)) days = 0

        const year = years === 1 ? 'year,' : 'years,'
        const month = months === 1 ? 'month,' : 'months,'
        const day = days === 1 ? 'day' : 'days'

        return `${years || ''} ${years ? year : ''} ${months || ''} ${
            months ? month : ''
        } ${days || ''} ${days ? day : ''}`
    }

    return (
        <div className={styles.container}>
            <div>
                <h2 className={styles.title}>Deposit Timeline</h2>
            </div>
            <div className={styles.instructions}>
                <p>
                    Taking everything into account we are able to find out how
                    long it will be before you reach your deposit.
                </p>
            </div>
            <div className={styles.output}>
                <div>
                    <div className={styles.output__item}>
                        <p>Deposit:</p> {numeral(deposit).format('$0,0')}
                    </div>
                    <div className={styles.output__item}>
                        <p>Total Income</p>
                        {numeral(totalIncome).format('$0,0')}
                    </div>
                    <div className={styles.output__item}>
                        <p>Total expesens:</p>
                        {numeral(totalExpenses).format('$0,0')}
                    </div>
                    <div className={styles.output__item}>
                        <p>Total amount left after expenses</p>
                        {numeral(totalIncome - totalExpenses).format('$0,0')}
                    </div>
                </div>

                <div className={styles.centerMe}>
                    <p>
                        If i save{' '}
                        <Input
                            style={{
                                width: '55px',
                                fontSize: '1.3rem',
                                marginLeft: '0.3rem',
                            }}
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
                        {numeral(calcPercentageOfLeftOver()).format('$0,0')} per
                        month
                    </p>
                </div>
            </div>
            <div className={styles.timeTakenContainer}>
                <h3>Total time taken</h3>
                <div>
                    <h2>
                        {getFormatedStringFromDays(
                            calcTimeLeft(deposit, totalExpenses)
                        )}
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default DepositCalculator
