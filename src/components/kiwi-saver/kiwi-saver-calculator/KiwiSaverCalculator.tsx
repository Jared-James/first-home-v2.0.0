import React from 'react'
import { InputComponent } from './inputs'
import { Output } from './ouputs'
import styles from './kiwiSaverCalculator.module.scss'

export const KiwiSaverCalculator = () => {
    return (
        <div className={styles.container}>
            <InputComponent />
            <Output />
        </div>
    )
}
