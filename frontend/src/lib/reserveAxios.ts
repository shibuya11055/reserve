import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'

const API_URL = 'http://localhost:3000/api/v1'

export const createReserveAxios = (opt?: AxiosRequestConfig) => {
  const option = opt || {}
  const reserveAxios = axios.create(option)
  reserveAxios.defaults.baseURL = API_URL

  reserveAxios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN':
      document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content') || '',
  }

  return reserveAxios as AxiosInstance & {
    get<T = unknown>(url: string): AxiosPromise<T>
  }
}

export default createReserveAxios()
