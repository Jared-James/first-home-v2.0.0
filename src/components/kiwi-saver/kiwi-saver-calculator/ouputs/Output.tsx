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
    const yearsToGrow = []
    const money: any = []

    // rate per payment period
    const Rate = (
        interest: number,
        payment: number,
        compoundFrequency: number
    ): number => {
        return (
            Math.pow(
                1 + interest / compoundFrequency,
                compoundFrequency / payment
            ) - 1
        )
    }

    // the number of payment periods per year * the time in years
    const nPer = (payment: number, years: number): number => {
        return payment * years
    }

    const FV = (
        initial: number,
        interest: number,
        nper: number,
        payment: number
    ): number => {
        return (
            initial * Math.pow(1 + interest, nper) +
            (payment * (Math.pow(1 + interest, nper) - 1)) / interest
        )
    }

    const initial = 0
    const payment = 1000
    const years = 35
    const compoundFrequency = 1
    const paymentFrequency = 12
    const interest = 0.045

    const rate = Rate(interest, paymentFrequency, compoundFrequency)
    let fv = 0

    for (let i = Number(personAge); i <= 65; i++) {
        yearsToGrow.push(i.toString())
    }

    for (let i = 1; i <= 65; i++) {
        const nper = nPer(paymentFrequency, i)

        fv = FV(initial, rate, nper, payment)

        const totalPayments = payment * nper + initial
        const totalInterest = fv - totalPayments
        const graphItem = {
            year: i,
            totalPayment: totalPayments.toFixed(0),
            totalInterest: totalInterest,
            totalMoney: fv,
        }

        money.push({
            y: graphItem.totalMoney.toFixed(0),
            totalPayments: Number(totalPayments),
            totalInterest: totalInterest,
        })
    }

    /*
    CREATES OBJECT FROM yearsToGrow AND BALANCE ARRAY 
    IN {x: '', y: ''} SHAPE, THEN ADDS TO DATA SET ARRAY 
    FOR THE GRAPH TO INGEST
    */

    yearsToGrow.forEach((element, index) => {
        const obj = { x: '', y: '', totalPayments: '', totalInterest: '' }
        obj.x = element
        obj.y = money[index]?.y
        obj.totalPayments = money[index]?.totalPayments
        obj.totalInterest = money[index]?.totalInterest
        dataSet.push(obj)
    })

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            locale: 'en-US',
            tooltip: {
                enabled: true,
                displayColors: false,
                padding: 15,
                callbacks: {
                    title: (tooltipItem: any) => {
                        return `Age: ${tooltipItem[0].label}`
                    },
                    label: (tooltipItem: any) => {
                        return `Total amount      $ ${tooltipItem.formattedValue}`
                    },
                    afterLabel: (tooltipItem: any) => {
                        return `Total Payments  $ ${tooltipItem.raw.totalPayments.toLocaleString()}`
                    },
                    afterBody: (tooltipItem: any) => {
                        return `Total interest      $ ${parseFloat(
                            tooltipItem[0].raw.totalInterest.toFixed(0)
                        ).toLocaleString()}`
                    },
                },
            },
        },
        scales: {
            x: {
                type: 'linear',
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 2,
                },
                grid: {
                    drawOnChartArea: false,
                },
            },
            y: {
                type: 'linear',
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
        elements: {
            point: {
                radius: 0,
            },
        },
        interaction: {
            intersect: false,
        },
    }

    const data = {
        datasets: [
            {
                data: dataSet,
                borderWidth: 1.5,
                borderColor: '#ff0000',
                backgroundColor: '#7bb6dd',
                fill: {
                    target: 'origin',
                    above: '#3700ff', // Area will be red above the origin
                    below: '#ff0000', // And blue below the origin
                },
            },
        ],
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__chart}>
                <Chart
                    id="custom_canvas_background_color"
                    type="line"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
}
