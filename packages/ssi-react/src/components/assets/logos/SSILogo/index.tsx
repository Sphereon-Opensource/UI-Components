import {calculateAspectRatio, ImageAttributes, logoColors} from '@sphereon/ui-components.core'
import React, {CSSProperties, FC, ReactElement} from 'react'
import SSIPlaceholderLogo from '../SSIPlaceholderLogo'

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
        aspectRatio: logo?.dimensions && calculateAspectRatio(logo?.dimensions.width, logo?.dimensions.height),
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
