import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthData {
  isLoggedIn: boolean
  user: {
    id: number
  }
}


export type AuthReducerInitialStateType = {
  auth: AuthData | null
}

const initialState: AuthReducerInitialStateType = {
  auth: null,

}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<number>) => {
      state.auth = {
        isLoggedIn: true,
        user: {
          id: action.payload
        }
      }
    },
    logout: (state) => {
      state.auth = null
    },
  },
})

export const {
  login,
  logout,
} = authReducer.actions
export default authReducer
