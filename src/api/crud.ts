import axiosInstance from './instance'

export const get = async (url: string) => {
  const { data } = await axiosInstance.get(url)

  return data
}

export const post = async <T>(url: string, reqData: T) => {
  const { data } = await axiosInstance.post(url, reqData)

  return data
}
