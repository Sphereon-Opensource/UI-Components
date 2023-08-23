import styled from 'styled-components'
import {SSIRoundedContainerStyled} from '../../containers'
import {fontColors, gradientColors} from "@sphereon/ui-components.core";

export const SSIPrimaryButtonContainerStyled = styled(SSIRoundedContainerStyled)`
  height: 32px;
  background: ${gradientColors["100"]};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-left: 8px;
  padding-right: 8px;
  color: ${fontColors.light};
  cursor: pointer;
`

export const SSIPrimaryButtonCaptionStyled = styled.div`
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
`
