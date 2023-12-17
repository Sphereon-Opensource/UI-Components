import React, {FC} from 'react'
import {ActivityIndicator, ColorValue, StyleProp, ViewStyle} from 'react-native'
import {elementColors} from '@sphereon/ui-components.core'

type Props = {
  size?: number | 'small' | 'large'
  color?: ColorValue
  style?: StyleProp<ViewStyle>
}

const SSIActivityIndicator: FC<Props> = (props: Props): React.ReactElement => {
  const {color = elementColors.blue, style, size = 80} = props
  return <ActivityIndicator style={style} size={size} color={color} />
}

export default SSIActivityIndicator
