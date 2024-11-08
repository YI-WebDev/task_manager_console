import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist'
import request, { Request } from '../repositories/Request'
import authSlice from './auth'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
})

export type ThunkExtra = {
  request: Request
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: { request } },
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
