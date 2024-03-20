import React, {CSSProperties, FC, ReactElement} from 'react'
import {ButtonIcon, OpacityStyleEnum} from '@sphereon/ui-components.core'
import SSIAddIcon from '../../assets/icons/SSIAddIcon/index.js'
import {SSISecondaryButtonCaptionStyled as Caption, SSISecondaryButtonContainerStyled as Container} from '../../../styles/index.js'
import {gradientColors} from '../../../styles/colors.js'

type Props = {
  caption: string
  onClick: () => Promise<void>
  icon?: ButtonIcon
  disabled?: boolean
  style?: CSSProperties
}

const SSISecondaryButton: FC<Props> = (props: Props): ReactElement => {
  const {caption, icon, onClick, disabled = false, style = {}} = props

  const getIcon = (icon: ButtonIcon, color: string): JSX.Element => {
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

export default SSISecondaryButton
