import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type StateProps = App.Module.FiltersProps

const initialState: StateProps = {
  categorie: '',
  source: '',
  title: '',
  dateRange: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategorieChanges(state, action: PayloadAction<string>) {
      state.categorie = action.payload
    },

    setSourceChanges(state, action: PayloadAction<string>) {
      state.source = action.payload
    },

    setTitleChanges(state, action: PayloadAction<string>) {
      state.title = action.payload
    },

    setDateRangeChanges(state, action: PayloadAction<string>) {
      state.dateRange = action.payload
    },
  },
})

export const {
  setTitleChanges,
  setSourceChanges,
  setCategorieChanges,
  setDateRangeChanges,
} = filtersSlice.actions
export default filtersSlice.reducer
