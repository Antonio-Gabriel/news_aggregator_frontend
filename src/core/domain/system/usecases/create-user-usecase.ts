import { User } from '../../entities/user'
import { UserService } from '../../../infra/services/user.service'

export class CreateUserUsecase implements SystemContract {
  constructor(private service: UserService) {}

  async execute({ name, email, password }: App.Module.UserData) {
    const user = new User({
      name,
      email,
      password,
    })

    const userResponse = await this.service.register(user)
    return userResponse
  }
}
