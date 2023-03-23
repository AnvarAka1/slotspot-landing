export type DetailType<T> = {
  data: T
  error: null
  status: boolean
}

export type ListType<T> = {
  data: {
    count: number
    next: string | null
    previous: string | null
    results: T[]
  }
  error: null
  status: boolean
}
