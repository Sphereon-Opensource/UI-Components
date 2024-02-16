import styled from 'styled-components'
import {SSIFlexDirectionRowViewStyled} from '../../containers'
import {SSITextH3Styled} from '../../../fonts'
import {gradient100TextCss} from '../../../css'
import {backgroundColors} from '@sphereon/ui-components.core'

export const SSIDropDownListContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  position: relative;
  display: inline-block;
  text-align: left;
  align-items: center;
  gap: 2px;
`

export const SSIDropDownListSelectedValueStyled = styled(SSITextH3Styled)`
  ${gradient100TextCss}
`

export const DropDownListButtonStyled = styled.div`
  display: inline-block !important;
`

export const DropDownContainerStyled = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 250px;
  background-color: ${backgroundColors.primaryLight};
  border-radius: 8px;
  z-index: 1000;
`
