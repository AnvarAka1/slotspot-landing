import { AxiosErrorWithRetry } from "./types";
import axios from "axios";
import { getTokens, saveTokens } from "shared/helpers/tokens";
import httpStatusCodes from "http-status-codes";
import { HEADERS_NAMES } from "shared/types";

import { BASE_URL } from "./endpoints";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};

  const { accessToken } = getTokens();

  if (accessToken) {
    config.headers[HEADERS_NAMES.AUTHORIZATION] = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosErrorWithRetry) => {
    const originalRequest = error.config ?? {};

    if (
      (error.response?.status === httpStatusCodes.FORBIDDEN ||
        error.response?.status === httpStatusCodes.UNAUTHORIZED) &&
      !originalRequest.isRetry
    ) {
      originalRequest.isRetry = true;

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

      return await axiosInstance.request(originalRequest);
    }

    return await Promise.reject(error);
  }
);

export default axiosInstance;
