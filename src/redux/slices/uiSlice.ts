import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  showDrawer: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setShowDrawer: (state, action) => {
      state.showDrawer = action.payload
    }
  },
})

export const { setShowDrawer } = uiSlice.actions

export default uiSlice.reducer
