import {FontStyle, FontSize, fontSize as fontSizes, fontWeight, lineHeight} from '@sphereon/ui-components.core'
import {TextStyle} from 'react-native'
import {moderateScale} from 'react-native-size-matters'

export const fontSize: Record<FontSize, number> = {
  100: moderateScale(fontSizes['100']),
  200: moderateScale(fontSizes['200']),
  300: moderateScale(fontSizes['300']),
  400: moderateScale(fontSizes['400']),
  500: moderateScale(fontSizes['500']),
  600: moderateScale(fontSizes['600']),
  700: moderateScale(fontSizes['700']),
  800: moderateScale(fontSizes['800']),
}

export const fontStyle: Record<FontStyle, TextStyle> = {
  h0SemiBold: {
    fontFamily: 'Poppins-SemiBold', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[800],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[800],
  },
  h1SemiBold: {
    fontFamily: 'Poppins-SemiBold', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[700],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[700],
  },
  h1Regular: {
    fontFamily: 'Poppins-Regular',
    fontSize: fontSize[700],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[700],
  },
  h2Regular: {
    fontFamily: 'Poppins-Regular', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[600],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[600],
  },
  h2SemiBold: {
    fontFamily: 'Poppins-SemiBold', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[600],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[600],
  },
  h3Regular: {
    fontFamily: 'Poppins-Regular', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[500],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[500],
  },
  h3SemiBold: {
    fontFamily: 'Poppins-SemiBold', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[500],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[500],
  },
  h4Regular: {
    fontFamily: 'Poppins-Regular', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[300],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[300],
  },
  h4SemiBold: {
    fontFamily: 'Poppins-SemiBold', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[300],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[300],
  },
  h5Regular: {
    fontFamily: 'Poppins-Regular', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[200],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[200],
  },
  h5SemiBold: {
    fontFamily: 'Poppins-SemiBold', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[200],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[200],
  },
  h6: {
    fontFamily: 'Poppins', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[100],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[100],
  },
  h7SemiBold: {
    // TODO fix the order
    fontFamily: 'Poppins-SemiBold', // TODO fix solution for just having Poppins as font family and using font weight (which is now baked into the font family)
    fontSize: fontSize[400],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[400],
  },
}
