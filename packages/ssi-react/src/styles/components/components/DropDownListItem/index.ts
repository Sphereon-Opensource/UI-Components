import styled from 'styled-components'
import {SSIFlexDirectionRowViewStyled} from '../../containers'
import {SSITextH2DarkStyled} from '../../../fonts'
import {backgroundColors} from '@sphereon/ui-components.core'

export const DropDownListItemContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  flex-direction: row;
  align-items: center;
  background-color: ${backgroundColors.primaryLight};
  padding: 10px 16px;
`

export const DropDownListItemCaptionContainerStyled = styled(SSITextH2DarkStyled)`
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
