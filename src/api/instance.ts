import { AxiosErrorWithRetry } from './types'
import axios from 'axios'
import { getTokens, saveTokens } from '@src/shared/helpers/tokens'
import httpStatusCodes from 'http-status-codes'
import { HEADERS_NAMES } from '@src/shared/types'

import { BASE_URL } from './endpoints'
import toCamelCase from '@src/utils/toCamelCase'

const axiosInstance = axios.create({
  baseURL: 'https://api.slotspot.uz'
})

axiosInstance.interceptors.request.use((config) => {
  config.headers = config.headers ?? {}

  const { accessToken } = getTokens()

  if (accessToken) {
    config.headers[HEADERS_NAMES.AUTHORIZATION] = `Bearer ${accessToken}`
  }

  return config
})

axiosInstance.interceptors.response.use(
  (response) => toCamelCase(response),
  async (error: AxiosErrorWithRetry) => {
    const originalRequest = error.config ?? {}

    if (
      (error.response?.status === httpStatusCodes.FORBIDDEN ||
        error.response?.status === httpStatusCodes.UNAUTHORIZED) &&
      !originalRequest.isRetry
    ) {
      originalRequest.isRetry = true

      //   const tokens = getTokens()

      //TODO: refresh token then if needed
      //   const {
      //     data: { accessToken, refreshToken },
      //   } = await axios.get<IAuthorization>(refresh, {
      //     baseURL: BASE_URL,
      //     headers: {
      //       [HEADERS_NAMES.AUTHORIZATION]: `Bearer ${tokens.refreshToken}`,
      //     },
      //   })

      //   saveTokens({ accessToken, refreshToken })

      return await axiosInstance.request(originalRequest)
    }

    return await Promise.reject(error)
  }
)

export default axiosInstance
