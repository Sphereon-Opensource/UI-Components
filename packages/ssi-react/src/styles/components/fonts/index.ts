import styled from 'styled-components'
import {fontColors} from '@sphereon/ui-components.core'
import {
  SSITextH1Css,
  SSITextH1SemiBoldCss,
  SSITextH2Css,
  SSITextH2SemiBoldStyledCss,
  SSITextH3Css,
  SSITextH4Css,
  SSITextH4SemiBoldCss,
  SSITextH5Css,
  SSITextH6Css,
} from '../../css'

export const SSITextH1Styled = styled.div`
  ${SSITextH1Css}
`

export const SSITextH1SemiBoldStyled = styled.div`
  ${SSITextH1SemiBoldCss}
`

export const SSITextH2Styled = styled.div`
  ${SSITextH2Css}
`

export const SSITextH2SemiBoldStyled = styled.div`
  ${SSITextH2SemiBoldStyledCss}
`

export const SSITextH3Styled = styled.div`
  ${SSITextH3Css}
`

export const SSITextH3LightStyled = styled(SSITextH3Styled)`
  color: ${fontColors.light};
`

export const SSITextH4Styled = styled.div`
  ${SSITextH4Css}
`

export const SSITextH4SemiBoldStyled = styled.div`
  ${SSITextH4SemiBoldCss}
`

export const SSITextH4LightStyled = styled(SSITextH4Styled)`
  color: ${fontColors.light};
`

export const SSITextH4DarkStyled = styled(SSITextH4Styled)`
  color: ${fontColors.dark};
`

export const SSITextH4SemiBoldLightStyled = styled(SSITextH4SemiBoldStyled)`
  color: ${fontColors.light};
`

export const SSITextH5Styled = styled.div`
  ${SSITextH5Css}
`

export const SSITextH5LightStyled = styled(SSITextH5Styled)`
  color: ${fontColors.light};
`

export const SSITextH6Styled = styled.div`
  ${SSITextH6Css}
`

export const SSITextH6LightStyled = styled(SSITextH6Styled)`
  color: ${fontColors.light};
`
