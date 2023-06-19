import { parseCookies, setCookie, destroyCookie } from 'nookies'

export function setClientCookie(key: string, data: any) {
  setCookie(null, key, JSON.stringify(data), {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })
}

export function getClientUserCookie<T>(key: string): T | undefined {
  const cookies = parseCookies()

  if (!cookies[key]) {
    return undefined
  }

  return JSON?.parse(cookies[key]) as T
}

export function ClearClientUserCookie(key: string) {
  destroyCookie(null, key)
}
