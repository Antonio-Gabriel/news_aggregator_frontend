import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type StateProps = {
  categories: App.Module.CategoryProps[]
  sources: string[]
}

type ActionPayload = {
  categories: App.Module.CategoryProps[]
  sources: string[]
}

const initialState: StateProps = {
  categories: [],
  sources: [],
}

const dataExtractorSlice = createSlice({
  name: 'dataExtractor',
  initialState,
  reducers: {
    extractDataFromArticles(state, payload: PayloadAction<ActionPayload>) {
      state.categories = payload.payload.categories
      state.sources = payload.payload.sources
    },
  },
})

export const { extractDataFromArticles } = dataExtractorSlice.actions
export default dataExtractorSlice.reducer
