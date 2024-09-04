import styled from 'styled-components/native'
import MaskedView from '@react-native-masked-view/masked-view'
import {SSIRoundedEdgesCss} from '@sphereon/ui-components.core'
import {SSILinearGradientStyled} from '../../../gradients'

export const SecondaryButtonMaskContainerStyled = styled.View`
  ${SSIRoundedEdgesCss};
  background-color: transparent;
  flex: 1;
  flex-direction: column;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  height: 42px;
`

export const SecondaryButtonLinearGradientStyled = styled(SSILinearGradientStyled)`
  align-items: center;
  justify-content: center;
  padding: 9px;
  flex: 1;
  flex-direction: column;
  height: 42px;
`

export const SecondaryButtonMaskedViewStyled = styled(MaskedView)`
  flex: 1;
  flex-direction: column;
  height: 42px;
`
