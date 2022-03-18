/* eslint-disable prefer-exponentiation-operator */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-plusplus */
import React from 'react'
import { Chart as ChartJS, defaults } from 'chart.js'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import styles from './output.module.scss'
import { useAppSelector } from '../../../../redux/hooks'
import { getKiwiSaverState } from '../../../../redux/features/kiwisaver-calculator'

export const Output = () => {
    const kiwiSaverState = useAppSelector(getKiwiSaverState)
    const {
        personAge,
        balance,
        contributedAmount,
        kiwiSaverScheme,
        salary,
        depositTime,
    } = kiwiSaverState
    const dataSet: any = []

    // F = P*(1+rate)^nper + A*( ((1+rate)^nper - 1)/rate )
    // rate = ((1+r/n)^(n/p))-1
    // nper = p*t

    /*
    calculates a percentage based on the users balance
    the percentage of return & inflation amount which is 2%
    */

    const calculatePercentage = (amount: any, percent: any) => {
        return Number(amount) * (percent / 100)
    }

    /* 
    ADDS USERS AGE TO ARRAY
    */
    const yearsToGrow = []
    for (let i = Number(personAge); i <= 65; i++) {
        yearsToGrow.push(i.toString())
    }

    /* 
    ADDS COMPOUNDING BALANCE TO ARRAY
    */
    const money: any = []

    let totalInterest = 0
    const principal = contributedAmount
    const rate = 0.035
    const n = 1
    const currentBalance = 100000
    let total = 0

    const compoundInterest = (p, t, r, n) => {
        const principalAmount = Number(principal) * 12
        const amount = principalAmount * Math.pow(1 + r / n, n * t)

        totalInterest += amount - principalAmount
        total += principalAmount + totalInterest

        return {
            total: Number(total.toFixed(0)),
            interest: Number(totalInterest.toFixed(0)),
        }
    }

    for (let i = Number(personAge); i <= 65; i++) {
        const result = compoundInterest(
            principal,
            personAge.length - 1,
            rate,
            n
        )

        console.log(total)

        money.push(result.total.toFixed(0))
    }

    /*
    CREATES OBJECT FROM yearsToGrow AND BALANCE ARRAY 
    IN {x: '', y: ''} SHAPE, THEN ADDS TO DATA SET ARRAY 
    FOR THE GRAPH TO INGEST
    */

    yearsToGrow.forEach((element, index) => {
        const obj = { x: '', y: '' }
        obj.x = element.toString()
        obj.y = money[index].toString()
        dataSet.push(obj)
    })

    const options = {
        plugins: {
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                type: 'linear',
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 1,
                },
            },
            y: {
                type: 'linear',
            },
        },
    }

    const data = {
        // labels,
        datasets: [
            {
                data: dataSet,
                label: 'Total',
                borderColor: '#3e95cd',
                backgroundColor: '#7bb6dd',
            },
        ],
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__chart}>
                <Chart type="line" data={data} options={options} />
            </div>
        </div>
    )
}
