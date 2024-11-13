export type DateFormat = 'date-time' | 'date' | 'time' | undefined

export const formatDate = (dateString?: string, format: DateFormat = 'date-time'): string => {
  const userDateTimeOpts = Intl.DateTimeFormat().resolvedOptions()

  if (!dateString) {
    return ''
  }

  const date = dateString === 'now' ? new Date() : new Date(dateString)
  if (isNaN(date.getTime())) {
    console.error('Invalid date:', dateString)
    return 'Invalid date'
  }

  const formatOptions: Intl.DateTimeFormatOptions = {
    timeZone: userDateTimeOpts.timeZone
  }

  if (format === 'date-time') {
    formatOptions.dateStyle = 'short'
    formatOptions.timeStyle = 'short'
  } else if (format === 'date') {
    formatOptions.dateStyle = 'short'
  } else if (format === 'time') {
    formatOptions.timeStyle = 'short'
  }

  return new Intl.DateTimeFormat(
    userDateTimeOpts.locale,
    formatOptions
  ).format(date)
}


export const formatDateToISO = (dateString?: string, format: DateFormat = 'date-time'): string => {
  if (!dateString) {
    return ''
  }

  const date = dateString === 'now' ? new Date() : new Date(dateString)
  if (isNaN(date.getTime())) {
    console.error('Invalid date:', dateString)
    return 'Invalid date'
  }

  const isoString = date.toISOString()

  if (format === 'date-time') {
    return isoString.slice(0, 19).replace('T', ' ')  // YYYY-MM-DD HH:mm:ss
  } else if (format === 'date') {
    return isoString.slice(0, 10)  // YYYY-MM-DD
  } else {
    return isoString.slice(11, 19) // HH:mm:ss
  }
}
