import { createSlice } from '@reduxjs/toolkit'
import { createAsyncAction } from '../actions'
import { User } from '../../types/User'

export type AuthState = {
  user?: User
  token?: string
  isAuthenticated: boolean
}

export const initialAuthState: AuthState = {
  user: undefined,
  token: undefined,
  isAuthenticated: false,
}

type LoginParams = {
  username: string
  password: string
}

type LoginResult = {
  user: User
  access: string
}

export const AuthActions = {
  login: createAsyncAction<LoginParams, LoginResult>(
    'login',
    async (params, { authRepository }) => {
      const response = await authRepository.login(params.username, params.password)
      localStorage.setItem('token', response.access)
      return response
    }
  ),
  getCurrentUser: createAsyncAction<void, { user: User }>(
    'getCurrentUser',
    async (_, { authRepository }) => {
      const user = await authRepository.getCurrentUser()
      return { user }
    }
  ),
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AuthActions.login.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.isAuthenticated = true
      })
      .addCase(AuthActions.login.rejected, (state) => {
        state.user = undefined
        state.isAuthenticated = false
      })
      .addCase(AuthActions.getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.isAuthenticated = true
      })
  },
})

export default authSlice
