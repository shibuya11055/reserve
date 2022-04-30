import { AxiosResponseHeaders } from 'axios'

type AuthHeaders = {
  'access-token': string | null
  uid: string | null
  client: string | null
  expiry: string | null
  'Content-Type': string
}

export const getAuthDataFromStorage = (): AuthHeaders => ({
  'access-token': localStorage.getItem('access-token'),
  client: localStorage.getItem('client'),
  expiry: localStorage.getItem('expiry'),
  uid: localStorage.getItem('uid'),
  'Content-Type': 'application/json',
})

export const setAuthDataFromResponse = (
  authData: AxiosResponseHeaders
): void => {
  if (
    authData['access-token'] &&
    authData.client &&
    authData.uid &&
    authData.expiry
  ) {
    localStorage.setItem('access-token', authData['access-token'])
    localStorage.setItem('client', authData.client)
    localStorage.setItem('uid', authData.uid)
    localStorage.setItem('expiry', authData.expiry)
  }
}

export const removeAuthDataFromStorage = (): void => {
  localStorage.removeItem('access-token')
  localStorage.removeItem('client')
  localStorage.removeItem('uid')
  localStorage.removeItem('expiry')
}
