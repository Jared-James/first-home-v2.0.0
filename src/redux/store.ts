import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { inputReducer } from './features/mortgageCalculator'
import {
    expensesReducer,
    stepperReducer,
    timeframeReducer,
    totalExpenseReducer,
    totalExpenseReducerMonthly,
} from './features/expenses-calc'

export const store = configureStore({
    reducer: {
        mortgageCalclator: inputReducer,
        stepperReducer,
        expensesReducer,
        timeframeReducer,
        totalExpenseReducer,
        totalExpenseReducerMonthly,
    },
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
