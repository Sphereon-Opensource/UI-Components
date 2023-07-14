import {FontStyle, fontSize, fontWeight, lineHeight} from '@sphereon/ui-components.core'
import {CSSProperties} from 'react'

export const fontStyle: Record<FontStyle, CSSProperties> = {
  h0SemiBold: {
    fontFamily: 'Poppins',
    fontSize: fontSize[700],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[700],
  },
  h1SemiBold: {
    fontFamily: 'Poppins',
    fontSize: fontSize[600],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[600],
  },
  h2Regular: {
    fontFamily: 'Poppins',
    fontSize: fontSize[500],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[500],
  },
  h2SemiBold: {
    fontFamily: 'Poppins',
    fontSize: fontSize[500],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[500],
  },
  h3Regular: {
    fontFamily: 'Poppins',
    fontSize: fontSize[400],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[400],
  },
  h3SemiBold: {
    fontFamily: 'Poppins',
    fontSize: fontSize[400],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[400],
  },
  h4Regular: {
    fontFamily: 'Poppins',
    fontSize: fontSize[300],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[300],
  },
  h4SemiBold: {
    fontFamily: 'Poppins',
    fontSize: fontSize[300],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[300],
  },
  h5Regular: {
    fontFamily: 'Poppins',
    fontSize: fontSize[200],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[200],
  },
  h5SemiBold: {
    fontFamily: 'Poppins',
    fontSize: fontSize[200],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[200],
  },
  h6: {
    fontFamily: 'Poppins',
    fontSize: fontSize[100],
    fontWeight: fontWeight[400],
    lineHeight: lineHeight[100],
  },
  h7SemiBold: {
    // TODO fix the order
    fontFamily: 'Poppins',
    fontSize: fontSize[800],
    fontWeight: fontWeight[600],
    lineHeight: lineHeight[800],
  },
}
