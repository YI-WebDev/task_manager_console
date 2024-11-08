import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState, ThunkExtra } from './index'
import AuthRepository from '../repositories/AuthRepository'

export type Repositories = {
  authRepository: AuthRepository
}

export function createAsyncAction<Params, Result>(
  actionName: string,
  action: (
    params: Params,
    repositories: Repositories,
    state: RootState
  ) => Promise<Result>
) {
  return createAsyncThunk<Result, Params, { extra: ThunkExtra; state: RootState }>(
    actionName,
    async (params, { extra, getState, rejectWithValue }) => {
      const state = getState()
      const token = state.auth.token
      extra.request.setAuthToken(token)

      try {
        const repositories: Repositories = {
          authRepository: new AuthRepository(extra.request),
        }
        return await action(params, repositories, state)
      } catch (e) {
        if (axios.isAxiosError(e)) {
          return rejectWithValue({
            data: e.response?.data,
            status: e.response?.status,
          })
        }
        throw e
      }
    }
  )
}
