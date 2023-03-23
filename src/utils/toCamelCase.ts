
import { compose, curry, is, keys, map, values, zipObj } from 'ramda'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const mapKeys = curry((fn, obj) => zipObj(map(fn, keys(obj)), values(obj)))

const camelize = (str: string) => {
  return str
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/(?:^\w|[A-Z]|_|\b\w)/g, (letter: string, index: number) => {
      return index === 0 ? letter.toLowerCase() : letter.toUpperCase()
    })
    .replace(/\s+/g, '')
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const toCamelCase = <T>(data: T): T => {
  if (is(Array, data)) {
    return map<T, T>(toCamelCase, data)
  }

  if (is(Object, data)) {
    return compose<[T], T, T, T, T, T, T, T, T>(
      // @ts-ignore
      map(toCamelCase),
      mapKeys(camelize)
    )(data)
  }

  return data
}

export default toCamelCase
