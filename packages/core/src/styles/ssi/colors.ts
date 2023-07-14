import {LabelStatus} from '../../types'

type BackgroundColor = 'primaryDark' | 'secondaryDark' | 'primaryLight' | 'secondaryLight'

export const backgroundColors: Record<BackgroundColor, string> = {
  primaryDark: '#202537',
  secondaryDark: '#2C334B',
  primaryLight: '#FBFBFB',
  secondaryLight: '#E3E3FF',
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

type FontColor = 'dark' | 'light' | 'secondaryButton' | 'greyedOut'

export const fontColors: Record<FontColor, string> = {
  dark: '#303030',
  light: '#FBFBFB',
  secondaryButton: '#7664F2',
  greyedOut: '#8F8F8F',
}
