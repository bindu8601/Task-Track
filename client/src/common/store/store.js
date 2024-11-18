import { configureStore } from '@reduxjs/toolkit'
import userDetailsReducer from '../../reducers/userReducer'
export const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer,
  },
})
