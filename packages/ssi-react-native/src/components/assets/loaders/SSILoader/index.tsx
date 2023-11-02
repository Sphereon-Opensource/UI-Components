import {PureComponent} from 'react'
import {ActivityIndicator, BackHandler, ColorValue, NativeEventSubscription, StyleProp, ViewStyle} from 'react-native'

type Props = {size: number | 'small' | 'large'; color?: ColorValue; style?: StyleProp<ViewStyle>}

export default class SSILoader extends PureComponent<Props> {
  hardwareBackPressListener: NativeEventSubscription

  componentDidMount = (): void => {
    // we add this listener to block the os back button from executing on the loading screen. returning true will not let the event bubble up.
    this.hardwareBackPressListener = BackHandler.addEventListener('hardwareBackPress', () => true)
  }

  componentWillUnmount = (): void => {
    this.hardwareBackPressListener.remove()
  }

  render() {
    return <ActivityIndicator style={this.props.style} size={this.props.size} color={this.props.color} />
  }
}
