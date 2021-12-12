import { createReducer } from '@reduxjs/toolkit'
import { updateHousePrice } from './actions'

type InputState = {
    housePrice: number
    deposit: number
    interest: number
    lengthOfLoan: number
}

const initialState: InputState = {
    housePrice: 0,
    deposit: 0,
    interest: 0,
    lengthOfLoan: 0,
}

export const inputReducer = createReducer(initialState, (builder) => {
    builder.addCase(updateHousePrice, (state, action) => {
        return { ...state, ...(action.payload as unknown as {}) }
    })
})
