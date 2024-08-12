import React, {FC, ReactElement} from 'react'
import {ColorValue, PressableProps, ViewStyle} from 'react-native'
import {fontColors, gradientsColors, OpacityStyleEnum} from '@sphereon/ui-components.core'
import {
  SSITouchableOpacityButtonFlexRowStyled as Button,
  SSITextH2LightStyled as Caption,
  SSIRoundedCenteredLinearGradientStyled as LinearGradient,
} from '../../../styles'

export interface Props extends Omit<PressableProps, 'disabled'> {
  caption: string
  onPress: () => void
  disabled?: boolean | (() => boolean)
  backgroundColors?: Array<string>
  captionColor?: ColorValue
  style?: ViewStyle
}

const PrimaryButton: FC<Props> = (props: Props): ReactElement => {
  const {
    captionColor = fontColors.light,
    backgroundColors = [gradientsColors['100'].secondaryColor, gradientsColors['100'].primaryColor],
    onPress,
    style,
    caption,
  } = props
  const disabled: boolean = typeof props.disabled === 'function' ? props.disabled() : props.disabled ?? false

  // Setting minimal two colors for gradient
  if (backgroundColors.length === 1) {
    backgroundColors.push(backgroundColors[0])
  }

  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      activeOpacity={OpacityStyleEnum.DISABLED}
      style={{
        ...(disabled && {opacity: OpacityStyleEnum.DISABLED}),
      }}>
      <LinearGradient style={{...style}} colors={backgroundColors}>
        <Caption style={{color: captionColor}}>{caption}</Caption>
      </LinearGradient>
    </Button>
  )
}

export default PrimaryButton
