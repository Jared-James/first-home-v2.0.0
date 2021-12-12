import { createAction } from '@reduxjs/toolkit'

export const getStepperCount = createAction<number>('stepper/getCount')

export const calculateExpenses = createAction<object>('expenses/calculate')
export const calculateTimeframe = createAction<object>('expenses/timeframe')
