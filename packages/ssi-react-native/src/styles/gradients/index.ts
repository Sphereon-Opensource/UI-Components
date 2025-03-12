import {LinearGradient} from 'expo-linear-gradient'
// @ts-ignore
import styled from 'styled-components/native'
import {gradientsColors, SSIRoundedEdgesCss} from '@sphereon/ui-components.core'

// @ts-ignore
export const SSILinearGradientStyled = styled(LinearGradient).attrs(props => ({
  colors: props?.colors ?? [gradientsColors['100'].secondaryColor, gradientsColors['100'].primaryColor],
  start: {x: 1, y: 1},
  end: {x: 0, y: 0},
}))``

export const SSIRoundedLinearGradient = styled(SSILinearGradientStyled)`
  ${SSIRoundedEdgesCss}
`
