// @ts-ignore
import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'

export const SSICredentialMiniCardViewContainerStyled = styled.View`
  width: 75px;
  height: 50px;
  border-radius: 4.6px;
  overflow: hidden;
`

export const SSICredentialMiniCardViewBackgroundImageStyled = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`
