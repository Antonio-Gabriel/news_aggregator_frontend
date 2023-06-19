import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getClientUserCookie } from '../../utils/cookies'

type StateProps = Authentication.Module.AuthenticationProps & {
  isAuth: boolean
}

type AuthenticationProps = Authentication.Module.AuthenticationProps

const initialState: StateProps = {
  user: undefined,
  authorization: undefined,
  settings: undefined,
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserCredentials(state, action: PayloadAction<StateProps>) {
      state.isAuth = action.payload.isAuth
      state.user = action.payload.user
      state.authorization = action.payload.authorization
      state.settings = action.payload.settings
    },
    cleanUserCredentials(state) {
      state.isAuth = false
      state.authorization = undefined
      state.user = undefined
      state.settings = undefined
    },
    authenticationObserver(state) {
      const authData = getClientUserCookie<AuthenticationProps>(
        '@news-aggregator',
      )

      if (authData == undefined) {
        state.isAuth = false
        return
      }

      state.isAuth = true
      state.user = authData.user
      state.authorization = authData.authorization
      state.settings = authData.settings
    },
  },
})

export const {
  setUserCredentials,
  cleanUserCredentials,
  authenticationObserver,
} = authSlice.actions
export default authSlice.reducer
