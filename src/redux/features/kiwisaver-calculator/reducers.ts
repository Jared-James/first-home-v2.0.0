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
    personAge: '',
    balance: '',
    salary: '',
    contributedAmount: '',
    kiwiSaverScheme: 'Balanced',
    depositTime: '',
}

export const kiwiSaverReducer = createReducer(
    initialStateKiwiSaver,
    (builder) => {
        builder.addCase(updateKiwiSaverState, (state, action) => {
            return { ...state, ...(action.payload as unknown as {}) }
        })
    }
)
