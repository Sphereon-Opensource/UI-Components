import {styled} from 'styled-components'
import {SSIFlexDirectionRowViewStyled} from '../../containers/index.js'
import {backgroundColors} from '@sphereon/ui-components.core'

export const DropDownListContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  position: relative;
  display: inline-block;
  text-align: left;
  align-items: center;
  gap: 2px;
`

export const DropDownListButtonStyled = styled.div`
  display: inline-block !important;
`

export const DropDownContainerStyled = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 250px;
  background-color: ${backgroundColors.primaryLight};
  z-index: 1000;
`
