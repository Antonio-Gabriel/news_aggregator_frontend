import axios from 'axios'
import { getClientUserCookie } from '../../utils/cookies'

const authData: Partial<
  Authentication.Module.AuthenticationProps | undefined
> = getClientUserCookie<Partial<Authentication.Module.AuthenticationProps>>(
  '@news-aggregator',
)

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `${authData?.authorization?.type} ${authData?.authorization?.token}`,
  },
})
