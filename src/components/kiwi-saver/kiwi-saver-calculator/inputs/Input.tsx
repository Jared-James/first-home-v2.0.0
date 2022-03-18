import React, { useState, useEffect, ChangeEvent } from 'react'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Input from '@material-ui/core/Input'
import { Button } from '@material-ui/core'
import styles from './input.module.scss'
import { useAppDispatch } from '../../../../redux/hooks'
import { updateKiwiSaverState } from '../../../../redux/features/kiwisaver-calculator'

export const InputComponent = () => {
    const dispatch = useAppDispatch()
    const [kiwiSaverInputs, setKiwisaverInputs] = useState({
        personAge: '',
        balance: '',
        salary: '',
        contributedAmount: '',
        kiwiSaverScheme: 'Balanced',
        depositTime: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setKiwisaverInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.replaceAll(',', ''),
        }))

        console.log(kiwiSaverInputs)
    }

    const handleSubmit = () => {
        dispatch(updateKiwiSaverState(kiwiSaverInputs))
        console.log('submitted', kiwiSaverInputs)
    }

    const selectStyle = {
        marginRight: '15px',
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__inputs}>
                <div className={styles.deposit__output_item}>
                    <p>How old are you?</p>{' '}
                    <Input
                        name="personAge"
                        onChange={handleChange}
                        type="number"
                    />
                </div>
                <div className={styles.deposit__output_item}>
                    <p>Current Balance:</p>
                    <CurrencyTextField name="balance" onChange={handleChange} />
                </div>
                <div className={styles.deposit__output_item}>
                    <p>Salary:</p>
                    <CurrencyTextField name="salary" onChange={handleChange} />
                </div>
                <div className={styles.deposit__output_item}>
                    <p>contributed amount per week</p>
                    <CurrencyTextField
                        name="contributedAmount"
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.deposit__output_item}>
                    <p>KiwiSaver Scheme:</p>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        name="kiwiSaverScheme"
                        value={kiwiSaverInputs.kiwiSaverScheme}
                        onChange={handleChange}
                        MenuProps={{
                            disableScrollLock: true,
                        }}
                        variant="standard"
                        style={{
                            width: '250px',
                        }}
                    >
                        <MenuItem value="Balanced" style={selectStyle}>
                            Balanced
                        </MenuItem>
                        <MenuItem value="Conservative" style={selectStyle}>
                            Conservative
                        </MenuItem>
                        <MenuItem value="Growth" style={selectStyle}>
                            Growth
                        </MenuItem>
                        <MenuItem value="Aggressive" style={selectStyle}>
                            Aggressive
                        </MenuItem>
                    </Select>
                </div>

                <div className={styles.deposit__output_item}>
                    <p>How long until you buy your house?</p>{' '}
                    <Input
                        type="number"
                        name="depositTime"
                        onChange={handleChange}
                    />
                    Years
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    style={{
                        marginTop: '25px',
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    )
}
