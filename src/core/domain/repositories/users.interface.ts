import { User } from '../entities/user'

export type UserResponse = {
  data: User
}

export interface UsersRepositoryInterface {
  register(user: User): Promise<UserResponse>
  auth(
    email: string,
    password: string,
  ): Promise<Authentication.Module.AuthenticationProps>
}
