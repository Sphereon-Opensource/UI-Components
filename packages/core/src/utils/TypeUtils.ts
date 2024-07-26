export const isBoolean = (value: unknown): boolean => {
  if (typeof value === 'boolean') {
    return true
  } else if (typeof value === 'string') {
    const lowercaseValue = value.toLowerCase()
    return lowercaseValue === 'true' || lowercaseValue === 'false'
  } else {
    return false
  }
}

export const parseToBoolean = (value: unknown): boolean | null => {
  if (typeof value === 'boolean') {
    return value
  } else if (typeof value === 'string') {
    const lowercaseValue = value.toLowerCase()
    if (lowercaseValue === 'true') {
      return true
    } else if (lowercaseValue === 'false') {
      return false
    }
  }

  return null
}
