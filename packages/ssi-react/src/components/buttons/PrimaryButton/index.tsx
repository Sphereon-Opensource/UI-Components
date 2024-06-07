import React, {CSSProperties, FC, ReactElement} from 'react'
import {ButtonIcon, fontColors, OpacityStyleEnum} from '@sphereon/ui-components.core'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import {PrimaryButtonContainerStyled as Container, SSITextH3LightStyled as Caption} from '../../../styles' // FIXME H3 vs H2 mobile

type Props = {
  caption: string
  onClick: () => Promise<void>
  icon?: ButtonIcon
  disabled?: boolean | (() => boolean)
  style?: CSSProperties
}

const PrimaryButton: FC<Props> = (props: Props): ReactElement => {
  const {caption, icon, onClick, style} = props
  const disabled: boolean = typeof props.disabled === 'function' ? props.disabled() : props.disabled ?? false

  const getIcon = (icon: ButtonIcon, color: string): ReactElement => {
    switch (icon) {
      case ButtonIcon.ADD:
        return <SSIAddIcon style={{...(disabled && {opacity: OpacityStyleEnum.DISABLED})}} color={color} />
      default:
        return <div />
    }
  }

  const onClicked = async (): Promise<void> => {
    if (!disabled) {
      await onClick()
    }
  }

  return (
    <Container style={{...style, ...(disabled && {opacity: OpacityStyleEnum.DISABLED})}} onClick={onClicked}>
      {icon && getIcon(icon, fontColors.light)}
      <Caption style={{...(disabled && {opacity: OpacityStyleEnum.DISABLED})}}>{caption}</Caption>
    </Container>
  )
}

export default PrimaryButton
