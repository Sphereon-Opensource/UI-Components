import {ParsedBase64Uri} from '../types'

export const getFileSizeDisplay = (bytes: number): string => {
  if (bytes < 1024) {
    return `${bytes} B`
  } else if (bytes <= 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`
  } else if (bytes <= 1024 * 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  } else {
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`
  }
}

export const parseBase64Uri = (base64Uri: string): ParsedBase64Uri => {
  const base64Parts = base64Uri.split(';base64,')
  const mimeType = base64Parts[0].replace('data:', '')

  return {
    base64Uri,
    base64: base64Parts[1],
    mimeType,
  }
}
