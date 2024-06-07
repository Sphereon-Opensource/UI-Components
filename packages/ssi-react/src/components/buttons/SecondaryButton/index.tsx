import React, {CSSProperties, FC, ReactElement} from 'react'
import {ButtonIcon, OpacityStyleEnum} from '@sphereon/ui-components.core'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import {SecondaryButtonCaptionStyled as Caption, SecondaryButtonContainerStyled as Container} from '../../../styles'
import {gradientColors} from '../../../styles/colors'

type Props = {
  caption: string
  onClick: () => Promise<void>
  icon?: ButtonIcon
  disabled?: boolean | (() => boolean)
  style?: CSSProperties
}

const SecondaryButton: FC<Props> = (props: Props): ReactElement => {
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
      {icon && getIcon(icon, gradientColors['100'])}
      <Caption style={{...(disabled && {opacity: OpacityStyleEnum.DISABLED})}}>{caption}</Caption>
    </Container>
  )
}

export default SecondaryButton
