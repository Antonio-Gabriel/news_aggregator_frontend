import axios, { AxiosInstance } from 'axios'
import {
  UserResponse,
  UsersRepositoryInterface,
} from '../../domain/repositories/users.interface'

export class UserService implements UsersRepositoryInterface {
  public constructor(private http: AxiosInstance) {}

  async register({
    name,
    email,
    password,
  }: App.Module.UserData): Promise<UserResponse> {
    return await this.http
      .post('/users', { name, email, password })
      .then((response) => response.data)
  }

  async auth(
    email: string,
    password: string,
  ): Promise<Authentication.Module.AuthenticationProps> {
    this.http = axios.create({
      baseURL: 'http://0.0.0.0:8080/api',
    })

    return this.http
      .post('/login', { email, password })
      .then((response) => response.data)
  }
}
