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
