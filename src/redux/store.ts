import { combineReducers, configureStore } from '@reduxjs/toolkit'
import uiReducer from './slices/uiSlice'


const rootReducer = combineReducers({
  uiReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch

export default store
