import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { selectAll } from '../../../redux/features/mortgageCalculator'
import { useAppSelector } from '../../../redux/hooks'
import styles from './output.module.scss'

const Estimated = () => {
    const { housePrice, deposit, interest, lengthOfLoan } =
        useAppSelector(selectAll)
    const [timeFrame, setTimeFrame] = useState<string>('monthly')
    const [repayments, setRepayments] = useState<number>(0)
    const [totalInterestPayable, setTotalInterestPayable] = useState<number>(0)
    const [totalAmountPayable, setTotalAmountPayable] = useState<number>(0)
    const [loanAmount, setLoanAmount] = useState<number>(0)

    const percentageRate = Number(interest) / 1200
    const loanLength = 12 * Number(lengthOfLoan)
    const monthlyPayment =
        ((housePrice - deposit) * percentageRate) /
        (1 - (1 + percentageRate) ** (loanLength * -1))

    useEffect(() => {
        setRepayments(monthlyPayment)
        setTotalAmountPayable(monthlyPayment * 12 * lengthOfLoan)

        setTotalInterestPayable(totalAmountPayable - loanAmount)
        setLoanAmount(housePrice - deposit)
    }, [
        deposit,
        housePrice,
        lengthOfLoan,
        loanAmount,
        monthlyPayment,
        totalAmountPayable,
    ])

    const calculatePayments = (time: string) => {
        if (time === 'monthly') {
            setRepayments((monthlyPayment * 12) / 12)
            setTimeFrame(time)
        }
        if (time === 'fortnightly') {
            setRepayments((monthlyPayment * 12) / 26.071)
            setTimeFrame(time)
        }
        if (time === 'weekly') {
            setRepayments((monthlyPayment * 12) / 52.143)
            setTimeFrame(time)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__circle}>
                <div className={styles.repayments}>
                    <p>
                        Estimated
                        <Select
                            value={timeFrame}
                            onChange={(e: any) =>
                                calculatePayments(e.target.value)
                            }
                            style={{
                                marginLeft: '0.7rem',
                                marginRight: '0.5rem',
                                minWidth: '125.06px',
                                fontSize: '16px',
                                transform: 'translateY(0.1rem)',
                            }}
                            variant="standard"
                            MenuProps={{
                                disableScrollLock: true,
                            }}
                        >
                            <MenuItem value="weekly">weekly</MenuItem>
                            <MenuItem value="fortnightly">fortnightly</MenuItem>
                            <MenuItem value="monthly">monthly</MenuItem>
                        </Select>
                        payment:
                    </p>
                    <div className={styles.repayments__item}>
                        {numeral(repayments).format('$0,0')}
                    </div>
                </div>
                <div className={styles.totals}>
                    <p className={styles.totals__item}>
                        <span>Loan Amount:</span>
                        <span>{numeral(loanAmount).format('$0,0')}</span>
                    </p>
                    <p className={styles.totals__item}>
                        <span> Total interest payable:</span>
                        <span>
                            {numeral(totalInterestPayable).format('$0,0')}
                        </span>
                    </p>
                    <p className={styles.totals__item}>
                        <span> Total amount payable:</span>
                        <span>
                            {' '}
                            {numeral(totalAmountPayable).format('$0,0')}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Estimated
