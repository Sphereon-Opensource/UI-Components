export type FontSize = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 64

//FIXME we need other naming scheme so we do not have to restructure when we get additions in design
export const fontSize: Record<FontSize, number> = {
  100: 9,
  200: 10,
  300: 11,
  400: 12,
  500: 14,
  600: 16,
  700: 24,
  800: 36,
  64: 64,
}

export type LineHeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 64

//FIXME we need other naming scheme so we do not have to restructure when we get additions in design
export const lineHeight: Record<LineHeight, number> = {
  100: 13.5,
  200: 15,
  300: 16.5,
  400: 18,
  500: 21,
  600: 24, // TODO design says 36 which makes a part of the line disappear
  700: 34,
  800: 54,
  64: 64,
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

//FIXME we need other naming scheme so we do not have to restructure when we get additions in design
export type FontStyle =
  | 'h0SemiBold'
  | 'h1Regular'
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
  | 'h7Regular'
  | 'h7SemiBold'
  | 'Regular64'
