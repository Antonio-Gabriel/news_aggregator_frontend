import { User } from '../entities/user'

export type UserResponse = {
  data: User
}

export interface UsersRepositoryInterface {
  register(user: App.Module.UserData): Promise<UserResponse>
  auth(
    email: string,
    password: string,
  ): Promise<Authentication.Module.AuthenticationProps>
}
