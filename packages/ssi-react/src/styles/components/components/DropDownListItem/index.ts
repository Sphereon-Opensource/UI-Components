import styled from 'styled-components'
import {SSIFlexDirectionRowViewStyled} from '../../containers/index.js'
import {SSITextH2Styled} from '../../../fonts/index.js'
import {backgroundColors} from '@sphereon/ui-components.core'

export const DropDownListItemContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  flex-direction: row;
  align-items: center;
  background-color: ${backgroundColors.primaryLight};
  padding: 10px 16px;
`

export const DropDownListItemCaptionContainerStyled = styled(SSITextH2Styled)`
  flex: 1;
  margin-right: 8px;
`

export const DropDownListItemIconContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  margin-right: 12px;
`
