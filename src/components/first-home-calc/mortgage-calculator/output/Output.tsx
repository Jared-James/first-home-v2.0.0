import numeral from 'numeral'
import React, { useEffect, useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { selectAll } from '../../../../redux/features/mortgageCalculator'
import { useAppSelector } from '../../../../redux/hooks'
import styles from './output.module.scss'
import { WEEKLY, FORTNIGHTLY, MONTHLY } from '../../../../constants/time'

const Estimated = () => {
    const { housePrice, deposit, interest, lengthOfLoan } =
        useAppSelector(selectAll)

    const [timeFrame, setTimeFrame] = useState<string>(MONTHLY)
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
        if (time === MONTHLY) {
            setRepayments((monthlyPayment * 12) / 12)
            setTimeFrame(time)
        }
        if (time === FORTNIGHTLY) {
            setRepayments((monthlyPayment * 12) / 26.071)
            setTimeFrame(time)
        }
        if (time === WEEKLY) {
            setRepayments((monthlyPayment * 12) / 52.143)
            setTimeFrame(time)
        }
    }

    return (
        <div className={styles.output__container}>
            <div className={styles.output__container_inner}>
                <div>
                    Estimated
                    <Select
                        className={styles.output_select}
                        value={timeFrame}
                        onChange={(e: any) => calculatePayments(e.target.value)}
                        variant="standard"
                        MenuProps={{
                            disableScrollLock: true,
                        }}
                    >
                        <MenuItem value={WEEKLY}>weekly</MenuItem>
                        <MenuItem value={FORTNIGHTLY}>fortnightly</MenuItem>
                        <MenuItem value={MONTHLY}>monthly</MenuItem>
                    </Select>
                    payment:
                    <div className={styles.output__repayments}>
                        {numeral(repayments).format('$0,0')}
                    </div>
                </div>
                <div className={styles.output__totals}>
                    <p className={styles.output__totals_item}>
                        <span>Loan Amount:</span>
                        <span>{numeral(loanAmount).format('$0,0')}</span>
                    </p>
                    <p className={styles.output__totals_item}>
                        <span> Total Interest Payable:</span>
                        <span>
                            {numeral(totalInterestPayable).format('$0,0')}
                        </span>
                    </p>
                    <p className={styles.output__totals_item}>
                        <span> Total Amount Payable:</span>
                        <span>
                            {numeral(totalAmountPayable).format('$0,0')}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Estimated
