import {base64UriValidationRegex} from '../regexes';

export const calculateAspectRatio = (width: number, height: number): number => {
  return width / height
}

export const isBase64ImageUri = (value: unknown): boolean => {
  if (typeof value === 'string') {
    return base64UriValidationRegex.test(value)
  }

  return false
}
