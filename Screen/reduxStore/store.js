import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import HomeReducer from './ducks/Home.reducers'

export default configureStore({
  reducer: {
      Home: HomeReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
})
