declare namespace Authentication {
  declare namespace Module {
    type AuthorizationProps = {
      token: string
      type: string
    }

    type AuthenticationProps = {
      user?: Omit<App.Module.UserProps, 'password'>
      authorization?: AuthorizationProps
      settings?: App.Module.SettingsProps
    }

    type SignInFormValues = {
      email: string
      password: string
    }
  }
}
