import React, {FC} from 'react'
import {ActivityIndicator, ColorValue, StyleProp, ViewStyle} from 'react-native'

type Props = {size?: number | 'small' | 'large'; color?: ColorValue; style?: StyleProp<ViewStyle>}

const SSIActivityIndicator: FC<Props> = ({color, style, size = 80}): React.ReactElement => {

  return (
     <ActivityIndicator style={style} size={size} color={color} />
  )
}

export default SSIActivityIndicator
