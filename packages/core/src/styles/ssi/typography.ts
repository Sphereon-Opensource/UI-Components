export type FontSize = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800

export const fontSize: Record<FontSize, number> = {
  100: 9,
  200: 10,
  300: 11,
  400: 14,
  500: 16,
  600: 24,
  700: 36, // TODO fix order
  800: 12, // TODO fix order
}

export type LineHeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800

export const lineHeight: Record<LineHeight, number> = {
  100: 13.5,
  200: 15,
  300: 16.5,
  400: 21,
  500: 24,
  600: 34, // TODO design says 36 which makes a part of the line disappear
  700: 54,
  800: 18, // TODO fix the order
}

export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

export const fontWeight: Record<FontWeight, FontWeight> = {
  normal: 'normal',
  bold: 'bold',
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
  900: '900',
}

export type FontStyle =
  | 'h0SemiBold'
  | 'h1SemiBold'
  | 'h2Regular'
  | 'h2SemiBold'
  | 'h3Regular'
  | 'h3SemiBold'
  | 'h4Regular'
  | 'h4SemiBold'
  | 'h5Regular'
  | 'h5SemiBold'
  | 'h6'
  | 'h7SemiBold'
