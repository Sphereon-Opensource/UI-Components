import styled from 'styled-components'
import {SSIRoundedContainerStyled} from '../../containers'
import {gradientColors} from '../../../colors'

export const PrimaryButtonContainerStyled = styled(SSIRoundedContainerStyled)`
  background: ${gradientColors['100']};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 9px;
  cursor: pointer;
  width: 180px;
`
