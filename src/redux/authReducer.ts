import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { UserIdType } from '@/models/user'

export interface AuthUserData {
  id: UserIdType
}

interface AuthData {
  isLoggedIn: boolean
  user: AuthUserData
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
          id: action.payload,
        },
      }
    },
    logout: state => {
      state.auth = null
    },
  },
})

export const { login, logout } = authReducer.actions
export default authReducer
