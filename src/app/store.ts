import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from './feactures/filters-slice'
import dataExtractorSlice from './feactures/data-extractor-slice'
import filtersTagSlice from './feactures/filters-tag-slice'
import authSlice from './feactures/auth-slice'

export const store = configureStore({
  reducer: {
    dataExtracteds: dataExtractorSlice,
    filtersTag: filtersTagSlice,
    filters: filtersSlice,
    auth: authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
