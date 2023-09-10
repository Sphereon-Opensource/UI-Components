import React, {CSSProperties, FC, ReactElement} from 'react'
import {gradientColors} from '@sphereon/ui-components.core'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import {
  SSISecondaryButtonCaptionStyled as Caption,
  SSISecondaryButtonContainerStyled as Container,
} from '../../../styles/components'
import {ButtonIconsEnum} from '../../../types'

export type Props = {
  caption: string
  onClick: () => Promise<void>
  icon?: ButtonIconsEnum
  disabled?: boolean
  style?: CSSProperties
}

const SSISecondaryButton: FC<Props> = (props: Props): ReactElement => {
  const {caption, icon, onClick, disabled = false, style = {}} = props

  const getIcon = (icon: ButtonIconsEnum, color: string): JSX.Element => {
    switch (icon) {
      case ButtonIconsEnum.ADD:
        return <SSIAddIcon style={{...(disabled && { opacity: 0.5 })}} color={color} />
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
    <Container style={{...style, ...(disabled && { opacity: 0.5 })}} onClick={onClicked}>
      {icon && getIcon(icon, gradientColors['100'])}
      <Caption style={{...(disabled && { opacity: 0.5 })}}>{caption}</Caption>
    </Container>
  )
}



export default SSISecondaryButton
