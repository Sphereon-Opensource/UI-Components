import React, {FC, ReactElement} from 'react'
import {fontColors} from '@sphereon/ui-components.core'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import {SSIPrimaryButtonContainerStyled as Container, SSITextH3LightStyled as Caption} from '../../../styles/components'
import {ButtonIconsEnum} from '../../../types'

export type Props = {
  caption: string
  onClick: () => Promise<void>
  icon?: ButtonIconsEnum
  disabled?: boolean // TODO implement
}

const SSIPrimaryButton: FC<Props> = (props: Props): ReactElement => {
  const {caption, icon, onClick} = props

  return (
    <Container onClick={onClick}>
      {icon && getIcon(icon, fontColors.light)}
      <Caption>{caption}</Caption>
    </Container>
  )
}

const getIcon = (icon: ButtonIconsEnum, color: string): JSX.Element => {
  switch (icon) {
    case ButtonIconsEnum.ADD:
      return <SSIAddIcon color={color} />
    default:
      return <div />
  }
}

export default SSIPrimaryButton
