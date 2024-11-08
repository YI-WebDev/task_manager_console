import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export type Params = {
  [key: string]: string | number | boolean | undefined | null | Params
}

export interface Request {
  setAuthToken(authToken?: string): void
  get<T>(path: string, params?: Params): Promise<AxiosResponse<T>>
  post<T>(path: string, params?: Params): Promise<AxiosResponse<T>>
  put<T>(path: string, params?: Params): Promise<AxiosResponse<T>>
  delete<T>(path: string): Promise<AxiosResponse<T>>
}

class AxiosRequest implements Request {
  instance: AxiosInstance
  authToken?: string = undefined

  constructor() {
    const baseURL = `${window.location.origin}/api`
    this.instance = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  setAuthToken(authToken?: string): void {
    this.authToken = authToken
  }

  private headers(): { [key: string]: string } {
    return this.authToken ? { Authorization: `Token ${this.authToken}` } : {}
  }

  async get<T>(path: string, params?: Params): Promise<AxiosResponse<T>> {
    return await this.instance.get<T>(path, {
      headers: this.headers(),
      params,
    })
  }

  async post<T>(path: string, params?: Params): Promise<AxiosResponse<T>> {
    return await this.instance.post<T>(path, params, {
      headers: this.headers(),
    })
  }

  async put<T>(path: string, params?: Params): Promise<AxiosResponse<T>> {
    return await this.instance.put<T>(path, params, {
      headers: this.headers(),
    })
  }

  async delete<T>(path: string): Promise<AxiosResponse<T>> {
    return await this.instance.delete<T>(path, {
      headers: this.headers(),
    })
  }
}

export default new AxiosRequest()
