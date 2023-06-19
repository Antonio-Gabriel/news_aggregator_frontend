import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type filtersTagsProps = {
  key: string
  value: string
}

type UserFilterResponse = {
  filtersTags: filtersTagsProps[]
}

const initialState: UserFilterResponse = {
  filtersTags: [],
}

const filtersTagSlice = createSlice({
  name: 'filtersTag',
  initialState,
  reducers: {
    setFilterTags(state, action: PayloadAction<filtersTagsProps[]>) {
      state.filtersTags = action.payload
    },
    removeFilterTag(state, action: PayloadAction<string>) {
      const index = state.filtersTags.findIndex(
        (item) => item.key === action.payload,
      )
      if (index !== -1) {
        state.filtersTags.splice(index, 1)
      }
    },
  },
})

export const { setFilterTags, removeFilterTag } = filtersTagSlice.actions
export default filtersTagSlice.reducer
