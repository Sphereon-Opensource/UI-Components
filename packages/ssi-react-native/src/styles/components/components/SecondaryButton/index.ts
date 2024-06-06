import styled from 'styled-components/native'
import {SSILinearGradientStyled} from '../../../gradients'

// TODO extend rounded css
export const SecondaryButtonMaskContainerStyled = styled.View`
  background-color: transparent;
  flex: 1;
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`

export const SecondaryButtonLinearGradientStyled = styled(SSILinearGradientStyled)`
  align-items: center;
  justify-content: center;
  padding: 9px;
  width: 180px;
`
