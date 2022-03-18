import { createReducer } from '@reduxjs/toolkit'
import { updateKiwiSaverState } from './actions'

type kiwiSaver = {
    personAge: string
    balance: string
    salary: string
    contributedAmount: string
    kiwiSaverScheme: string
    depositTime: string
}

const initialStateKiwiSaver: kiwiSaver = {
    personAge: '18',
    balance: '0',
    salary: '0',
    contributedAmount: '1000',
    kiwiSaverScheme: 'Balanced',
    depositTime: '35',
}

export const kiwiSaverReducer = createReducer(
    initialStateKiwiSaver,
    (builder) => {
        builder.addCase(updateKiwiSaverState, (state, action) => {
            return { ...state, ...(action.payload as unknown as {}) }
        })
    }
)
