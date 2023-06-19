import { UserService } from '../../../infra/services/user.service'

type UserData = Omit<
  App.Module.UserProps,
  'id' | 'created_at' | 'updated_at'
> & {
  password: string
}

export class CreateUserUsecase implements SystemContract {
  constructor(private service: UserService) {}

  async execute({ name, email, password }: UserData) {
    const user = await this.service.register({ name, email, password })
    return user
  }
}
