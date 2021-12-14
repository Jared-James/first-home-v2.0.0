import { createReducer } from '@reduxjs/toolkit'
import {
    getStepperCount,
    calculateExpenses,
    calculateTimeframe,
    calculateExpensesTotals,
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

    groceries: number
    fuel: number
    publicTransport: number
    eatingOut: number
    takeaways: number
    EverdayMiscellaneous: number

    subscriptionFees: number
    memberships: number
    personalInsurance: number
    personalDebt: number
    regularMiscellaneous: number

    entertainment: number
    hairBeauty: number
    beverages: number
    clothing: number
    healthCare: number
    personalMiscellaneous: number

    emergencyFund: number
    investments: number
    kiwisaver: number
    savings: number
    savingsMiscellaneous: number
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

    groceries: 0,
    fuel: 0,
    publicTransport: 0,
    eatingOut: 0,
    takeaways: 0,
    EverdayMiscellaneous: 0,

    subscriptionFees: 0,
    memberships: 0,
    personalInsurance: 0,
    personalDebt: 0,
    regularMiscellaneous: 0,

    entertainment: 0,
    hairBeauty: 0,
    beverages: 0,
    clothing: 0,
    healthCare: 0,
    personalMiscellaneous: 0,

    emergencyFund: 0,
    investments: 0,
    kiwisaver: 0,
    savings: 0,
    savingsMiscellaneous: 0,
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

    groceries: string
    fuel: string
    publicTransport: string
    eatingOut: string
    takeaways: string
    EverdayMiscellaneous: string

    subscriptionFees: string
    memberships: string
    personalInsurance: string
    personalDebt: string
    regularMiscellaneous: string

    entertainment: string
    hairBeauty: string
    beverages: string
    clothing: string
    healthCare: string
    personalMiscellaneous: string

    emergencyFund: string
    investments: string
    kiwisaver: string
    savings: string
    savingsMiscellaneous: string
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

    groceries: 'monthly',
    fuel: 'monthly',
    publicTransport: 'monthly',
    eatingOut: 'monthly',
    takeaways: 'monthly',
    EverdayMiscellaneous: 'monthly',

    subscriptionFees: 'monthly',
    memberships: 'monthly',
    personalInsurance: 'monthly',
    personalDebt: 'monthly',
    regularMiscellaneous: 'monthly',

    entertainment: 'monthly',
    hairBeauty: 'monthly',
    beverages: 'monthly',
    clothing: 'monthly',
    healthCare: 'monthly',
    personalMiscellaneous: 'monthly',

    emergencyFund: 'monthly',
    investments: 'monthly',
    kiwisaver: 'monthly',
    savings: 'monthly',
    savingsMiscellaneous: 'monthly',
}

export const timeframeReducer = createReducer(
    initialStateTimeframe,
    (builder) => {
        builder.addCase(calculateTimeframe, (state, action) => {
            return { ...state, ...action.payload }
        })
    }
)

// calculates the total income + total expeenses

type initialStateTotals = {
    totalIncome: number
    totalExpenses: number
}

const initialStateExpensesTotals: initialStateTotals = {
    totalIncome: 0,
    totalExpenses: 0,
}

export const totalExpenseReducer = createReducer(
    initialStateExpensesTotals,
    (builder) => {
        builder.addCase(calculateExpensesTotals, (state, action) => {
            console.log('payload redux', action)
            return { ...state, ...action.payload }
        })
    }
)
