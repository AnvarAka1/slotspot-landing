import { AxiosError, AxiosRequestConfig } from "axios";

export type PageParam = {
  cursor: number;
};

export type AxiosErrorWithRetry = Omit<AxiosError, "config"> & {
  config: AxiosRequestConfig & { isRetry?: boolean };
};

export type SearchParamsObject = Record<string, string | number | undefined>;
