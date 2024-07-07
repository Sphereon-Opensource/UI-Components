import styled from 'styled-components'
import {SSIRoundedContainerStyled} from '../../containers'
import {SSITextH3Styled} from '../../../fonts'
import {gradient100TextCss} from '../../../css'

export const SecondaryButtonContainerStyled = styled(SSIRoundedContainerStyled)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 9px;
  cursor: pointer;
  width: 180px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    border: 1px solid transparent;
    background: linear-gradient(135deg, #7276f7, #7c40e8) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

export const SecondaryButtonCaptionStyled = styled(SSITextH3Styled)`
  // FIXME H3 vs H2 mobile
  ${gradient100TextCss}
`
