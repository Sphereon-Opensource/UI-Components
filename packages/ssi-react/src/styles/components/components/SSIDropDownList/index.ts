import styled from 'styled-components'
import {SSIFlexDirectionRowViewStyled} from '../../containers'
import {gradientColors} from "@sphereon/ui-components.core";

export const SSIDropDownListContainerStyled = styled(SSIFlexDirectionRowViewStyled)`
  text-align: left;
  align-items: center;
  gap: 2px;
`

export const SSIDropDownListSelectedValueStyled = styled.div`
  background: ${gradientColors["100"]};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
