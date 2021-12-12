import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { inputReducer } from './features/mortgageCalculator'

export const store = configureStore({
    reducer: {
        mortgageCalclator: inputReducer,
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
