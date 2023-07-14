import {calculateAspectRatio, ImageAttributes, logoColors} from '@sphereon/ui-components.core'
import React, {FC, ReactElement} from 'react'
import {ColorValue, ViewStyle} from 'react-native'
import FastImage, {ImageStyle} from 'react-native-fast-image'
import SSIPlaceholderLogo from '../SSIPlaceholderLogo'

type Props = {
  logo?: ImageAttributes
  size?: number
  color?: ColorValue
  style?: ViewStyle
}

const SSILogo: FC<Props> = (props: Props): ReactElement => {
  const {logo, color = logoColors.default, size = 32, style} = props

  return logo ? (
    <FastImage
      style={{
        ...(style as ImageStyle),
        aspectRatio: logo?.dimensions && calculateAspectRatio(logo?.dimensions.width, logo?.dimensions.height),
        height: 32,
      }}
      source={logo}
    />
  ) : (
    <SSIPlaceholderLogo style={style} size={size} color={color} />
  )
}

export default SSILogo
