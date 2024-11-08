import { Request } from './Request'
import { User } from '../types/User'

type LoginResponse = {
  success: boolean
  access: string
  user: User
}

export default class AuthRepository {
  private request: Request

  constructor(request: Request) {
    this.request = request
  }

  async login(username: string, password: string) {
    const response = await this.request.post<LoginResponse>('/login/', {
      username,
      password,
    })
    return response.data
  }

  async getCurrentUser() {
    const response = await this.request.get<User>('/current-user/')
    return response.data
  }
}
