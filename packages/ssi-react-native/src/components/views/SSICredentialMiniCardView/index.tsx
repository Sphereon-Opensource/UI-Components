import React, {FC} from 'react'
import {ColorValue, ViewStyle} from 'react-native'
import {credentialCardColors, ImageAttributes} from '@sphereon/ui-components.core'
import SSILogo from '../../assets/logos/SSILogo'
import {SSICredentialMiniCardViewBackgroundImageStyled as BackgroundImage, SSICredentialMiniCardViewContainerStyled as Container} from '@styles'

type Props = {
  backgroundImage?: ImageAttributes
  backgroundColor?: ColorValue
  logo?: ImageAttributes
  logoColor?: ColorValue
  style?: ViewStyle
}

const SSICredentialMiniCardView: FC<Props> = (props: Props): JSX.Element => {
  const {backgroundColor = credentialCardColors.default, backgroundImage, logo, logoColor, style} = props

  return (
    <Container style={[style, {backgroundColor}]}>
      <BackgroundImage source={backgroundImage}>{(!backgroundImage || logo) && <SSILogo logo={logo} color={logoColor} />}</BackgroundImage>
    </Container>
  )
}

export default SSICredentialMiniCardView
