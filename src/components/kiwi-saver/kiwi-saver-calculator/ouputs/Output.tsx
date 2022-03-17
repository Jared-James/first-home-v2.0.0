import React from 'react'
import { Chart as ChartJS, defaults } from 'chart.js'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'
import styles from './output.module.scss'

export const Output = () => {
    const dataSet = []

    const years = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const money = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

    years.forEach((element, index) => {
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
                    stepSize: 2,
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
