import styled from 'styled-components'
import {SSIRoundedContainerStyled} from '../../containers'
import {fontColors} from "@sphereon/ui-components.core";

export const SSITypeLabelContainerStyled = styled(SSIRoundedContainerStyled)`
  display: flex;
  padding: 1px 12px;
  justify-content: center;
  align-items: center;
  color: ${fontColors.light};
  user-select: none;
`
