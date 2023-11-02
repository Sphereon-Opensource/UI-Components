import React, {FC} from 'react'
import {ActivityIndicator, ColorValue, StyleProp, ViewStyle} from 'react-native'

type Props = {size: number | 'small' | 'large'; color?: ColorValue; style?: StyleProp<ViewStyle>}

const SSIActivityIndicator: FC<Props> = (props: Props): React.ReactElement => {
  return (
     <ActivityIndicator style={props.style} size={props.size} color={props.color} />
  )
}

export default SSIActivityIndicator
