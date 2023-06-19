import { useDispatch } from 'react-redux'
import { Registry, container } from '../../core/container.config'
import { ClearClientUserCookie, setClientCookie } from '../../utils/cookies'
import {
  cleanUserCredentials,
  setUserCredentials,
} from '../../app/feactures/auth-slice'

import { AuthenticateUserUsecase } from '../../core/domain/system/usecases/authenticate-user-usecase'
import { CreateUserUsecase } from '../../core/domain/system/usecases/create-user-usecase'

type SignUpCredentials = App.Module.UserData
type SignInCredentials = Authentication.Module.SignInFormValues

export function useAuth() {
  const dispatch = useDispatch()

  async function signIn(credentials: SignInCredentials) {
    const authUseCase = container.get<AuthenticateUserUsecase>(
      Registry.AuthenticateUserUsecase,
    )

    const userData = await authUseCase.execute({
      email: credentials.email,
      password: credentials.password,
    })

    if (userData?.authorization) {
      dispatch(
        setUserCredentials({
          ...userData,
          isAuth: true,
        }),
      )

      setClientCookie('@news-aggregator', userData)

      return {
        isAuth: true,
      }
    }
  }

  async function signUp(userData: SignUpCredentials) {
    const registerUsecase = container.get<CreateUserUsecase>(
      Registry.CreateUserUsecase,
    )

    const user = await registerUsecase.execute({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    })

    if (user) {
      return {
        created: true,
      }
    }
  }

  function signOut() {
    dispatch(cleanUserCredentials())
    ClearClientUserCookie('@news-aggregator')
  }

  return { signIn, signOut, signUp }
}
