import {styled} from 'styled-components'
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
  SSITextH7RegularCss,
} from '../css'

export const SSITextH1Styled = styled.div`
  ${SSITextH1Css};
  color: ${fontColors.dark};
`

export const SSITextH1SemiBoldStyled = styled.div`
  ${SSITextH1SemiBoldCss};
  color: ${fontColors.dark};
`

export const SSITextH1SemiBoldLightStyled = styled(SSITextH1SemiBoldStyled)`
  color: ${fontColors.light};
`

export const SSITextH2Styled = styled.div`
  ${SSITextH2Css};
  color: ${fontColors.dark};
`

export const SSITextH2SemiBoldStyled = styled.div`
  ${SSITextH2SemiBoldStyledCss};
  color: ${fontColors.dark};
`

// FIXME just make all fonts default dark
export const SSITextH3Styled = styled.div`
  ${SSITextH3Css};
  color: ${fontColors.dark};
`

export const SSITextH3LightStyled = styled(SSITextH3Styled)`
  color: ${fontColors.light};
`

export const SSITextH4Styled = styled.div`
  ${SSITextH4Css};
  color: ${fontColors.dark};
`

export const SSITextH4SemiBoldStyled = styled.div`
  ${SSITextH4SemiBoldCss};
  color: ${fontColors.dark};
`

export const SSITextH4LightStyled = styled(SSITextH4Styled)`
  color: ${fontColors.light};
`

export const SSITextH4SemiBoldLightStyled = styled(SSITextH4SemiBoldStyled)`
  color: ${fontColors.light};
`

export const SSITextH5Styled = styled.div`
  ${SSITextH5Css};
  color: ${fontColors.dark};
`

export const SSITextH5LightStyled = styled(SSITextH5Styled)`
  color: ${fontColors.light};
`

export const SSITextH6Styled = styled.div`
  ${SSITextH6Css};
  color: ${fontColors.dark};
`

export const SSITextH6LightStyled = styled(SSITextH6Styled)`
  color: ${fontColors.light};
`

export const SSITextH7RegularStyled = styled.div`
  ${SSITextH7RegularCss};
  color: ${fontColors.dark};
`
