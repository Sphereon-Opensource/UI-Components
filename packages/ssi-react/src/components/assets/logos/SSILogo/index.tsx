import React, {CSSProperties, FC, ReactElement} from 'react'
import {calculateAspectRatio, ImageAttributes, logoColors} from '@sphereon/ui-components.core'
import SSIPlaceholderLogo from '../SSIPlaceholderLogo/index.js'

type Props = {
  logo?: ImageAttributes
  size?: number
  color?: string
  style?: CSSProperties
}

const SSILogo: FC<Props> = (props: Props): ReactElement => {
  const {logo, color = logoColors.default, size = 32, style} = props

  return logo ? (
    <div
      style={{
        ...style,
        ...(logo?.dimensions && {aspectRatio: calculateAspectRatio(logo?.dimensions.width, logo?.dimensions.height)}),
        height: size,
        background: `url(${logo.uri})`,
        backgroundSize: 'cover',
      }}
    />
  ) : (
    <SSIPlaceholderLogo style={style} size={size} color={color} />
  )
}

export default SSILogo
