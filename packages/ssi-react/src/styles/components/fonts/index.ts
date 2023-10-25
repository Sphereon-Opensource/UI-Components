import styled from 'styled-components'

import {fontColors} from '@sphereon/ui-components.core'
import {SSITextH1Css, SSITextH2Css, SSITextH3Css, SSITextH4Css, SSITextH4SemiBoldCss, SSITextH5Css, SSITextH6Css} from '../../css'

export const SSITextH1Styled = styled.span`
  ${SSITextH1Css}
`

export const SSITextH2Styled = styled.span`
  ${SSITextH2Css}
`

export const SSITextH3Styled = styled.span`
  ${SSITextH3Css}
`

export const SSITextH3LightStyled = styled(SSITextH3Styled)`
  color: ${fontColors.light};
`

export const SSITextH4Styled = styled.span`
  ${SSITextH4Css}
`

export const SSITextH4SemiBoldStyled = styled.span`
  ${SSITextH4SemiBoldCss}
`

export const SSITextH4LightStyled = styled(SSITextH4Styled)`
  color: ${fontColors.light};
`

export const SSITextH4SemiBoldLightStyled = styled(SSITextH4SemiBoldStyled)`
  color: ${fontColors.light};
`

export const SSITextH5Styled = styled.span`
  ${SSITextH5Css}
`

export const SSITextH5LightStyled = styled(SSITextH5Styled)`
  color: ${fontColors.light};
`

export const SSITextH6Styled = styled.span`
  ${SSITextH6Css}
`

export const SSITextH6LightStyled = styled(SSITextH6Styled)`
  color: ${fontColors.light};
`
