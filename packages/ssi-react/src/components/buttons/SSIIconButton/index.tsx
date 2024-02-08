import React, {FC, MouseEventHandler, ReactElement} from 'react'
import {ButtonIcon, fontColors} from '@sphereon/ui-components.core'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import SSIFilterIcon from '../../assets/icons/SSIFilterIcon'
import SSIArrowDownIcon from '../../assets/icons/SSIArrowDownIcon'
import {SSIIconButtonContainerStyled as Container} from '../../../styles'
import MeatBallsIcon from '../../assets/icons/MeatBallsIcon'
import DeleteIcon from '../../assets/icons/DeleteIcon'

type Props = {
  icon: ButtonIcon
  onClick: MouseEventHandler
  disabled?: boolean // TODO implement styling
  color?: string
}

const SSIIconButton: FC<Props> = (props: Props): ReactElement => {
  const {icon, onClick, disabled = false, color = fontColors.dark} = props

  return <Container onClick={onClick}>{getIcon(icon, color)}</Container>
}

const getIcon = (icon: ButtonIcon, color: string): JSX.Element => {
  switch (icon) {
    case ButtonIcon.ADD:
      return <SSIAddIcon color={color} />
    case ButtonIcon.ARROW_DOWN:
      return <SSIArrowDownIcon color={color} />
    case ButtonIcon.MEATBALLS:
      return <MeatBallsIcon color={color} />
    case ButtonIcon.DELETE:
      return <DeleteIcon color={color} />
    case ButtonIcon.FILTER:
      return <SSIFilterIcon color={color} />
    default:
      return <div />
  }
}

export default SSIIconButton
