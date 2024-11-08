export type User = {
    id: string
    username: string
    email: string
    name: string
    isRoot: boolean
    hasPermCreateWorkflow: boolean
    useLdap: boolean
    passwordExpiryDate?: string
    isPasswordExpired: boolean
    clientName: string
    createdAt: string
  }
  
  export type UserShortProfile = {
    id: string
    name: string
  }
  
  export type UserEditParams = {
    name: string
    email: string
    isRoot: boolean
    hasPermCreateWorkflow: boolean
  }
  
  export type UserCreateParams = UserEditParams & {
    username: string
    password: string
    passwordConfirm: string
  }
  