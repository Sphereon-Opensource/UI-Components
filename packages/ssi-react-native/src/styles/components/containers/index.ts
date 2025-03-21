import {BlurView} from '@react-native-community/blur'
// @ts-ignore
import styled from 'styled-components/native'

import {SSIRoundedEdgesCss} from '@sphereon/ui-components.core'

export const SSIAlphaContainerStyled = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.2);
`

export const SSIBlurredContainerStyled = styled(BlurView).attrs({
  blurType: 'light',
  blurAmount: 3,
})`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.25);
`

export const SSIFlexDirectionRowViewStyled = styled.View`
  flex-direction: row;
`

export const SSIRoundedContainerStyled = styled.View`
  ${SSIRoundedEdgesCss};
  overflow: hidden;
`
