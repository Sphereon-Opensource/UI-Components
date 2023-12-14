import React, {FC} from 'react'
import {ColorValue, PressableProps, ViewStyle} from 'react-native'
import {fontColors, highLightGradientsColors, OpacityStyleEnum} from '@sphereon/ui-components.core'
import {
  SSITouchableOpacityButtonFlexRowStyled as Button,
  SSITextH2LightStyled as ButtonCaption,
  PrimaryButtonLinearGradientStyled as LinearGradient,
} from '../../../styles'

export interface Props extends Omit<PressableProps, 'disabled'> {
  caption: string
  onPress: () => void
  disabled?: boolean | (() => boolean)
  backgroundColors?: Array<string>
  captionColor?: ColorValue
  style?: ViewStyle
}

const PrimaryButton: FC<Props> = (props: Props): JSX.Element => {
  const {
    captionColor = fontColors.light,
    backgroundColors = [highLightGradientsColors['100'].secondaryColor, highLightGradientsColors['100'].primaryColor],
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
        ...style,
        ...(disabled && {opacity: OpacityStyleEnum.DISABLED}),
      }}>
      <LinearGradient colors={backgroundColors}>
        <ButtonCaption style={{color: captionColor}}>{caption}</ButtonCaption>
      </LinearGradient>
    </Button>
  )
}

export default PrimaryButton