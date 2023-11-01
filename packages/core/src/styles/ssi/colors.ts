import {LabelStatus} from '../../types'

type BackgroundColor = 'primaryDark' | 'secondaryDark' | 'primaryLight' | 'secondaryLight' | 'lightGrey'

export const backgroundColors: Record<BackgroundColor, string> = {
  primaryDark: '#202537',
  secondaryDark: '#2C334B',
  primaryLight: '#FBFBFB',
  secondaryLight: '#E3E3FF',
  lightGrey: '#E3E3E3',
}

// TODO WAL-303 add support for randomized colors to avoid getting the same color multiple times
type CredentialCardColor = 'default'

export const credentialCardColors: Record<CredentialCardColor, string> = {
  default: '#5BDED2',
}

type LogoColor = 'default'

export const logoColors: Record<LogoColor, string> = {
  default: '#FBFBFB',
}

export const statusColors: Record<LabelStatus | 'error', string> = {
  valid: '#00C249',
  expired: '#FF9900',
  revoked: '#EE5309',
  verified: '#00C249',
  unverified: '#FF9900',
  error: '#D74500',
  New: '#7276F7',
  Approved: '#00C249',
  Pending: '#0B81FF',
  Archived: '#B3B3B3',
  Declined: '#D74500',
  Done: '#000', // TODO I see it in the UI but not in the design. Follow up ticket created: https://sphereon.atlassian.net/browse/DPP-87
}

type FontColor = 'dark' | 'light' | 'secondaryButton' | 'greyedOut' | 'lightGrey'

export const fontColors: Record<FontColor, string> = {
  dark: '#303030',
  light: '#FBFBFB',
  secondaryButton: '#7664F2',
  greyedOut: '#8F8F8F',
  lightGrey: '#8D9099',
}

type Gradient = 100 | 200

export const gradientColors: Record<Gradient, string> = {
  100: 'linear-gradient(135deg, #7276f7 0%, #7c40e8 100%)', // purple
  200: 'linear-gradient(135deg, #F90 0%, #EE5309 100%)', // orange
}

type Border = 'dark' | 'light' | 'lightGrey'

export const borderColors: Record<Border, string> = {
  dark: '#404D7A',
  light: '#E3E3E3',
  lightGrey: '#ACACAC',
}

type Profile = 100 | 200 | 300 | 400 | 500

export const profileColors: Record<Profile, string> = {
  100: '#EE5209',
  200: '#FF9900',
  300: '#5BDED3',
  400: '#0B81FF',
  500: '#BD2DFF',
}

type Alerts = 'primaryLight' | 'secondaryLight'

export const alertColors: Record<Alerts, string> = {
  primaryLight: '#FBFBFB',
  secondaryLight: '#EBEBEB',
}

type SelectionElement = 'primaryDark' | 'primaryBorderDark'

export const selectionElements: Record<SelectionElement, string> = {
  primaryDark: '#0B81FF',
  primaryBorderDark: '#FBFBFB',
}
