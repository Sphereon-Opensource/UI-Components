import React, {FC, ReactElement} from 'react'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import SSIFilterIcon from '../../assets/icons/SSIFilterIcon'
import SSIArrowDownIcon from '../../assets/icons/SSIArrowDownIcon'
import {ButtonIconsEnum} from '../../../types'
import {SSIIconButtonContainerStyled as Container} from '../../../styles/components'
import {fontColors} from '@sphereon/ui-components.core'

export type Props = {
  icon: ButtonIconsEnum
  onClick: () => Promise<void>
  disabled?: boolean // TODO implement styling
  color?: string
}

const SSIIconButton: FC<Props> = (props: Props): ReactElement => {
  const {icon, onClick, disabled = false, color = fontColors.dark} = props

  return <Container onClick={onClick}>{getIcon(icon, color)}</Container>
}

const getIcon = (icon: ButtonIconsEnum, color: string): JSX.Element => {
  switch (icon) {
    case ButtonIconsEnum.ADD:
      return <SSIAddIcon color={color} />
    case ButtonIconsEnum.FILTER:
      return <SSIFilterIcon color={color} />
    case ButtonIconsEnum.ARROW_DOWN:
      return <SSIArrowDownIcon color={color} />
    default:
      return <div />
  }
}

export default SSIIconButton
