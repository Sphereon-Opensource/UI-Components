import {LinearGradient} from 'expo-linear-gradient'
import styled from 'styled-components/native'
import {highLightGradientsColors, SSIRoundedEdgesCss} from '@sphereon/ui-components.core'

export const SSILinearGradientStyled = styled(LinearGradient).attrs(props => ({
  colors: props?.colors ?? [highLightGradientsColors['100'].secondaryColor, highLightGradientsColors['100'].primaryColor],
  start: {x: 1, y: 1},
  end: {x: 0, y: 0},
}))``

export const SSIRoundedLinearGradient = styled(SSILinearGradientStyled)`
  ${SSIRoundedEdgesCss}
`
