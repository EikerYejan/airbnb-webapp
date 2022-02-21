export const removeUndefinedEntries = <T extends Record<string, unknown>>(obj: T): T => {
  const newObj = { ...obj }

  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined) delete newObj[key]
  })

  return newObj
}
