import {SSIFlexDirectionRowViewStyled} from '../../containers'
import styled from 'styled-components'
import {backgroundColors} from '@sphereon/ui-components.core'
import {SSITextH2Styled} from '../../../fonts'

export const DropDownListItemContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  flex: 1;
  background-color: ${backgroundColors.primaryLight};
`

export const DropDownListItemCaptionContainerStyled = styled(SSITextH2Styled)`
  margin: 13px 0 11px 16px;
`

export const DropDownListItemIconContainerStyled = styled.div`
  width: 42px;
  margin: 4px 6px 2px auto;
  align-items: center;
  justify-content: center;
`
