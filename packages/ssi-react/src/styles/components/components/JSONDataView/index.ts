import styled from 'styled-components'
import {backgroundColors, borderColors, fontColors, SSIRoundedEdgesCss} from '@sphereon/ui-components.core'
import {SSITextH2SemiBoldStyledCss, SSITextH5Css, SSITextH7SemiBoldCss} from '../../../css'

export const JSONDataViewContainerStyled = styled.div`
  ${SSIRoundedEdgesCss};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${backgroundColors.primaryLight};
  border: 1px solid ${borderColors.light};
`

export const JSONDataViewHeaderContainerStyled = styled.div`
  padding: 12px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid ${borderColors.light};
`

export const JSONDataViewColumnHeaderCaptionStyled = styled.div`
  display: flex;
  flex-grow: 1;
  ${SSITextH2SemiBoldStyledCss};
  color: ${fontColors.lightGrey};
  max-width: 200px;
`

export const JSONDataViewDataContainerCaptionStyled = styled.div`
  padding-right: 24px;
  padding-bottom: 24px;
  padding-left: 12px;
  display: flex;
  flex-direction: row;
`

export const JSONDataViewDataImageValueStyled = styled.div`
  background-size: cover;
  height: 130px;
  border-radius: 10px;
`

export const JSONDataViewDataTextValueStyled = styled.span`
  color: ${fontColors.dark};
  ${SSITextH7SemiBoldCss}
`

export const JSONDataViewDataLabelStyled = styled.span`
  color: ${fontColors.dark};
  ${SSITextH5Css};
  width: 212px;
  display: inline-block;
`
