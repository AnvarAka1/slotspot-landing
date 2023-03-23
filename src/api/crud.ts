import axiosInstance from './instance'

export const get = async (url: string) => {
  return axiosInstance.get(url)
}
