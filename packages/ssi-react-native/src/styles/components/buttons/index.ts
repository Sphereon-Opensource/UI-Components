import {TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import {SSIRoundedLinearGradient} from '../../gradients'

export const SSITouchableOpacityButtonFlexRowStyled = styled(TouchableOpacity)`
  flex-direction: row;
`

export const SSIRoundedCenteredLinearGradientStyled = styled(SSIRoundedLinearGradient)`
  align-items: center;
  justify-content: center;
  padding: 9px;
  flex: 1;
  flex-direction: column;
  height: 42px;
`
