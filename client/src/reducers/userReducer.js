import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  userEmail: '',
  userPassword: '',
  userName: '',
  id:0
}

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setFirstName: (state, { payload }) => {
      state.firstName = payload
    },
    setLastName: (state, { payload }) => {
      state.lastName = payload
    },
    setUserEmail: (state, { payload }) => {
      state.userEmail = payload
    },
    setUserName: (state, { payload }) => {
      state.userName = payload
    },
    setUserPassword: (state, { payload }) => {
      state.userPassword = payload
    },
    setId:(state, { payload }) => {
      state.id = payload
    },
  },
})

export const {
  setFirstName,
  setLastName,
  setUserEmail,
  setUserName,
  setUserPassword,
  setId
} = userDetailsSlice.actions

export default userDetailsSlice.reducer
