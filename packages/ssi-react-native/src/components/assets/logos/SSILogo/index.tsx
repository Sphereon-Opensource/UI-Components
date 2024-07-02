import React, {FC, ReactElement} from 'react'
import {ColorValue, ImageRequireSource, ViewStyle} from 'react-native'
import FastImage, {ImageStyle, Source} from 'react-native-fast-image'
import {calculateAspectRatio, ImageAttributes, logoColors} from '@sphereon/ui-components.core'
import SSIPlaceholderLogo from '../SSIPlaceholderLogo'

type Props = {
  logo?: ImageAttributes
  size?: number
  color?: ColorValue
  style?: ViewStyle
}

const SSILogo: FC<Props> = (props: Props): ReactElement => {
  const {logo, color = logoColors.default, size = 32, style} = props

  const source: Source | ImageRequireSource = {...logo, priority: FastImage.priority.high}

  const aspectRatio = logo?.dimensions ? calculateAspectRatio(logo.dimensions.width, logo.dimensions.height) : 1

  const calculatedHeight = size
  const calculatedWidth = size * aspectRatio

  return logo ? (
    <FastImage
      style={{
        ...(style as ImageStyle),
        height: calculatedHeight,
        width: calculatedWidth > size ? size : calculatedWidth,
        maxWidth: size,
      }}
      resizeMode={FastImage.resizeMode.contain}
      source={source}
    />
  ) : (
    <SSIPlaceholderLogo style={style} size={size} color={color} />
  )
}

export default SSILogo
