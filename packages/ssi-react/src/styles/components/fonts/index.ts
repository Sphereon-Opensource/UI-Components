import styled from 'styled-components'

import {fontColors} from '@sphereon/ui-components.core'
import {fontStyle} from '../../typography'

export const SSITextH4Styled = styled.span`
  font-family: ${fontStyle.h4Regular.fontFamily};
  font-size: ${fontStyle.h4Regular.fontSize}px;
  font-weight: ${fontStyle.h4Regular.fontWeight};
  line-height: ${fontStyle.h4Regular.lineHeight}px;
  height: auto;
`

export const SSITextH4SemiBoldStyled = styled.span`
  font-family: ${fontStyle.h4SemiBold.fontFamily};
  font-size: ${fontStyle.h4SemiBold.fontSize}px;
  font-weight: ${fontStyle.h4SemiBold.fontWeight};
  line-height: ${fontStyle.h4SemiBold.lineHeight}px;
  height: auto;
`

export const SSITextH4LightStyled = styled(SSITextH4Styled)`
  color: ${fontColors.light};
`

export const SSITextH4SemiBoldLightStyled = styled(SSITextH4SemiBoldStyled)`
  color: ${fontColors.light};
`

export const SSITextH5Styled = styled.span`
  font-family: ${fontStyle.h5Regular.fontFamily};
  font-size: ${fontStyle.h5Regular.fontSize}px;
  font-weight: ${fontStyle.h5Regular.fontWeight};
  line-height: ${fontStyle.h5Regular.lineHeight}px;
  height: auto;
`

export const SSITextH5LightStyled = styled(SSITextH5Styled)`
  color: ${fontColors.light};
`

export const SSITextH6Styled = styled.span`
  font-family: ${fontStyle.h6.fontFamily};
  font-size: ${fontStyle.h6.fontSize}px;
  font-weight: ${fontStyle.h6.fontWeight};
  line-height: ${fontStyle.h6.lineHeight}px;
  height: auto;
`

export const SSITextH6LightStyled = styled(SSITextH6Styled)`
  color: ${fontColors.light};
`
