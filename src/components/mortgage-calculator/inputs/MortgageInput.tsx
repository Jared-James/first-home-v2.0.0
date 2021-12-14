import Button from '@mui/material/Button'
import { useState, ChangeEvent } from 'react'
import InputMui from '../../utils/input-mui/InputMui'
import style from './mortgageInput.module.scss'
import { useAppDispatch } from '../../../redux/hooks'
import { updateHousePrice } from '../../../redux/features/mortgageCalculator'

interface Inputs {
    housePrice: number
    deposit: number
    interest: number
    lengthOfLoan: number
}

const MortgageInput = () => {
    const dispatch = useAppDispatch()

    const [inputs, setInputs] = useState<Inputs>({
        housePrice: 0,
        deposit: 0,
        interest: 0,
        lengthOfLoan: 0,
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.replaceAll(',', ''),
        }))

    return (
        <div className={style.inputs__container}>
            <InputMui
                name="housePrice"
                onChange={handleChange}
                label="House Price"
            />
            <InputMui name="deposit" onChange={handleChange} label="Deposit" />
            <InputMui
                name="interest"
                onChange={handleChange}
                currencySymbol="%"
                label="Interest per annum"
                decimalPlacesShownOnFocus={2}
                decimalPlacesShownOnBlur={2}
                decimalPlaces={2}
                decimalCharacter="."
                placeholder="3.55"
            />
            <InputMui
                name="lengthOfLoan"
                onChange={handleChange}
                currencySymbol="Years"
                label="Length of Loan"
            />
            <Button
                variant="contained"
                style={{ width: '90%' }}
                onClick={() => dispatch(updateHousePrice(inputs))}
                type="submit"
            >
                Submit
            </Button>
        </div>
    )
}

export default MortgageInput
