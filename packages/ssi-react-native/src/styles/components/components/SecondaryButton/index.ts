import styled from 'styled-components/native'
import MaskedView from '@react-native-masked-view/masked-view'
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

export const SecondaryButtonMaskedViewStyled = styled(MaskedView)`
  flex: 1;
`

export const SecondaryButtonLinearGradientStyled = styled(SSILinearGradientStyled)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
