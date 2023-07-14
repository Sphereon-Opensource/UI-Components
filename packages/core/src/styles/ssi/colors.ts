import {LabelStatus} from '../../types'

type BackgroundColor = 'primaryDark' | 'secondaryDark' | 'primaryLight' | 'secondaryLight'

export const backgroundColors: Record<BackgroundColor, string> = {
  primaryDark: '#202537',
  secondaryDark: '#2C334B',
  primaryLight: '#FBFBFB',
  secondaryLight: '#E3E3FF',
}

type AlertColor = 'primaryLight' | 'secondaryLight'

export const alertColors: Record<AlertColor, string> = {
  primaryLight: '#FBFBFB',
  secondaryLight: '#EBEBEB',
}

type HighlightColor = 'dark'

export const highlightColors: Record<HighlightColor, string> = {
  dark: '#3B425E',
}

type BorderColor = 'dark' | 'light'

export const borderColors: Record<BorderColor, string> = {
  dark: '#404D7A',
  light: '#E3E3E3',
}

type ProfileColor = 100 | 200 | 300 | 400 | 500

export const profileColors: Record<ProfileColor, string> = {
  100: '#EE5209',
  200: '#FF9900',
  300: '#5BDED3',
  400: '#0B81FF',
  500: '#BD2DFF',
}

type GradientProperties = {
  primaryColor: string
  secondaryColor: string
}

type GradientColor = 100 | 200 | 300 | 400 | 500

export const gradientColors: Record<GradientColor, GradientProperties> = {
  100: {
    primaryColor: 'rgba(111,105,224,1)',
    secondaryColor: 'rgba(69,64,164,1)',
  },
  200: {
    primaryColor: 'rgba(250,182,81,1)',
    secondaryColor: 'rgba(202,122,2,1)',
  },
  300: {
    primaryColor: 'rgba(108,240,228,1)',
    secondaryColor: 'rgba(0,169,153,1)',
  },
  400: {
    primaryColor: 'rgba(50,156,245,1)',
    secondaryColor: 'rgba(0,91,168,1)',
  },
  500: {
    primaryColor: 'rgba(188,45,255,1)',
    secondaryColor: 'rgba(122,3,177,1)',
  },
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
