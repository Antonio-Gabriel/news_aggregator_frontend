declare namespace Authentication {
  declare namespace Module {
    type AuthorizationProps = {
      token: string
      type: string
    }

    export type AuthenticationProps = {
      user?: App.Module.UserProps
      authorization?: AuthorizationProps
      settings?: App.Module.SettingsProps
    }

    type SignInFormValues = {
      email: string
      password: string
    }
  }
}
