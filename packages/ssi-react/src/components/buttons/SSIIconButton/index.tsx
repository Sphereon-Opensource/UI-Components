import React, {FC, MouseEventHandler, ReactElement} from 'react'
import {ButtonIcon, fontColors} from '@sphereon/ui-components.core'
import SSIAddIcon from '../../assets/icons/SSIAddIcon'
import SSIFilterIcon from '../../assets/icons/SSIFilterIcon'
import SSIArrowDownIcon from '../../assets/icons/SSIArrowDownIcon'
import {SSIIconButtonContainerStyled as Container, SSITextH3Styled as Caption} from '../../../styles'
import MeatBallsIcon from '../../assets/icons/MeatBallsIcon'
import DeleteIcon from '../../assets/icons/DeleteIcon'

type Props = {
  icon: ButtonIcon
  caption?: string
  onClick: MouseEventHandler
  disabled?: boolean // TODO implement styling
  iconColor?: string
}

const SSIIconButton: FC<Props> = (props: Props): ReactElement => {
  const {caption, icon, onClick, disabled = false, iconColor = fontColors.dark} = props

  return (
    <Container onClick={onClick}>
      {getIcon(icon, iconColor)}
      {caption && <Caption>{caption}</Caption>}
    </Container>
  )
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
      // FIXME we need to look at other sizes of icons
      return <DeleteIcon color={color} width={15} height={16} />
    case ButtonIcon.FILTER:
      return <SSIFilterIcon color={color} />
    default:
      return <div />
  }
}

export default SSIIconButton
