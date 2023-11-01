import React, {CSSProperties, FC, ReactElement} from 'react'
import {credentialCardColors, ImageAttributes} from '@sphereon/ui-components.core'
import SSILogo from '../../assets/logos/SSILogo'
import {
  SSICredentialMiniCardViewContainerStyled as Container,
  SSICredentialMiniCardViewBackgroundImageStyled as BackgroundImage,
} from '../../../styles'

type Props = {
  backgroundImage?: ImageAttributes
  backgroundColor?: string
  logo?: ImageAttributes
  logoColor?: string
  style?: CSSProperties
}

const SSICredentialMiniCardView: FC<Props> = (props: Props): ReactElement => {
  const {backgroundColor = credentialCardColors.default, backgroundImage, logo, logoColor, style} = props

  return (
    <Container style={{...style, backgroundColor}}>
      <BackgroundImage
        style={{
          // FIXME Putting backgroundSize here as for some reason putting this on the styled component does not work
          ...(backgroundImage?.uri && {background: `url(${backgroundImage.uri})`, backgroundSize: 'cover'}),
        }}>
        {(!backgroundImage || logo) && <SSILogo logo={logo} color={logoColor} />}
      </BackgroundImage>
    </Container>
  )
}

export default SSICredentialMiniCardView
