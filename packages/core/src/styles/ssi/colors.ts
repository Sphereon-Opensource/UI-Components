import {GradientProperties, LabelStatus} from '../../types'

type BackgroundColor = 'primaryDark' | 'secondaryDark' | 'primaryLight' | 'secondaryLight' | 'lightGrey' | 'orange'

export const backgroundColors: Record<BackgroundColor, string> = {
  primaryDark: '#202537',
  secondaryDark: '#2C334B',
  primaryLight: '#FBFBFB',
  secondaryLight: '#E3E3FF',
  lightGrey: '#E3E3E3',
  orange: '#D74500'
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
  new: '#7276F7',
  approved: '#00C249',
  pending: '#0B81FF',
  archived: '#B3B3B3',
  declined: '#D74500',
  done: '#00C249',
  draft: '#0B81FF',
}

type FontColor = 'dark' | 'light' | 'secondaryButton' | 'greyedOut' | 'lightGrey'

export const fontColors: Record<FontColor, string> = {
  dark: '#303030',
  light: '#FBFBFB',
  secondaryButton: '#7664F2',
  greyedOut: '#8F8F8F',
  lightGrey: '#8D9099',
}

type HighLightGradient = 100 | 200

export const gradientsColors: Record<HighLightGradient, GradientProperties> = {
  100: {
    primaryColor: '#7276F7',
    secondaryColor: '#7C40E8',
  },
  200: {
    primaryColor: '#FF9900',
    secondaryColor: '#EE5309',
  },
}

type Border = 'dark' | 'light' | 'lightGrey' | 'darkGrey' | 'purple'

export const borderColors: Record<Border, string> = {
  dark: '#404D7A',
  light: '#E3E3E3',
  lightGrey: '#ACACAC',
  darkGrey: '#303030',
  purple: '#7276F7',
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

type SelectionElement = 'primaryDark' | 'primaryBorderDark' | 'selectedRow'

export const selectionElementColors: Record<SelectionElement, string> = {
  primaryDark: '#0B81FF',
  primaryBorderDark: '#FBFBFB',
  selectedRow: '#B7B8D9',
}

// FIXME all numbers
type Element = 'blue' | 'lightGrey' | 'purple' | 100 | 200 | 300

export const elementColors: Record<Element, string> = {
  blue: '#0B81FF',
  lightGrey: '#C4C4C4',
  purple: '#7276F7',
  100: '#F25409',
  200: '#F78854',
  300: '#8D9099',
}

type Button = 100

export const buttonColors: Record<Button, string> = {
  100: '#8B1900',
}
