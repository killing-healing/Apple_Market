import { createSlice } from "@reduxjs/toolkit"
import { UserType } from "../interface/interface"
import store from "./store"

const initialState: UserType = {
  isLogged: false,
  signUp: false,
  data: {
    tokenInfo: {
      accessToken: '',
    },
    userId: '',
  },
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess : (state, action) => {
      state.isLogged = true
      state.data.tokenInfo = action.payload.data.tokenInfo
      state.data.userId = action.payload.data.userId
      // save cookie
    },
    logoutSuccess : (state) => {
      state.isLogged = false
      state.data.tokenInfo = { accessToken : ''}
      state.data.userId = ''
    },
    signUpSuccess : (state) => {
      state.signUp = true
    }
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default user
