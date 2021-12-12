import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const selectHousePrice = (state: RootState) =>
    state.mortgageCalclator.housePrice

export const selectAll = (state: RootState) => state.mortgageCalclator

export const housePriceSelector = createSelector(
    selectHousePrice,
    (state) => state
)
