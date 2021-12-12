import { createReducer } from '@reduxjs/toolkit'
import {
    getStepperCount,
    calculateExpenses,
    calculateTimeframe,
} from './actions'

// stepper component state: keeps track of what position in the stepper the user is.

type StepperState = {
    stepper: number
}

const initialStateStepper: StepperState = {
    stepper: 0,
}

export const stepperReducer = createReducer(initialStateStepper, (builder) => {
    builder.addCase(getStepperCount, (state, action) => {
        state.stepper = action.payload
    })
    builder.addCase(calculateExpenses, (state, action) => {
        return { ...state, ...action.payload }
    })
})

// expenses calculator state

type ExpensesState = {
    income: number
    otherIncome: number
    rent: number
    powerWater: number
    homeContents: number
    tvInternet: number
    phone: number
    miscellaneous: number
}

const initialStateExpenses: ExpensesState = {
    income: 0,
    otherIncome: 0,
    rent: 0,
    powerWater: 0,
    homeContents: 0,
    tvInternet: 0,
    phone: 0,
    miscellaneous: 0,
}

export const expensesReducer = createReducer(
    initialStateExpenses,
    (builder) => {
        builder.addCase(calculateExpenses, (state, action) => {
            return { ...state, ...action.payload }
        })
    }
)

// expenses calculator timeframe state

type TimeframeState = {
    income: string
    otherIncome: string
    rent: string
    powerWater: string
    homeContents: string
    tvInternet: string
    phone: string
    miscellaneous: string
}

const initialStateTimeframe: TimeframeState = {
    income: 'monthly',
    otherIncome: 'monthly',
    rent: 'monthly',
    powerWater: 'monthly',
    homeContents: 'monthly',
    tvInternet: 'monthly',
    phone: 'monthly',
    miscellaneous: 'monthly',
}

export const timeframeReducer = createReducer(
    initialStateTimeframe,
    (builder) => {
        builder.addCase(calculateTimeframe, (state, action) => {
            console.log('payload redux', action)
            return { ...state, ...action.payload }
        })
    }
)
