import { RootState } from '../../store'

export const getStepper = (state: RootState) => state.stepperReducer.stepper

export const getIncome = (state: RootState) => state.expensesReducer
