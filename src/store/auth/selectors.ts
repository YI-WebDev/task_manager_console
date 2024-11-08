import { RootState } from '../index'

export const AuthSelectors = {
  user: (state: RootState) => state.auth.user,
}
