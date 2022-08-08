export const checkNotNull = async (value: string, message: string) => {
  if (value.trim().length <= 0) return Promise.reject({ message })
  return Promise.resolve()
}
