import axiosInstance from './instance'

export const get = async (url: string) => {
  const { data } = await axiosInstance.get(url)

  return data
}
