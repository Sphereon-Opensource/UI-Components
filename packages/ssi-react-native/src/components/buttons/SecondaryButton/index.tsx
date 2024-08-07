import React, {FC} from 'react'
import {ColorValue, PressableProps, ViewStyle} from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view'
import {fontColors, gradientsColors, OpacityStyleEnum} from '@sphereon/ui-components.core'
import {
  SSITouchableOpacityButtonFlexRowStyled as Button,
  SSITextH2SecondaryButtonStyled as ButtonCaption,
  SecondaryButtonLinearGradientStyled as LinearGradient,
  SecondaryButtonMaskContainerStyled as MaskContainer,
} from '../../../styles'

export interface Props extends Omit<PressableProps, 'disabled'> {
  caption: string
  onPress: () => void
  disabled?: boolean | (() => boolean)
  borderColors?: Array<string>
  captionColor?: ColorValue
  style?: ViewStyle
}

const SecondaryButton: FC<Props> = (props: Props): JSX.Element => {
  const {
    caption,
    captionColor = fontColors.secondaryButton,
    borderColors = [gradientsColors['100'].secondaryColor, gradientsColors['100'].primaryColor],
    onPress,
    style,
  } = props
  const disabled: boolean = typeof props.disabled === 'function' ? props.disabled() : props.disabled ?? false

  // Setting minimal two colors for gradient
  if (borderColors.length === 1) {
    borderColors.push(borderColors[0])
  }

  return (
    <Button
      onPress={onPress}
      disabled={disabled}
      activeOpacity={OpacityStyleEnum.DISABLED}
      style={{
        ...(disabled && {opacity: OpacityStyleEnum.DISABLED}),
      }}>
      <MaskedView maskElement={<MaskContainer>{caption && <ButtonCaption>{caption}</ButtonCaption>}</MaskContainer>}>
        <LinearGradient style={style} colors={borderColors}>
          <ButtonCaption style={{color: captionColor}}>{caption}</ButtonCaption>
        </LinearGradient>
      </MaskedView>
    </Button>
  )
}

export default SecondaryButton
