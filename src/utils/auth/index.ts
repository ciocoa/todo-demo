export enum TODO {
  LIST = 'TODO__LIST__'
}

export const getLocal = <T>(key: string): T => JSON.parse(localStorage.getItem(key) as string)

export const setLocal = <T>(key: string, value: T) =>
  localStorage.setItem(key, JSON.stringify(value))

export const getSession = <T>(key: string): T => JSON.parse(sessionStorage.getItem(key) as string)

export const setSession = <T>(key: string, value: T) =>
  sessionStorage.setItem(key, JSON.stringify(value))
