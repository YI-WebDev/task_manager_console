import { useCallback } from 'react'

export default function usePath() {
  const root = useCallback(() => '/', [])

  return {
    root,
    login: useCallback(() => '/login', []),
    register: useCallback(() => '/register', []),
    isLoginPath: useCallback(
      (pathname: string) => pathname === '/login',
      []
    ),
    isRegisterPath: useCallback(
      (pathname: string) => pathname === '/register',
      []
    ),
  }
}
