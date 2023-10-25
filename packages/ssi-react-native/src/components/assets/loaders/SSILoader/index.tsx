import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PureComponent} from 'react';
import {ActivityIndicator, BackHandler, NativeEventSubscription, StyleProp, ViewStyle} from 'react-native';

import {ScreenRoutesEnum, StackParamList} from '../../../../types';

type Props = NativeStackScreenProps<StackParamList, ScreenRoutesEnum.LOADING> & { style?: StyleProp<ViewStyle> };

export default class SSILoader extends PureComponent<Props> {
  hardwareBackPressListener: NativeEventSubscription;

  componentDidMount = (): void => {
    // we add this listener to block the os back button from executing on the loading screen. returning true will not let the event bubble up.
    this.hardwareBackPressListener = BackHandler.addEventListener('hardwareBackPress', () => true);
  };

  componentWillUnmount = (): void => {
    this.hardwareBackPressListener.remove();
  };

  render() {
    return (
      <ActivityIndicator />
    );
  }
}
