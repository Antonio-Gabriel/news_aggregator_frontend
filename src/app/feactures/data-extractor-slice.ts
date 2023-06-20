import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type StateProps = {
  categories: App.Module.CategoryProps[]
  sources: string[]
  authors: string[]
}

type ActionPayload = {
  categories: App.Module.CategoryProps[]
  sources: string[]
  authors: string[]
}

const initialState: StateProps = {
  categories: [],
  sources: [],
  authors: [],
}

const dataExtractorSlice = createSlice({
  name: 'dataExtractor',
  initialState,
  reducers: {
    extractDataFromArticles(state, payload: PayloadAction<ActionPayload>) {
      state.categories = payload.payload.categories
      state.authors = payload.payload.authors
      state.sources = payload.payload.sources
    },
  },
})

export const { extractDataFromArticles } = dataExtractorSlice.actions
export default dataExtractorSlice.reducer
