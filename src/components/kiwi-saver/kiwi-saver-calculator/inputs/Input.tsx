import React from 'react'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Input from '@material-ui/core/Input'

import styles from './input.module.scss'

export const InputComponent = () => {
    return (
        <div className={styles.container}>
            {/* <p>Inputs</p> */}
            <div className={styles.container__inputs}>
                <div className={styles.deposit__output_item}>
                    <p>How old are you?</p> <Input type="number" />
                </div>
                <div className={styles.deposit__output_item}>
                    <p>Current Balance:</p>
                    <CurrencyTextField />
                </div>
                <div className={styles.deposit__output_item}>
                    <p>Salary:</p>
                    <CurrencyTextField />
                </div>
                <div className={styles.deposit__output_item}>
                    <p>contributed amount:</p>
                    <CurrencyTextField />
                </div>
                <div className={styles.deposit__output_item}>
                    <p>KiwiSaver Scheme:</p>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                    >
                        {' '}
                        <MenuItem>Ten</MenuItem>
                    </Select>
                </div>

                <div className={styles.deposit__output_item}>
                    <p>How long until you buy your house?</p>{' '}
                    <Input type="number" /> Years
                </div>
            </div>
        </div>
    )
}
