import styled from 'styled-components'
import {SSIRoundedContainerStyled} from '../../containers'
import {gradientColors} from '@sphereon/ui-components.core'
import {SSITextH3Styled} from "../../fonts";

export const SSISecondaryButtonContainerStyled = styled(SSIRoundedContainerStyled)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 8px 6px 8px;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    border: 1px solid transparent;
    background: linear-gradient(135deg, #7276F7, #7C40E8) border-box;
    -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

export const SSISecondaryButtonCaptionStyled = styled(SSITextH3Styled)`
  background: ${gradientColors['100']};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
