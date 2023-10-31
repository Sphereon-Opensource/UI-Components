import React, {CSSProperties, FC, ReactElement} from 'react'
import {ButtonIcon, fontColors} from '@sphereon/ui-components.core'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import {SSIPrimaryButtonContainerStyled as Container, SSITextH3LightStyled as Caption} from '../../../styles'

type Props = {
  caption: string
  onClick: () => Promise<void>
  icon?: ButtonIcon
  disabled?: boolean
  style?: CSSProperties
}

const SSIPrimaryButton: FC<Props> = (props: Props): ReactElement => {
  const {caption, icon, onClick, disabled = false, style = {}} = props

  const getIcon = (icon: ButtonIcon, color: string): JSX.Element => {
    switch (icon) {
      case ButtonIcon.ADD:
        return <SSIAddIcon style={{...(disabled && {opacity: 0.5})}} color={color} />
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
    <Container style={{...style, ...(disabled && {opacity: 0.5})}} onClick={onClicked}>
      {icon && getIcon(icon, fontColors.light)}
      <Caption style={{...(disabled && {opacity: 0.5})}}>{caption}</Caption>
    </Container>
  )
}

export default SSIPrimaryButton
