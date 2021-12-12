import Button from '@mui/material/Button'
import { useState, ChangeEvent } from 'react'
import InputMui from '../../utils/input-mui/InputMui'
import style from './mortgageInput.module.scss'
import { useAppDispatch } from '../../../redux/hooks'
import { updateHousePrice } from '../../../redux/features/mortgageCalculator'

const MortgageInput = () => {
    const dispatch = useAppDispatch()

    const [inputs, setInputs] = useState({
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
        <div className={style.container}>
            <InputMui
                name="housePrice"
                onChange={handleChange}
                value={inputs.housePrice}
                currencySymbol="$"
                label="House Price"
            />
            <InputMui
                name="deposit"
                onChange={handleChange}
                value={inputs.deposit}
                currencySymbol="$"
                label="Deposit"
            />
            <InputMui
                name="interest"
                onChange={handleChange}
                value={inputs.interest}
                currencySymbol="%"
                label="Interest per annum"
            />
            <InputMui
                name="lengthOfLoan"
                onChange={handleChange}
                value={inputs.lengthOfLoan}
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
