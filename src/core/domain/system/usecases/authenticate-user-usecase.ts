import { UserService } from '../../../infra/services/user.service'

export class AuthenticateUserUsecase implements SystemContract {
  constructor(private service: UserService) {}

  execute({ email, password }: Authentication.Module.SignInFormValues) {
    let authResponseData = this.service.auth(email, password)
    return authResponseData
  }
}
