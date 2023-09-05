import styled from 'styled-components'
import {SSIRoundedContainerStyled} from '../../containers'
import {gradientColors} from '@sphereon/ui-components.core'

export const SSIPrimaryButtonContainerStyled = styled(SSIRoundedContainerStyled)`
  background: ${gradientColors['100']};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 8px 6px 8px;
  cursor: pointer;
`
