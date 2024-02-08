import styled from 'styled-components'
import {SSIFlexDirectionRowViewStyled} from '../../containers'
import {SSITextH3Styled} from '../../../fonts'
import {gradient100TextCss} from '../../../css'

export const SSIDropDownListContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  text-align: left;
  align-items: center;
  gap: 2px;
`

export const SSIDropDownListSelectedValueStyled = styled(SSITextH3Styled)`
  ${gradient100TextCss}
`
