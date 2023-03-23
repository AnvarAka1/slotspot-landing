import { compose, map, is, curry, zipObj, keys, values } from 'ramda'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const mapKeys: <T>(arg: (str: string) => string) => T = curry((fn, obj) => zipObj(map(fn, keys(obj)), values(obj)))

const toSnake = (str: string) => {
  return str
    .replace(/\./g, '__')
    .replace(/([A-Z])/g, $1 => '_' + $1.toLowerCase())
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const toSnakeCase = <T>(data: T): T => {
  if (is(Array, data)) {
    return map<T, T>(toSnakeCase, data)
  }

  if (is(Object, data)) {
    return compose<[T], T, T, T, T, T, T, T, T>(
    // @ts-ignore
      map(toSnakeCase),
      mapKeys(toSnake)
    )(data)
  }

  return data
}

export default toSnakeCase
